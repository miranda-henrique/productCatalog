import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { Navbar } from '../components';

import '../styles/custom.scss';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <title>DSCatalog NextJS</title>
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  );


}


export default MyApp;
