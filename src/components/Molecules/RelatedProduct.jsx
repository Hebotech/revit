import { useState, useEffect } from 'react';
import Link from 'next/link';

function RelatedProduct({ id }) {
  const [asyncStatus, setAsyncStatus] = useState('pending');
  const [fetchData, setFetchData] = useState('fetchingData');

  useEffect(() => {
    let bringProduct = async () => {
      try {
        let response = await fetch(
          `https://apihebo.online/revit/product/${id}`
        );
        let { data } = await response.json();
        setFetchData(data);
        setAsyncStatus('resolved');
      } catch (error) {
        setAsyncStatus('error');
        setFetchData(error);
      }
    };

    bringProduct();
  }, []);

  switch (asyncStatus) {
    case 'pending':
      return (
        <div className='col-2 '>
          <img src='/brand/full-logo-black.svg' alt='' className='h-100' />
        </div>
      );

    case 'resolved':
      return (
        <div key={fetchData.slug} className='col-2 col-md-12 my-5 text-center'>
          <Link href={`/productos/${fetchData.slug}`}>
            <a>
              <img
                className='img-fluid'
                src={fetchData.images[0].src}
                alt={fetchData.name}
              />
              <small>{fetchData.name}</small>
            </a>
          </Link>
        </div>
      );
    case 'error':
      return <div></div>;
  }
}

export default RelatedProduct;
