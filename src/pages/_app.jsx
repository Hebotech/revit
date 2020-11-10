import React from 'react';

import Navbar from '../components/Organisms/Navbar'
import Footer from '../components/Organisms/Footer'

import '../styles/main.scss';

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
