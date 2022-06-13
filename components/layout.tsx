import '@fortawesome/fontawesome-svg-core/styles.css'; // prevents a stupid FA bug
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent fontawesome from dynamically adding its css since we did it manually above

import Navbar, { button } from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faAnchor, faPencil } from "@fortawesome/free-solid-svg-icons";


  const NAV_BUTTONS:button[] = [{ text:"Test Page", href:"/test", icon: <FontAwesomeIcon icon={faAnchor} />, isLink:true },
                               { text:"Blog Layout", href:"/blog-layout-temp", icon:<FontAwesomeIcon icon={faBook} />, isLink:true },
                               { text:"New Post", href:"/new-blog-post", icon:<FontAwesomeIcon icon={faPencil} />, isLink:true }];

const SITE_NAME = "Eventide Blog"

// tailwind styles
const FOOTER_CLASSES = "flex flex-1 px-0 py-8 border-t-[1px] border-slate-200 justify-center items-center";

const Layout = (props: { children:any, extraMobileInfo?:any[] }) => {
  return(
    <div>
      <Navbar buttons={[...NAV_BUTTONS]} siteName={SITE_NAME} siteIcon={<FontAwesomeIcon icon={faBook} />} extraMobileInfo={props.extraMobileInfo} />
      <main>{props.children}</main>

      <footer className={FOOTER_CLASSES}>
      </footer>
    </div>
  )
}

export default Layout;