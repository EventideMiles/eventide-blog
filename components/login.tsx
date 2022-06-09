import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { SubsectionHeader } from "./styled-react-components";
import { toast } from "react-toastify";
import supabase from "../utils/supabaseClient";

// style stuff
const loginDivClasses = "row flex flex-center";
const loginButtonClasses = "bg-neutral-800 text-white hover:bg-white hover:text-neutral-800 p-4 rounded-lg items";

// schema stuff
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
})

const LoginForm = (props: {children?:any}) => {

  const handleLogin = async (email:string) => {
    try {
      const { error } = await toast.promise(
        supabase.auth.signIn({ email }),
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
        <SubsectionHeader style={{fontFamily: "'Gentium Plus', serif"}}>Email Magic Link Sign-in:</SubsectionHeader>
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
            <Form>
              <Field name="email" type="email" /><br />
              {errors.email && touched.email ? <div className="text-red-700">* {errors.email}</div> : null}
              <button type="submit" className={loginButtonClasses}>Submit</button>
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
  }

  return(
    <div>
      <div>{props.children}</div>
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