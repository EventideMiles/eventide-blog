/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout';

const cardClasses = "flex shrink-0 p-6 max-w-sm rounded-xl shadow-lg drop-shadow-2xl border-2 border-slate-300 transition-color mx-auto mt-1 md:mx-4 md:my-1";

const Home: NextPage = () => {
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

const cssTest = () => {
  return(
    <div className="font-serif" />
  )
}

export default Home
