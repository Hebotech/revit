import HeroHeader from "../components/Organisms/Home/HeroHeader";
import Statement from "../components/Organisms/Home/Statement";
import Cta from "../components/Organisms/Home/Cta";
import BannerSection from "../components/Organisms/Home/BannerSection";

import YoutubeBackground from 'react-youtube-background'


export default function () {
  return (
    <div className="container-fluid home-page">
      <YoutubeBackground
        videoId={'_HHP6vgRhno'} >
          <HeroHeader/>
      </YoutubeBackground>
      <Statement/>
      <BannerSection/>
      <Cta/>
    </div>
  );
}