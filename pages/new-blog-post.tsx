import Layout from "../components/layout";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

// Code below currently just uses the blob from tinymce implemented into the new blog post page. 
// Eventually the plan is to implement useEffect() to see if a user is logged in and redirect 
// with an explanitory toast back to index if they're not logged in and, of course, to have a 
// formik form that can take input from this page and set it up for database entry. Planning 
// on implementing formik with this editor as the main blog post editor.
const NewBlogpost = (props: { children?:any }) => {
  const editorRef:any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }
  return(
    <Layout>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
       />
       <button onClick={log}>Log editor content</button>
    </Layout>
  )
}

export default NewBlogpost