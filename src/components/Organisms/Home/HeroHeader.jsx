export default function HeroHeader({ brandInfo }) {
  return (
    <div
      className='row m-0 -hero-header align-items-center'
      style={{
        backgroundImage: `url(${
          brandInfo ? brandInfo.image.src : '/images/hero-header.jpg'
        })`,
      }}
    >
      <div className='order-md-1 order-2  col-md-6 col-12 p-5 _information text-md-left justify-content-around align-items-center text-md-left text-center'>
        <small className='__feature'>Performance</small>
        <h1 className='__title'>La calidad que ya conoces</h1>
        <p className='__description'>
          Tenemos la mejor calidad de productos e indumentaria para
          motociclistas de alto rendimiento.
        </p>
      </div>
      <div className='order-md-2 order-1 col-md-6 my-md-0 my-5 col-12 __empty align-content-center align-items-center text-center text-md-left'>
        <img
          src='/brand/white-logo.svg'
          className='img-fluid'
          alt='revit-logo'
        />
        <span className='text-md-left text-center d-block'>Revi't México</span>
      </div>
    </div>
  );
}
