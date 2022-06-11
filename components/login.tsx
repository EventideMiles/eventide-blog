import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import supabase from "../utils/supabaseClient";
import Router from 'next/router';

const LOGIN_REDIRECT:string = "http://localhost:3000/welcome";

// tailwind style classes
const LOGIN_FORM_CLASSES = "row flex flex-center";
const LOGIN_BUTTON_CLASSES = "bg-neutral-800 text-white hover:bg-white hover:text-neutral-800 px-3 rounded-lg items"; // hover:bg-white hover:text-indigo-800 font-semibold px-3 md:hover:rounded-lg md:inline-block md:border-none border-indigo-900 border-b-[1px]

// schema stuff
const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
})

const LoginForm = (props: {children?:any}) => {

  const handleLogin = async (email:string) => {
    try {
      const { error } = await toast.promise(
        supabase.auth.signIn({ email }, {redirectTo: LOGIN_REDIRECT}),
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
    <div className={LOGIN_FORM_CLASSES}>
      <div className="col-6 form-widget">
        <div className="text-white font-bold" style={{fontFamily: "'Gentium Plus', serif"}}>Email Magic Link Sign-in:</div>
        <Formik
          initialValues={{
            email:'',
          }}
          validationSchema={LOGIN_SCHEMA}
          onSubmit={values=> {
            handleLogin(values.email);
          }}
        >
          {({ errors, touched }) =>(
            <Form className="pb-2">
              <Field name="email" type="email" className="text-black h-6 mr-2" />
              <button type="submit" className={LOGIN_BUTTON_CLASSES}>Submit</button>
              {errors.email && touched.email ? <div className="text-red-400">* {errors.email}</div> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const LogoutForm = () => {
  const handleLogout = () => {
    supabase.auth.signOut();
    Router.push("/logout");
  }

  return(
    <div className="pb-2">
      <button onClick={handleLogout} className={LOGIN_BUTTON_CLASSES}>Logout</button>
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