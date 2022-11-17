import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css'

import { AppProps } from 'next/app';
import Head from 'next/head'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Media Flix</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}