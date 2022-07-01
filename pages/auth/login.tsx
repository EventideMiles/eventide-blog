import { useEffect } from "react";
import Router from 'next/router';
import Layout from "@components/layout";
import { toast } from "react-toastify";
import { NextPage } from "next/types";
import supabase from "@utils/supabaseClient";



const Login: NextPage = () => {
  useEffect(() => {
    const setUser = () => {
      const user = supabase.auth.user();
      if (!user) {
        toast.error("Please login before visiting this page.");
        Router.push("/");
      }
      localStorage.setItem("localUser", JSON.stringify(user));
      toast.success("You've successfully logged in.");
      Router.push("/");
    }
    setUser();
  })
 return(
   <Layout><p>please wait...</p></Layout>
 ) 
}

export default Login;