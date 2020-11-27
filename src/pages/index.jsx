import HeroHeader from "../components/Organisms/Home/HeroHeader";
import Statement from "../components/Organisms/Home/Statement";
import Cta from "../components/Organisms/Home/Cta";
import BannerSection from "../components/Organisms/Home/BannerSection";

export default function index() {
  return (
    <div className="container-fluid home-page">
      <HeroHeader/>
      <Statement/>
      <BannerSection/>
      <Cta/>
    </div>
  );
}