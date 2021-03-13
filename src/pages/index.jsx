import HeroHeader from '../components/Organisms/Home/HeroHeader';
import Statement from '../components/Organisms/Home/Statement';
import Cta from '../components/Organisms/Home/Cta';
import BannerSection from '../components/Organisms/Home/BannerSection';
import { NextSeo } from 'next-seo';

export default function index() {
  return (
    <>
      <NextSeo
        title="REVI'T SPORT MÉXICO"
        description='La mejor marca premium de indumentaria para moto ahora en México'
      />
      <div className='container-fluid home-page p-0'>
        <HeroHeader />

        <Statement />

        <BannerSection />

        <Cta />
      </div>
    </>
  );
}
