import { AppProps } from 'next/app';
import Head from 'next/head';
import 'rsuite/dist/rsuite.min.css';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import Layout from './layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Media Flix</title>
      </Head>
      <Layout>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
            refreshInterval: 2160000
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
