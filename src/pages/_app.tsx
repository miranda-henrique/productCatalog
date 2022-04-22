import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '../components';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
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
