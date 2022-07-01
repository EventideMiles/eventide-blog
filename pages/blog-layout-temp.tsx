import Layout from "@components/layout";
import { Header, P } from "@components/styled-react-components";
import Gravatar from 'react-gravatar'

const md5 = require('md5')

const extraMobileInfo = [<div key={1} className="font-bold text-2xl mt-2" style={{fontFamily: "'Caveat', cursive"}}>Author</div>, <Gravatar key={2} md5={md5(`test@test.com`)} className="rounded-full inline justify-center" size={100} /> ,<div key={3}>Test Name</div>]

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