import { Layout } from '../components/index';
import React from 'react';


import '../styels/globals.scss'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

}

export default MyApp
