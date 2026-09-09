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
      <section className="text-white py-12 px-6 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-3 max-w-lg"
          >
            <h2 className="text-5xl font-pinyon text-yellow-color">
              With Love
            </h2>
            <h1 className="text-base text-accent-color leading-relaxed">
              Dengan rahmat Tuhan Yang Maha Esa kami mengundang
              Bapak/Ibu/Saudara/I untuk menghadiri pernikahan kami:
            </h1>
          </motion.div>

          <div className="flex flex-col gap-12 text-accent-color">
            {/* The Bride */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-5xl font-pinyon text-yellow-color">
                The Bride
              </h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-full shadow-lg"
              >
                <Image
                  src={fotoBride}
                  alt="The Bride"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold">{brideDetails.name}</h4>
                <h5 className="text-sm opacity-80 mt-1">Putri Dari:</h5>
                <p className="text-lg">{brideDetails.parents}</p>
                <div>
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
            </motion.div>

            {/* The Groom */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-5xl font-pinyon text-yellow-color">
                The Groom
              </h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-full shadow-lg"
              >
                <Image
                  src={fotoGroom}
                  alt="The Groom"
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </motion.div>

              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="text-3xl font-bold">{groomDetails.name}</h4>
                <h5 className="text-sm opacity-80 mt-1">Putra Dari:</h5>
                <p className="text-lg">{groomDetails.parents}</p>
                <div>
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
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
