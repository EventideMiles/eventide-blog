import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import Head from "next/head"
import Layout from "../components/layout"
import supabase from "../utils/supabaseClient"

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const session = supabase.auth.session();
  return {
    props: {session:session}, // will be passed to the page component as props
  }
}

const Profile: NextPage = ({session}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(session)
  return (
    <Layout>
        <Head>
          <title>Eventide Blog</title>
          <meta name="description" content="A personal blog about what I'm coding: open source so others can use it themselves" /> 
        </Head>

        <main className="mt-3 inline-grid grid-cols-5 mx-auto place-items-center justify-items-center ">
        </main>
    </Layout>
  )
}

export default Profile