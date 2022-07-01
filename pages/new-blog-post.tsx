import Layout from "../components/layout";
import Router from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import supabase from "../utils/supabaseClient";
import { toast } from "react-toastify";

const md5 = require('md5');

// Code below currently just uses the blob from tinymce implemented into the new blog post page. 
// Eventually the plan is to implement useEffect() to see if a user is logged in and redirect 
// with an explanitory toast back to index if they're not logged in and, of course, to have a 
// formik form that can take input from this page and set it up for database entry. Planning 
// on implementing formik with this editor as the main blog post editor.

// Yup Schema
const POST_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Please title your post"),
  body: Yup.string().required("You need to put a post in."),
})


const NewBlogpost = (props: { children?:any }) => {

  useEffect(() => {
    const tempSession = supabase.auth.session();
    if(tempSession === null) { 
      toast.warning("Please Log In before trying to create a post");
      Router.push("/");
    }
    return;
  }, [])

  const editorRef:any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }
  return(
    <Layout>
      <div className="grid grid-cols-7">
      <div className="col-start-2 col-span-5">

        <Formik
          initialValues={{
            title: '',
            body: ''
          }}
          validationSchema={POST_SCHEMA}
          onSubmit={values=>{

          }}
        >
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menuBar: false,
              plugins:
                `advlist autolink lists link image charmap preview anchor
                searchreplace visualblocks code codesample fullscreen insertdatetime
                media table help wordcount`,
              toolbar: `undo redo | formatselect | 
              bold italic backcolor | alignleft aligncenter alignright alignjustify | 
              code codesample | bullist numlist outdent indent | removeformat | help`,
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </Formik>
        
       </div>
       </div>
    </Layout>
  )
}

// 'undo redo | formatselect | ' +
//           'bold italic backcolor | alignleft aligncenter ' +
//           'alignright alignjustify | bullist numlist outdent indent | ' +
//           'removeformat | help',

export default NewBlogpost