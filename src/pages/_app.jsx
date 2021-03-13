import React from 'react';

import Navbar from '../components/Organisms/Navbar';
import Footer from '../components/Organisms/Footer';

import '../styles/main.scss';
import '../styles/fonts/swiss721.css';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default function _app({ Component, pageProps, customProps }) {
  return (
    <>
      <Navbar estilos={customProps.estilos} tipos={customProps.tipos} />
      <Component {...pageProps} />
      <Footer estilos={customProps.estilos} tipos={customProps.tipos} />
    </>
  );
}

_app.getInitialProps = async () => {
  let response = await fetch(`https://apihebo.online/revit`);

  let { data: products } = await response.json();

  let estilosDeProducto = products.map((prod) => {
    let estiloDeProducto = prod.meta_data.find(
      ({ key }) => key === 'estilo_de_producto'
    );

    return estiloDeProducto ? estiloDeProducto.value : 'default';
  });

  let tiposDeProducto = products.map((prod) => {
    let tipoDeProducto = prod.meta_data.find(
      ({ key }) => key === 'tipo_de_producto'
    );

    return tipoDeProducto ? tipoDeProducto.value : 'default';
  });

  return {
    customProps: {
      estilos: [...new Set(estilosDeProducto)].sort(),
      tipos: [...new Set(tiposDeProducto)].sort(),
    },
  };
};
