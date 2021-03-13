import ProductListing from '../../components/Molecules/ProductListing';
import Breadcrumb from '../../components/Molecules/Breadcrumb';
import { NextSeo } from 'next-seo';

const estilosView = ({ products, estilo }) => {
  return (
    <>
      <NextSeo
        title={`${estilo} | REVI'T SPORT MÉXICO`}
        description='La mejor marca premium de indumentaria para moto ahora en México'
      />
      <div className='container-fluid'>
        <Breadcrumb level='estilo' estilo={estilo} />
        <ProductListing products={products} />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  let response = await fetch(`https://apihebo.online/revit`);

  let { data: products } = await response.json();

  let filteredProducts = products.filter((prod) => {
    let estiloDeProducto = prod.meta_data.find(
      ({ key }) => key === 'estilo_de_producto'
    );

    return estiloDeProducto
      ? estiloDeProducto.value === params.estilo
      : !estiloDeProducto.value && params.estilo === 'default';
  });

  return {
    props: {
      products: filteredProducts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }),
      estilo: params.estilo,
    },
  };
};

export async function getStaticPaths() {
  let response = await fetch('https://apihebo.online/revit');
  let { data: products } = await response.json();

  let estilosComplete = products.map((product) => {
    let estilo = product.meta_data.find(
      (metaData) => metaData.key === 'estilo_de_producto'
    );
    return estilo ? estilo.value : 'default';
  });

  let uniqueEstilosArray = [...new Set(estilosComplete)];

  let paths = uniqueEstilosArray.map((slug) => {
    return {
      params: {
        estilo: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default estilosView;
