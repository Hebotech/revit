import RelatedProduct from '../../components/Molecules/RelatedProduct';
import Breadcrumb from '../../components/Molecules/Breadcrumb';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { NextSeo } from 'next-seo';

const productsView = ({ product, estilo, tipo }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <>
      <NextSeo
        title={` ${product.name} | REVI'T SPORT MÉXICO`}
        description={product.desctiption}
      />
      <div className='container-fluid '>
        <div className='row m-0 px-5 align-items-center'>
          <div className='col-12'>
            <Breadcrumb estilo={estilo} tipo={tipo} product={product} />
            <h1 className='text-md-left text-center'>{product.name}</h1>
          </div>
          <div className='col-md-6 col-12'>
            <Swiper spaceBetween={0} navigation slidesPerView={1}>
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className='img-fluid'
                    src={image.src}
                    alt={product.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-md-4 col-12 align-self-start mt-5'>
            <h2>Acerca del producto</h2>
            <span
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          </div>
          {product.description === '' || product.description.includes('<p>') ? (
            <></>
          ) : (
            <div className='text-center row m-0 justify-content-center align-items-center'>
              <div className='col-12 text-center'>
                <h3>Más detalles</h3>
              </div>
              <div className='col'>
                <p dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            </div>
          )}

          <div className='row m-0 align-items-center justify-content-center my-4'>
            <div className='col-12 text-center'>
              <h4>Completa tu look</h4>
            </div>
            {product.related_ids.map((idProduct) => (
              <RelatedProduct key={idProduct} id={idProduct} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log('params=>', params);
  let response = await fetch(`https://apihebo.online/revit/${params.name}`);

  let { data: product } = await response.json();
  let estilo = product.meta_data.find(
    (metaData) => metaData.key === 'estilo_de_producto'
  );

  let tipo = product.meta_data.find(
    (metaData) => metaData.key === 'tipo_de_producto'
  );

  return {
    props: {
      product,
      estilo: estilo ? estilo.value : 'default',
      tipo: tipo ? tipo.value : 'default',
    },
  };
};

export async function getStaticPaths() {
  let response = await fetch('https://apihebo.online/revit');
  let { data: products } = await response.json();

  let paths = products.map(({ slug, meta_data }) => {
    return {
      params: {
        name: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default productsView;
