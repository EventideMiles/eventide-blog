import '@fortawesome/fontawesome-svg-core/styles.css'; // prevents a stupid FA bug
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent fontawesome from dynamically adding its css since we did it manually above

import Link from 'next/link';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Types
type button = {
  href:string,
  text:string,
  icon?:ReactElement,
  isLink?:boolean
}

const navbarClasses = "bg-indigo-800 text-white text-lg flex flex-wrap items-center justify-between";
const buttonClasses = "hover:bg-white hover:text-indigo-800 font-semibold px-3 md:hover:rounded-lg md:inline-block md:border-none border-indigo-900 border-b-[1px] flex flex-row";
const mobileButtonClasses = "md:flex w-full md:w-auto text-left text-bold mt-5 md:mt-0 border-t-2 border-indigo-900 md:border-none";
const showMobileButtonClasses = `${mobileButtonClasses}`;
const hideMobileButtonClasses = `hidden ${mobileButtonClasses}`;
const siteNameClasses = "font-bold text-2xl pl-2 p-4 rounded-xl my-2 ml-0 md:ml-1";
const siteNameStyles = {fontFamily: "'Patrick Hand', serif"}
const buttonStyles = {fontFamily: "'Patrick Hand', serif"};

const NavButton = (props: { href:string, text:string, icon?:ReactElement ,isLink?:boolean }) => {
  if(props.isLink) {
    return(
      <Link href={props.href}><a className={buttonClasses} style={buttonStyles}><span className="pr-2 w-7">{props.icon}</span><span>{props.text}</span></a></Link>
    )
  }
  return (
    <a className={buttonClasses} href={props.href}><span className="pr-2 w-7">{props.icon}</span><span>{props.text}</span></a>
  )
}

const Navbar = (props: { buttons:button[], siteName?:string, siteIcon?:ReactElement }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return(
    <nav className={navbarClasses}>
      <div className="md:hidden"></div>
      <Link href={"/"}><a className={siteNameClasses} style={siteNameStyles}><span className="p-2">{props.siteIcon}</span><span>{props.siteName || "Eventide Blog"}</span></a></Link>
      <div className="flex md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}><FontAwesomeIcon icon={faBars} className="hover:bg-white hover:text-indigo-700 font-semibold px-2 hover:rounded" /></div>
      <div className={ isNavOpen ? showMobileButtonClasses : hideMobileButtonClasses }> 
        {props.buttons.map((button:button) => (
          <NavButton key={`${button.href}${button.text}`} href={button.href} icon={button.icon} text={button.text} isLink={button.isLink ? true : false} />
        ))}
      </div>
    </nav>
  )
}

const cssTest = () => {
  return(
    <div className="hover:bg-white hover:text-indigo-800 font-semibold px-3 md:hover:rounded-lg md:inline-block md:border-none border-indigo-900 border-b-[1px] flex flex-row mb-3"></div>
  )
}

export { Navbar as default }