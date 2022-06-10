import '@fortawesome/fontawesome-svg-core/styles.css'; // prevents a stupid FA bug
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent fontawesome from dynamically adding its css since we did it manually above

import Navbar, { button } from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faAnchor, faUser } from "@fortawesome/free-solid-svg-icons";
import LoginForm from './login';
import supabase from '../utils/supabaseClient';
import { useEffect, useRef, useState } from 'react';


  const navButtons:button[] = [{ text:"Test Page", href:"/test", icon: <FontAwesomeIcon icon={faAnchor} />, isLink:true },
                               { text:"Blog Layout", href:"/blog-layout-temp", icon:<FontAwesomeIcon icon={faBook} />, isLink:true},];

const siteName = "Eventide Blog"

// tailwind styles
const footerClasses = "flex flex-1 px-0 py-8 border-t-[1px] border-slate-200 justify-center items-center";

const Layout = (props: { children:any }) => {
  return(
    <div>
      <Navbar buttons={[...navButtons]} siteName={siteName} siteIcon={<FontAwesomeIcon icon={faBook} />} />
      <main>{props.children}</main>

      <footer className={footerClasses}>
      </footer>
    </div>
  )
}

export default Layout;