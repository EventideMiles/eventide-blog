import { useEffect } from "react";
import Router from 'next/router';
import Layout from "../components/layout";
import { toast } from "react-toastify";

const Welcome = () => {
  useEffect(() => {
    toast.success("You've successfully logged in.")
    Router.push("/");
  })
 return(
   <Layout><p>redirecting...</p></Layout>
 ) 
}

export default Welcome;