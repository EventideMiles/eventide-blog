import { useEffect } from "react";
import Router from 'next/router';
import Layout from "../../components/layout";
import { toast } from "react-toastify";
import { NextPage } from "next/types";
import supabase from "@utils/supabaseClient";

const Logout: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("localUser");
    supabase.auth.signOut();
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