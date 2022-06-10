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

// Types
export type button = {
  href?:string,
  text:string,
  icon?:ReactElement,
  isLink?:boolean,
}

const navbarStyleClasses = "bg-indigo-800 text-white text-lg";
const navbarLayoutClasses = "grid grid-cols-4 items-center"
const buttonStyleClasses = "hover:bg-white hover:text-indigo-800 font-semibold md:hover:rounded-lg md:border-none border-indigo-900 border-b-[1px]";
const buttonLayoutClasses = "px-3 w-full md:w-auto md:inline-block";


//combiners
const navbarClasses = `${navbarLayoutClasses} ${navbarStyleClasses}`;
const buttonClasses = `${buttonLayoutClasses} ${buttonStyleClasses}`;
const mobileButtonClasses = "md:flex w-full md:w-auto text-left text-bold mt-5 md:mt-0 border-t-2 border-indigo-900 md:border-none";
const siteNameClasses = "font-bold text-2xl pl-2 p-4 rounded-xl my-2 ml-0 md:ml-1";
const siteNameStyles = {fontFamily: "'Patrick Hand', serif"}
const buttonStyles = {fontFamily: "'Patrick Hand', serif"};

const NavButton = (props: { href?:string, text:string, icon?:ReactElement ,isLink?:boolean }) => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  if(props.isLink) {
    return(
      <Link href={props.href ? props.href : ""}><a className={buttonClasses} style={buttonStyles}><span className="pr-2 w-8">{props.icon}</span><span>{props.text}</span></a></Link>
    )
  }
  return (
    <a className={buttonClasses} href={props.href ? props.href : ""}><span className="pr-2 w-8">{props.icon}</span><span>{props.text}</span></a>
  )
}

const Navbar = (props: { buttons:button[], siteName?:string, siteIcon?:ReactElement }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const [session, setSession]:any = useState(null);
  //const session = ;

  useEffect(() => {
    return setSession(supabase.auth.session())
  }, [])
  
  return(
    <nav className={navbarClasses}>
      <Link href={"/"}><a className={`col-span-3 sm:col-span-2 justify-self-end md:justify-self-start ${siteNameClasses}`} style={siteNameStyles}><span className="p-2">{props.siteIcon}</span><span>{props.siteName || "Eventide Blog"}</span></a></Link>{/* Col 1 on md+, Col 2 on all others */}
      <div className="justify-self-end justify-items-end w-max md:w-auto md:col-span-2"> {/* Col 3 */}
        <div className="md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}><FontAwesomeIcon icon={faBars} className="hover:bg-white hover:text-indigo-700 font-semibold px-2 hover:rounded" /></div>
        <div className={`hidden md:contents `}> 
          {props.buttons.map((button:button) => (
            <NavButton key={`${button.href}${button.text}`} href={button.href} icon={button.icon} text={button.text} isLink={button.isLink ? true : false} />
          ))} 
          <div className={session ? buttonClasses : "hidden"} style={buttonStyles} onClick={() => setLogoutOpen((prev) => !prev)}>Profile</div>
          <div className={session ? "hidden" : buttonClasses} style={buttonStyles} onClick={() => setLoginOpen((prev) => !prev)}><span className="pr-2 w-8"><FontAwesomeIcon icon={faUser} /></span><span>Login</span></div>
        </div>
       
      </div>
      <div className="col-span-4 justify-self-start md:justify-self-end md:justify-items-end w-full md:w-auto">
        <div className={isNavOpen ? `md:hidden flex flex-col w-full` : `hidden`}>{props.buttons.map((button:button) => (
            <NavButton key={`${button.href}${button.text}`} href={button.href} icon={button.icon} text={button.text} isLink={button.isLink ? true : false} />
          ))} 
          <div className={session ? buttonClasses : "hidden border-none"} style={buttonStyles} onClick={() => setLogoutOpen((prev) => !prev)}>Profile</div>
          <div className={session ? `hidden` : `${buttonClasses}`} style={buttonStyles} onClick={() => setLoginOpen((prev) => !prev)}><span className="pr-2 w-8"><FontAwesomeIcon icon={faUser} /></span><span>Login</span></div>  
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