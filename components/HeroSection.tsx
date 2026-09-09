"use client";

import Image from "next/image";


import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import Countdown from "./Countdown";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesImage = [
  "/heroSectionImage/hero1.jpg",
  "/heroSectionImage/hero2.jpg",
  "/heroSectionImage/hero3.jpg",
];

export default function HeroSection() {
  const TARGET_DATE = "2026-12-31T23:59:59";

  const goToOrientation = () => {
    document.getElementById("orientation")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-screen w-full"
      >
        {slidesImage.map((image, index) => (
          <SwiperSlide key={index} className="relative h-screen w-full">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center h-screen w-full  "
              sizes="100vw"
            />
            <div className="absolute inset-0 z-20 bg-black/60"></div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-2">
                <h1 className="text-2xl md:text-5xl font-light mb-4">The Wedding Of</h1>
                <h2 className="text-7xl text-text-color font-pinyon">Alice & Bob</h2>
              <Countdown targetDate={TARGET_DATE} />
              <motion.button
                type="button"
                onClick={goToOrientation}
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-accent-color px-6 py-3 text-white transition duration-300 hover:bg-accent-color/80 focus:outline-none focus:ring-2 focus:ring-yellow-color/60"
              >
                Let&apos;s see our journey goes
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
