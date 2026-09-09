
import { StarfieldBackground } from "@/components/Starfield";
import MusicPlayer from "@/components/MusicPlayer";

import HeroSection from "@/components/HeroSection";
import OrientationSection from "@/components/OrientationSection";
import AkaddanResepsi from "@/components/AkaddanResepsi";
import JourneyOfLove from "@/components/JourneyOfLove";
import OurMoments from "@/components/OurMoments";
import RSVP from "@/components/rsvp";
import WeddingGift from "@/components/WeddingGift";
import ThankYou from "@/components/ThankYou";

export default function Home() {
  return (
    <>
      <MusicPlayer />
      <HeroSection />
      <StarfieldBackground className="relative w-full min-h-screen px-10 flex flex-col py-10">
        <OrientationSection />
        <AkaddanResepsi />
        <JourneyOfLove />
        <OurMoments />
        <RSVP />
        <WeddingGift />
        <ThankYou />
      </StarfieldBackground>

      
    </>
  )
}