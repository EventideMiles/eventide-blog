import '@fortawesome/fontawesome-svg-core/styles.css'; // prevents a stupid FA bug
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent fontawesome from dynamically adding its css since we did it manually above

import Link from 'next/link';
import { ReactElement, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import supabase from '../utils/supabaseClient';
import LoginForm, { LogoutForm } from './login';
import Gravatar from 'react-gravatar';

// Types
export type button = {
  href?:string,
  text:string,
  icon?:ReactElement,
  isLink?:boolean,
}

// tailwind classes
const NAVBAR_STYLE_CLASSES = "bg-indigo-800 text-white text-lg";
const NAVBAR_LAYOUT_CLASSES = "grid grid-cols-4 items-center";
const SITENAME_STYLE_CLASSES = "font-bold text-2xl rounded-xl";
const SITENAME_LAYOUT_CLASSES = "pl-2 p-4 my-2 ml-0 md:ml-1 col-span-3 sm:col-span-2 justify-self-end md:justify-self-start";
const BUTTON_STYLE_CLASSES = "hover:bg-white hover:text-indigo-800 font-semibold md:hover:rounded-lg md:border-none border-indigo-900 border-b-[1px]";
const BUTTON_LAYOUT_CLASSES = "px-3 w-full md:w-auto md:inline-block md-colspan-2";

// style objects
const SITENAME_STYLES = {fontFamily: "'Patrick Hand', serif"}
const BUTTON_STYLES = {fontFamily: "'Patrick Hand', serif"};

// combined class strings
const NAVBAR_CLASSES = `${NAVBAR_LAYOUT_CLASSES} ${NAVBAR_STYLE_CLASSES}`;
const BUTTON_CLASSES = `${BUTTON_LAYOUT_CLASSES} ${BUTTON_STYLE_CLASSES}`;
const SITENAME_CLASSES = `${SITENAME_LAYOUT_CLASSES} ${SITENAME_STYLE_CLASSES}`;

const NavButton = (props: { href?:string, text:string, icon?:ReactElement ,isLink?:boolean }) => {
  if(props.isLink) {
    return(
      <Link href={props.href ? props.href : ""}><a className={BUTTON_CLASSES} style={BUTTON_STYLES}><span className="pr-2 w-8">{props.icon}</span><span>{props.text}</span></a></Link>
    )
  }
  return (
    <a className={BUTTON_CLASSES} href={props.href ? props.href : ""}><span className="pr-2 w-8">{props.icon}</span><span>{props.text}</span></a>
  )
}

const Navbar = (props: { buttons:button[], siteName?:string, siteIcon?:ReactElement, extraMobileInfo?:any[] }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const [user, setUser]:any = useState(null)
  const [gravatarElement, setGravatarElement] = useState(<div></div>);

  useEffect(() => {
    const localUserString = localStorage.getItem("localUser");
    const user = localUserString ? JSON.parse(localUserString) : null;
    setUser(user);
    setGravatarElement(<Gravatar email={user?.email || "test@test.com"} size={25} className="rounded-full inline-block align-middle" />)
    return;
  }, [user])
  
  return(
    <nav className={NAVBAR_CLASSES}>
      <Link href={"/"}><a className={SITENAME_CLASSES} style={SITENAME_STYLES}><span className="p-2">{props.siteIcon}</span><span>{props.siteName || "Eventide Blog"}</span></a></Link>{/* Col 1 on md+, Col 2 on all others */}
      <div className="justify-self-end justify-items-end w-max md:w-auto md:col-span-2"> {/* Col 3 */}
        <div className="md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}><FontAwesomeIcon icon={faBars} className="hover:bg-white hover:text-indigo-800 font-semibold px-2 hover:rounded" /></div>
        <div className={`hidden md:contents `}> 
          {props.buttons.map((button:button) => (
            <NavButton key={`${button.href}${button.text}`} href={button.href} icon={button.icon} text={button.text} isLink={button.isLink ? true : false} />
          ))} 
          <div className={user ? BUTTON_CLASSES : "hidden"} style={BUTTON_STYLES} onClick={() => setLogoutOpen((prev) => !prev)}><span className="pr-2 w-8">{gravatarElement}</span><span>Profile</span></div>
          <div className={user ? "hidden" : BUTTON_CLASSES} style={BUTTON_STYLES} onClick={() => setLoginOpen((prev) => !prev)}><span className="pr-2 w-8"><FontAwesomeIcon icon={faUser} /></span><span>Login</span></div>
        </div>
       
      </div>
      <div className="col-span-4 justify-self-start md:justify-self-end md:justify-items-end w-full md:w-auto">
        <div className={isNavOpen ? `md:hidden flex flex-col w-full` : `hidden`}>{props.buttons.map((button:button) => (
            <NavButton key={`${button.href}${button.text}`} href={button.href} icon={button.icon} text={button.text} isLink={button.isLink ? true : false} />
          ))} 
          <div className={user ? BUTTON_CLASSES : "hidden border-none"} style={BUTTON_STYLES} onClick={() => setLogoutOpen((prev) => !prev)}><span className="pr-2 w-8">{gravatarElement}</span><span>Profile</span></div>
          <div className={user ? `hidden` : `${BUTTON_CLASSES}`} style={BUTTON_STYLES} onClick={() => setLoginOpen((prev) => !prev)}><span className="pr-2 w-8"><FontAwesomeIcon icon={faUser} /></span><span>Login</span></div>
          {props.extraMobileInfo?.map((info:any, iteration=0) => (
            <span key={`mobileExtraInfo ${iteration++}`} className="text-center justify-self-center">{info}</span>
          ))}
        </div>
        <div className={isLogoutOpen ? `justify-self-end` : `hidden`}><LogoutForm /></div>
        <div className={isLoginOpen ? `justify-self-end` : `hidden`}><LoginForm /></div>
      </div>
    </nav>
  )
}

const cssTest = () => {
  return(
    <div className=""></div>
  )
}

export { Navbar as default }