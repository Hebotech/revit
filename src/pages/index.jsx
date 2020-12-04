import HeroHeader from "../components/Organisms/Home/HeroHeader";
import Statement from "../components/Organisms/Home/Statement";
import Cta from "../components/Organisms/Home/Cta";
import BannerSection from "../components/Organisms/Home/BannerSection";

export default function index({products}) {
  return (
    <div className="container-fluid home-page p-0">
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>

      <HeroHeader />
      
      <Statement />
      
      <BannerSection />
      
      <Cta/>
    </div>
  );
}

export const getStaticProps = async () => {
  console.log("Getting static props:")
  let response = await fetch('https://apihebo.online/revit')
  let {data: products} = await response.json()
  console.log(products)


  return {
    props:{
      products
    }
  }
}