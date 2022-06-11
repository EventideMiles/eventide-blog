import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import { Header, P } from "../components/styled-react-components";

const extraMobileInfo = [<div key={1}>Author: Test Name</div>, <FontAwesomeIcon className="w-12 h-12" key={2} icon={faUser} /> ,<div key={3}>test@test.com</div>]

const BlogLayout = () => {
 return(
   <Layout extraMobileInfo={extraMobileInfo}>
     <main className="inline-grid grid-cols-5 mx-auto justify-items-center h-screen">
          <div className="bg-indigo-800 text-white h-full w-full row-span-full text-center hidden md:inline-block">{extraMobileInfo?.map((info:any, iteration=0) => (
            <span key={`mobileExtraInfo ${iteration++}`} className="text-center justify-self-center">{info}</span>
          ))}</div>
          <div className="col-span-5 md:col-span-4 w-11/12 mt-2">
            <Header>A Test Header</Header>
            <P>
              Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
              Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
              Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
              Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
            </P>
          </div>
        </main>
     
   </Layout>
 ) 
}

export default BlogLayout;