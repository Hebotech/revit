export default function BannerSection() {
  return (
    <>
    <div className="row m-0 justify-content-start single-banner-section">
      <div className="col-md-5 col-12 --banner">
            <h3>
              Descubre
               <br/>
               <strong>
                la nueva colección
               </strong>
          </h3>
          <p className="my-5">
            La nueva colección trae los mejores productos de la marca Revi't sport que te ayudará a que puedas tener las mejores interacciones para que puedas disfrutarla
          </p>
            <button className="_main">
              Read More
          </button>
      </div>
    </div>
    <div className="row m-0 split-banner-section justify-content-around">
      <div className="col-6 --banner">
        <span>
            <h3>
              Discover our
               <br/>
               <strong>
                Urban collection
               </strong>
          </h3>
            <p>
              Incorporating functional features in fashionable yet fully protective outer shells for daily use.
          </p>
            <button className="_main">
              Read More
          </button>
        </span>
      </div>
      <div className="col-6 --banner">
         <span>
            <h3>
              Discover our
               <br/>
               <strong>
                Urban collection
               </strong>
          </h3>
            <p>
              Incorporating functional features in fashionable yet fully protective outer shells for daily use.
          </p>
            <button className="_main">
              Read More
          </button>
        </span>
      </div>
    </div>
    </>
  );
}