import Layout from "../components/layout";
import { Header, P } from "../components/styled-react-components";

const BlogLayout = () => {
 return(
   <Layout>
     <main className="inline-grid grid-cols-5 mx-auto justify-items-center h-screen">
          <div className="bg-indigo-800 text-white h-full w-full row-span-full text-center hidden md:inline-block"><p>Test</p><p>Test</p></div>
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