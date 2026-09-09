"use client";

import { motion } from "motion/react";

const events = [
  {
    title: "Akad",
    details: [
      { label: "Hari, Tanggal", value: "Minggu, 19 April 2026" },
      { label: "Waktu", value: "09.00 - 11.00 WIB" },
      { label: "Tempat", value: "Gedung Serbaguna" },
      {
        label: "Alamat",
        value: "Jl. Contoh Alamat No. 123, Kota Contoh, Provinsi Contoh",
      },
    ],
  },
  {
    title: "Resepsi",
    details: [
      { label: "Hari, Tanggal", value: "Minggu, 19 April 2026" },
      { label: "Waktu", value: "12.00 - 15.00 WIB" },
      { label: "Tempat", value: "Gedung Serbaguna" },
      {
        label: "Alamat",
        value: "Jl. Contoh Alamat No. 123, Kota Contoh, Provinsi Contoh",
      },
    ],
  },
];



export default function AkaddanResepsi() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-color">
            Rangkaian Acara
          </p>
          <h2 className="font-pinyon text-6xl leading-none text-yellow-color sm:text-7xl">
            Acara Pernikahan
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-yellow-color/50" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, eventIndex) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: eventIndex * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-accent-color/35 bg-neutral-color/35 px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-7 sm:py-8"
            >
              <h3 className="mb-5 text-center font-pinyon text-5xl text-yellow-color">
                {event.title}
              </h3>
              <motion.dl
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
                className="divide-y divide-accent-color/20"
              >
                {event.details.map((detail) => (
                  <motion.div
                    key={detail.label}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.45, ease: "easeOut" },
                      },
                    }}
                    className="grid gap-1 py-4 sm:grid-cols-[110px_1fr] sm:gap-4"
                  >
                    <dt className="text-xs uppercase tracking-[0.15em] text-accent-color">
                      {detail.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-white/90">
                      {detail.value}
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}