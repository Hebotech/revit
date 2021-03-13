import ProductListing from '../components/Molecules/ProductListing';
import Breadcrumb from '../components/Molecules/Breadcrumb';

const todosView = ({ products, estilo }) => {
  return (
    <div className='container-fluid'>
      <Breadcrumb />
      <ProductListing products={products} />
    </div>
  );
};

export const getStaticProps = async () => {
  let response = await fetch(`https://apihebo.online/revit`);

  let { data: products } = await response.json();

  return {
    props: {
      products: products.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }),
    },
  };
};

export default todosView;
