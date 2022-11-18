import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css'

import { AppProps } from 'next/app';
import Head from 'next/head'
import { SWRConfig } from 'swr';
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Media Flix</title>
      </Head>
      <Layout>
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  )
}