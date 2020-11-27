export default function HeroHeader() {
  return (
    <div className="row -hero-header align-items-center">
      <div className="col-6 p-5 _information text-md-left justify-content-around align-items-center">
        <small className="__feature">Performance</small>
        <h1 className="__title">
          La calidad que ya conoces 
        </h1>
        <p className="__description">
         Tenemos la mejor calidad de productos, para que puedas hacer todo lo que quieras y para que podamos tener todo lo que sea necesario.
        </p>
      </div>
      <div className="col-6 __empty align-content-center align-items-center">
        <img src="/brand/white-logo.svg" className="img-fluid" alt=""/>
        <span>
          Revi't México
        </span>
      </div>

    </div>
  );
}