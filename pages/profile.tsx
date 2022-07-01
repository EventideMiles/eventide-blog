import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import Head from "next/head"
import Layout from "@components/layout"
import { getUser } from "./api/user"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUser(context.req.cookies['sb-access-token']);
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  return {
    props: {

    }
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