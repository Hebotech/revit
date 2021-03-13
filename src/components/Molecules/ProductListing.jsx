import SingleProduct from './SingleProduct';

function ProductListing({ products }) {
  return (
    <div className='row m-0 product-listing'>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;
