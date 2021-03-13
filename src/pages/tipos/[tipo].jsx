import ProductListing from '../../components/Molecules/ProductListing';
import Breadcrumb from '../../components/Molecules/Breadcrumb';

const tiposView = ({ products, tipo }) => {
  return (
    <div className='container-fluid '>
      <Breadcrumb tipo={tipo} level='tipo' />
      <ProductListing products={products} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  let response = await fetch(`https://apihebo.online/revit`);

  let { data: products } = await response.json();

  let filteredProducts = products.filter((prod) => {
    let tipoDeProducto = prod.meta_data.find(
      ({ key }) => key === 'tipo_de_producto'
    );

    return tipoDeProducto
      ? tipoDeProducto.value === params.tipo
      : params.tipo === 'default';
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
      tipo: params.tipo,
    },
  };
};

export async function getStaticPaths() {
  let response = await fetch('https://apihebo.online/revit');
  let { data: products } = await response.json();

  let tiposComplete = products.map((product) => {
    let tipo = product.meta_data.find(
      (metaData) => metaData.key === 'tipo_de_producto'
    );
    return tipo ? tipo.value : 'default';
  });

  let uniqueTiposArray = [...new Set(tiposComplete)];

  let paths = uniqueTiposArray.map((slug) => {
    return {
      params: {
        tipo: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default tiposView;
