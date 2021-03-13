import { useRouter } from 'next/router';

export default function BannerSection() {
  let router = useRouter();
  return (
    <>
      <div className='row m-0 justify-content-start single-banner-section'>
        <div className='col-md-5 col-12 --banner'>
          <h3>
            Descubre
            <br />
            <strong>la nueva colección</strong>
          </h3>
          <p className='my-5'>
            La nueva colección trae los mejores productos de la marca Revi't
            sport que te ayudará a que puedas tener las mejores interacciones
            para que puedas disfrutarla
          </p>
          <button onClick={() => router.push('/todos')} className='_main'>
            Ir ahora
          </button>
        </div>
      </div>
      <div className='row m-0 split-banner-section justify-content-around'>
        <div className='col-md-6 col-12 --banner'>
          <span>
            <h3>
              Descubre nuestra
              <br />
              <strong className='text-uppercase'>colección urbana</strong>
            </h3>
            <p>
              Tenemos las mejores chamarras con los mejores materiales del
              mercado
            </p>
            <button
              onClick={() => router.push('/estilos/urbano')}
              className='_main'
            >
              Ir ahora
            </button>
          </span>
        </div>
        <div className='col-md-6 col-12 --banner'>
          <span>
            <h3>
              Enamórate de nuestros
              <br />
              <strong>MONO TRAJES</strong>
            </h3>
            <p>
              Contamos con los monotrajes de la mejor calidad, resistencia, para
              convertir cada momento dentro de tu moto en tu favorito
            </p>
            <button
              onClick={() => router.push('/tipos/monotraje')}
              className='_main'
            >
              Ir ahora
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
