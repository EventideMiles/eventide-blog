import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { SubsectionHeader } from "./styled-react-components";
import { toast } from "react-toastify";
import supabase from "../utils/supabaseClient";
import Link from "next/link";
import Router from 'next/router';

// style stuff
const loginDivClasses = "row flex flex-center";
const loginButtonClasses = "bg-neutral-800 text-white hover:bg-white hover:text-neutral-800 px-3 rounded-lg items"; // hover:bg-white hover:text-indigo-800 font-semibold px-3 md:hover:rounded-lg md:inline-block md:border-none border-indigo-900 border-b-[1px]

// schema stuff
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
})

const LoginForm = (props: {children?:any}) => {

  const handleLogin = async (email:string) => {
    try {
      const { error } = await toast.promise(
        supabase.auth.signIn({ email }, {redirectTo: "http://localhost:3000/welcome"}),
        {
          pending: "Attempting Login...",
          success: "Check your email for your magic link",
          error: "There was an error",
        }
      )
      if (error) throw error;
    } catch (error:any) {
      console.log(error.error_description || error.message);
    }
  }

  return(
    <div className={loginDivClasses}>
      <div className="col-6 form-widget">
        <div className="text-white font-bold" style={{fontFamily: "'Gentium Plus', serif"}}>Email Magic Link Sign-in:</div>
        <Formik
          initialValues={{
            email:'',
          }}
          validationSchema={LoginSchema}
          onSubmit={values=> {
            handleLogin(values.email);
            // toast.success("Test");
            console.log(values.email);
          }}
        >
          {({ errors, touched }) =>(
            <Form className="pb-2">
              <Field name="email" type="email" className="text-black h-6 mr-2" />
              <button type="submit" className={loginButtonClasses}>Submit</button>
              {errors.email && touched.email ? <div className="text-red-400">* {errors.email}</div> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const LogoutForm = (props:{children?:any}) => {
  const handleLogout = () => {
    supabase.auth.signOut();
    Router.push("/logout");
  }

  return(
    <div className="pb-2">
      <button onClick={handleLogout} className={loginButtonClasses}>Logout</button>
    </div>
  )
}

const cssTest = () => {
  return(
    <div className=""/>
  )
}

export { LoginForm as default, 
         LogoutForm }