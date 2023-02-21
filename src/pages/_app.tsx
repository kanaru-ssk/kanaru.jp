import Head from "next/head";
import type { AppProps } from "next/app";
import "styles/globals.css";

import Footer from "components/common/Footer";
import Header from "components/common/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
};

export default MyApp;
