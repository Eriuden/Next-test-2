import { Footer } from '@/components/Footer'
import Head from 'next/head'
import React from 'react'

//Avec next, on peut paramétrer le Head, qui se fait un peu différemment du html

export default function about() {
  return (
    <div>
      <Head>
        <title>About site</title>
        <meta name='description' content='blabla'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
    </div>
  )
}

about.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer/>
    </>
  )
}
