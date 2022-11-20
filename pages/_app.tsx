import Head from "next/head";
import Layout from "./layout";
import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import "rsuite/dist/rsuite.min.css";

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
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
