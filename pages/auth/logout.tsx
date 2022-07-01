import { useEffect } from "react";
import Router from 'next/router';
import Layout from "../../components/layout";
import { toast } from "react-toastify";
import { NextPage } from "next/types";

const Logout: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("localUser");
    toast.info("You've been logged out.");
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  })
 return(
   <Layout><p>redirecting...</p></Layout>
 ) 
}

export default Logout;