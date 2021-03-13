import Link from 'next/link';
function SingleProduct({ product }) {
  return (
    <div className='col-md-3 col-6 text-center single-product'>
      <div className='block'>
        <Link href={`/productos/${product.slug}`}>
          <a>
            <div
              style={{
                backgroundImage: `url(${product.images[0].src})`,
              }}
              className='_img'
            />
            <h5 className='_name'>{product.name}</h5>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SingleProduct;
