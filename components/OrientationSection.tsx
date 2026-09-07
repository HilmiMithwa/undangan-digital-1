"use client";
import { motion } from "motion/react";
import Image from "next/image";
import fotoHilmi from "../public/fotoNikah/foto-hilmi.jpeg";
import fotoGiselle from "../public/fotoNikah/foto-giselle.jpeg";

export default function OrientationSection() {

  // Data Bride & Groom 
  const brideDetails = {
    name: "Aeri Uchinaga",
    parents: "Ayah dan Ibu Giselle",
    instagram: "@aerichandesu",
  };

  const groomDetails = {
    name: "Hilmi Mithwa",
    parents: "Ayah dan Ibu Hilmi",
    instagram: "@hilmimthwaa__",
  };

  return (
    <>
      <section className="text-white py-12 px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          

          <div className="text-center space-y-3 max-w-lg">
            <h2 className="text-5xl font-pinyon text-yellow-color">
              With Love
            </h2>
            <h1 className="text-base text-accent-color leading-relaxed">
              Dengan rahmat Tuhan Yang Maha Esa kami mengundang
              Bapak/Ibu/Saudara/I untuk menghadiri pernikahan kami:
            </h1>
          </div>


          <div className="flex flex-col gap-12 text-accent-color">
            
            {/* The Bride */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-5xl font-pinyon text-yellow-color">The Bride</h3>
              <Image
                src={fotoGiselle}
                alt="The Bride"
                className="w-[200px] h-[200px] rounded-full object-cover shadow-lg"
              />
              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold">{brideDetails.name}</h4>
                <h5 className="text-sm opacity-80 mt-1">Putri Dari:</h5>
                <p className="text-lg">{brideDetails.parents}</p>
                <a
                  href={`https://instagram.com/${brideDetails.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-color hover:underline mt-1"
                >
                  {brideDetails.instagram}
                </a>
              </div>
            </div>

            {/* The Groom */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-5xl font-pinyon text-yellow-color">The Groom</h3>
              <Image
                src={fotoHilmi}
                alt="The Groom"
                className="w-[200px] h-[200px] rounded-full object-cover shadow-lg"
              />
              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold">{groomDetails.name}</h4>
                <h5 className="text-sm opacity-80 mt-1">Putra Dari:</h5>
                <p className="text-lg">{groomDetails.parents}</p>
                <a
                  href={`https://instagram.com/${groomDetails.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-color hover:underline mt-1"
                >
                  {groomDetails.instagram}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}