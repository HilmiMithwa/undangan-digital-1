"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

export const momentPhotos = [
	{
		src: "/ourMoments/beautiful-bride-groom.jpg",
		alt: "Pasangan pengantin tersenyum bersama",
		className: "md:col-span-7 md:row-span-2",
	},
	{
		src: "/ourMoments/newlyweds-dancing-street.jpg",
		alt: "Pasangan pengantin menari di jalan",
		className: "md:col-span-5",
	},
	{
		src: "/ourMoments/groom-walking-his-girlfriend.jpg",
		alt: "Pasangan berjalan bersama",
		className: "md:col-span-5",
	},
	{
		src: "/ourMoments/newlyweds-couple-kissing-sea.jpg",
		alt: "Pasangan menikmati momen romantis di tepi laut",
		className: "md:col-span-5",
	},
	{
		src: "/ourMoments/white-wedding-bouquet-made-callas-woman-is-hugging-man-outdoors.jpg",
		alt: "Pasangan dengan buket bunga di luar ruangan",
		className: "md:col-span-7",
	},
	{
		src: "/ourMoments/beautiful-couple-posing-their-wedding-day.jpg",
		alt: "Pasangan berpose di hari pernikahan",
		className: "md:col-span-4",
	},
	{
		src: "/ourMoments/young-wedding-couple-enjoying-romantic-moments.jpg",
		alt: "Pasangan menikmati momen romantis",
		className: "md:col-span-4",
	},
	{
		src: "/ourMoments/young-wedding-couple-enjoying-romantic-moments (1).jpg",
		alt: "Pasangan muda menikmati hari pernikahan",
		className: "md:col-span-4",
	},
];

const galleryVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const photoVariants: Variants = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function OurMoments() {
	return (
		<section className="w-full px-4 py-16 sm:px-6 md:py-24">
			<div className="mx-auto max-w-5xl">
				<motion.header
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-10 max-w-xl text-center"
				>
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-color">
						Captured With Love
					</p>
					<h2 className="font-pinyon text-6xl leading-none text-yellow-color sm:text-7xl">
						Our Moments
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-yellow-color/50" />
					<p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
						Potongan cerita kecil yang ingin selalu kami kenang.
					</p>
				</motion.header>

				<motion.div
					variants={galleryVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.12 }}
					className="grid grid-cols-1 gap-4 sm:gap-5 md:auto-rows-[220px] md:grid-cols-12 md:gap-5"
				>
					{momentPhotos.map((photo) => (
						<motion.figure
							key={photo.src}
							variants={photoVariants}
							className={`group relative h-[260px] min-h-0 overflow-hidden border border-accent-color/25 bg-neutral-color/40 sm:h-[300px] md:h-full ${photo.className}`}
						>
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover transition duration-700 ease-out group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-neutral-color/10 transition duration-500 group-hover:bg-neutral-color/0" />
						</motion.figure>
					))}
				</motion.div>
			</div>
		</section>
	);
}
