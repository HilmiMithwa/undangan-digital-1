"use client";

import { motion } from "motion/react";

export const thankYouContent = {
	eyebrow: "With Love",
	title: "Terima Kasih",
	message:
		"Terima kasih atas doa, perhatian, dan kehadiran Anda yang menjadi bagian berarti dalam perjalanan kami.",
	closing: "Sampai bertemu di hari bahagia kami.",
	couple: "Alice & Bob",
};

export default function ThankYou() {
	return (
		<section className="w-full px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className="mx-auto max-w-2xl text-center"
			>
				<div className="mx-auto mb-8 h-px w-20 bg-yellow-color/50" />
				<p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent-color">
					{thankYouContent.eyebrow}
				</p>
				<h2 className="font-pinyon text-7xl leading-none text-yellow-color sm:text-8xl">
					{thankYouContent.title}
				</h2>
				<p className="mx-auto mt-7 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
					{thankYouContent.message}
				</p>
				<p className="mt-6 text-sm italic text-white/70">
					{thankYouContent.closing}
				</p>

				<motion.p
					initial={{ opacity: 0, scale: 0.96 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-8 font-pinyon text-5xl text-yellow-color"
				>
					{thankYouContent.couple}
				</motion.p>
			</motion.div>
		</section>
	);
}
