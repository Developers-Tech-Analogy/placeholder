import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import NavBar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
  <title>Coming Soon...</title>
  <meta name="description" content="Something's Cooking" />
  <link rel="icon" href="/favicon.ico" />
</Head>
<NavBar />
  <Component {...pageProps} />
  </div>
}
export default MyApp
