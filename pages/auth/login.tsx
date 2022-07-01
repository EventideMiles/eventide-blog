import { useEffect } from "react";
import Router from 'next/router';
import Layout from "@components/layout";
import { toast } from "react-toastify";
import { NextPage } from "next/types";
import supabase from "@utils/supabaseClient";
import { getUser } from "@pages/api/user";

export const getServerSideProps = async (context:any) => {
  const user = await getUser(context.req.cookies['sb-access-token']);
  return {
    props: {
      user
    }
  }
}

const Login: NextPage = (props:any) => {
  useEffect(() => {
    /**
     * If a user is logged in set a localStorage item called "localUser"
     * with the user's id.
     * This will be used to determine if a user is logged in or not.
     * @warning This is not a secure way to do this: do not trust for protection purposes.
     * @usecase This is used to determine if a user is logged in or not for displaying certain elements.
     */
    const setUser = () => {
      // const user = supabase.auth.user();
      // if (!user) {
      //   toast.error("Please login before visiting this page.");
      //   Router.push("/");
      // }
      if (!props.user) {
        toast.error("Please login before visiting this page.");
        Router.push("/");
      }
      localStorage.setItem("localUser", JSON.stringify(props.user));
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