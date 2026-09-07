import HeroSection from "@/components/HeroSection";
import OrientationSection from "@/components/OrientationSection";
import { StarfieldBackground } from "@/components/Starfield";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <MusicPlayer />
      <HeroSection />
      <StarfieldBackground className="relative w-full min-h-screen px-10 flex flex-col py-10">
        <OrientationSection />
      </StarfieldBackground>

      
    </>
  )
}