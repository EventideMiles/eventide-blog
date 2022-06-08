import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import { toast } from "react-toastify";
import Layout from "../components/layout";

const Test = () => {
  const createToast = () => {
    toast.success("You clicked a button")
  }
 return(
   <Layout>
     <main className="my-3"><button onClick={createToast} className="bg-stone-800 text-stone-50 p-4 hover:bg-stone-50 hover:text-stone-800 rounded-xl"><FontAwesomeIcon icon={faBook} />Click Me!</button></main>
     
   </Layout>
 ) 
}

export default Test;