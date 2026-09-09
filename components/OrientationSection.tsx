"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import fotoBride from "../public/fotoNikah/bride.jpg";
import fotoGroom from "../public/fotoNikah/groom.jpg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function OrientationSection() {
  const brideDetails = {
    name: "Alice",
    parents: "Ayah dan Ibu Alice",
    instagram: "@aliceinstagram",
  };

  const groomDetails = {
    name: "Bob",
    parents: "Ayah dan Ibu Bob",
    instagram: "@bobinstagram",
  };

  return (
    <>
      <section
        id="orientation"
        className="scroll-mt-4 overflow-hidden px-6 py-12 text-white md:py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl space-y-3 text-center"
          >
            <h2 className="text-5xl font-pinyon text-yellow-color">
              With Love
            </h2>
            <h1 className="text-base leading-relaxed text-accent-color md:text-lg lg:text-xl">
              Dengan rahmat Tuhan Yang Maha Esa kami mengundang
              Bapak/Ibu/Saudara/I untuk menghadiri pernikahan kami:
            </h1>
          </motion.div>

          <div className="grid w-full max-w-5xl gap-14 text-accent-color md:grid-cols-2 md:gap-8 lg:gap-16">
            {/* The Bride */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 md:px-6"
            >
              <h3 className="text-5xl font-pinyon text-yellow-color md:text-6xl">
                The Bride
              </h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-[200px] w-[200px] overflow-hidden rounded-full shadow-lg md:h-[220px] md:w-[220px]"
              >
                <Image
                  src={fotoBride}
                  alt="The Bride"
                  className="h-full w-full rounded-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  {brideDetails.name}
                </h4>
                <h5 className="mt-1 text-sm opacity-80 md:text-base">
                  Putri Dari:
                </h5>
                <p className="text-lg md:text-xl">{brideDetails.parents}</p>
                <div>
                  <a
                    href={`https://instagram.com/${brideDetails.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm text-yellow-color hover:underline md:text-base"
                  >
                    {brideDetails.instagram}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* The Groom */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 md:px-6"
            >
              <h3 className="text-5xl font-pinyon text-yellow-color md:text-6xl">
                The Groom
              </h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-[200px] w-[200px] overflow-hidden rounded-full shadow-lg md:h-[220px] md:w-[220px]"
              >
                <Image
                  src={fotoGroom}
                  alt="The Groom"
                  className="h-full w-full rounded-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  {groomDetails.name}
                </h4>
                <h5 className="mt-1 text-sm opacity-80 md:text-base">
                  Putra Dari:
                </h5>
                <p className="text-lg md:text-xl">{groomDetails.parents}</p>
                <div>
                  <a
                    href={`https://instagram.com/${groomDetails.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm text-yellow-color hover:underline md:text-base"
                  >
                    {groomDetails.instagram}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
