"use client";

import { motion } from "motion/react";

const journeyContent = {
  eyebrow: "Our Story",
  title: "Journey of Love",
  description:
    "Setiap langkah kecil membawa kami pada hari yang istimewa ini.",
};

export const journeyMoments = [
  {
    date: "12 Januari 2021",
    title: "Awal Pertemuan",
    description:
      "Sebuah pertemuan sederhana menjadi awal dari cerita yang tidak pernah kami sangka.",
  },
  {
    date: "24 Juni 2022",
    title: "Tumbuh Bersama",
    description:
      "Kami belajar untuk saling mendengarkan, menguatkan, dan merayakan banyak hal bersama.",
  },
  {
    date: "08 Oktober 2025",
    title: "Satu Langkah Lebih Dekat",
    description:
      "Dengan penuh keyakinan, kami memutuskan untuk melanjutkan perjalanan ini ke arah yang sama.",
  },
  {
    date: "19 April 2026",
    title: "Hari Bahagia",
    description:
      "Di hari ini, kami mengikat janji untuk terus berjalan berdampingan dalam setiap cerita.",
  },
];

export default function JourneyOfLove() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <header className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-color">
            {journeyContent.eyebrow}
          </p>
          <h2 className="font-pinyon text-6xl leading-none text-yellow-color sm:text-7xl">
            {journeyContent.title}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-yellow-color/50" />
          <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
            {journeyContent.description}
          </p>
        </header>

        <div className="relative">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-accent-color/35 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {journeyMoments.map((moment, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={`${moment.date}-${moment.title}`}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid pl-10 md:min-h-[170px] md:grid-cols-2 md:pl-0"
                >
                  <div
                    className={`pb-2 md:px-10 ${
                      isEven ? "md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent-color">
                      {moment.date}
                    </p>
                    <h3 className="font-pinyon text-4xl text-yellow-color">
                      {moment.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75 md:ml-auto">
                      {moment.description}
                    </p>
                  </div>

                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-color/70 bg-background md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-yellow-color" />
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
