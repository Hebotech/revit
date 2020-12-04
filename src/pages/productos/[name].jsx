import RelatedProduct from "../../components/Molecules/RelatedProduct";

const productsView = ({ product }) => {
  return (
    <div className="container-fluid ">
      <div className="row m-0 px-5 align-items-center">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a href="#">Categoría</a></li>
              <li class="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>
          <h1 className="text-md-left text-center">
            {product.name}
          </h1>
        </div>
        <div className="col-6">
          {
            product.images.map((image, index) => (
              <img key={index} src={image.src} alt={ product.name}/>
            ))
          }
        </div>
        <div className="col-4 align-self-start mt-5">
          <h2>
            Acerca del producto
          </h2>
          <span dangerouslySetInnerHTML={{__html: product.short_description}}/>
        </div>
        {
          product.description !== '' ? (
            <div className="text-center row m-0 justify-content-center align-items-center">
              <div className="col-12">
                <h3>

                  About  {''}
                   <strong>
                  this product
                   </strong>
                </h3>
          </div>
          <div className="col">
            <p dangerouslySetInnerHTML={{__html: product.description}}/>
          </div>
        </div>): ''
        }
        

        <div className="row m-0 align-items-center justify-content-center">
          <div className="col-12 text-center">
            <h4>
              Complete  {''}
              <strong>
                your look
              </strong>
            </h4>
          </div>
          {
            product.related_ids.map((idProduct) => (
              <RelatedProduct
                key={idProduct}
                id={idProduct}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  
  let response = await fetch(`https://apihebo.online/revit/${params.name}`)

  let { data: product } = await response.json()


  return {
    props:{
      product
    }
  }
}

export async function getStaticPaths() {
  let response = await fetch('http://apihebo.online/revit')
  let { data: products } = await response.json()
  let paths = products.map(({slug}) => {
    return {
      params: {
        name: slug
      }
    }
  })  

  return {
    paths,
    fallback: true
  };
}

export default productsView;