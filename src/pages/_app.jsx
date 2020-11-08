import React from 'react';


import '../styles/main.scss';

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
