"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

const attendanceOptions = [
	{ value: "hadir", label: "Saya akan hadir" },
	{ value: "tidak-hadir", label: "Belum bisa hadir" },
];

const initialForm = {
	name: "",
	attendance: "hadir",
	guests: "1",
	message: "",
};

type GuestMessage = typeof initialForm & { id: number };

export default function RSVP() {
	const [form, setForm] = useState(initialForm);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [guestMessages, setGuestMessages] = useState<GuestMessage[]>([]);

	const updateField = (field: keyof typeof initialForm, value: string) => {
		setForm((currentForm) => ({ ...currentForm, [field]: value }));
		setIsSubmitted(false);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setGuestMessages((currentMessages) => [
			{ ...form, id: Date.now() },
			...currentMessages,
		]);
		setForm(initialForm);
		setIsSubmitted(true);
	};

	return (
		<section className="w-full px-4 py-16 sm:px-6 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				className="mx-auto max-w-2xl"
			>
				<header className="mb-10 text-center">
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-color">
						Konfirmasi Kehadiran
					</p>
					<h2 className="font-pinyon text-6xl leading-none text-yellow-color sm:text-7xl">
						RSVP
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-yellow-color/50" />
					<p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
						Beri tahu kami kehadiran dan doa terbaik Anda untuk hari bahagia ini.
					</p>
				</header>

				<motion.form
					onSubmit={handleSubmit}
					className="border border-accent-color/35 bg-neutral-color/35 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8"
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<div className="space-y-5">
						<label className="block">
							<span className="mb-2 block text-xs uppercase tracking-[0.16em] text-accent-color">
								Nama
							</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={(event) => updateField("name", event.target.value)}
								placeholder="Nama Anda"
								required
								className="w-full border border-accent-color/30 bg-background/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-yellow-color/70"
							/>
						</label>

						<fieldset>
							<legend className="mb-2 block text-xs uppercase tracking-[0.16em] text-accent-color">
								Kehadiran
							</legend>
							<div className="grid gap-3 sm:grid-cols-2">
								{attendanceOptions.map((option) => (
									<label
										key={option.value}
										className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition ${
											form.attendance === option.value
												? "border-yellow-color/70 text-yellow-color"
												: "border-accent-color/30 text-white/75 hover:border-accent-color"
										}`}
									>
										<input
											type="radio"
											name="attendance"
											value={option.value}
											checked={form.attendance === option.value}
											onChange={(event) =>
												updateField("attendance", event.target.value)
											}
											className="accent-yellow-color"
										/>
										{option.label}
									</label>
								))}
							</div>
						</fieldset>

						<label className="block">
							<span className="mb-2 block text-xs uppercase tracking-[0.16em] text-accent-color">
								Jumlah Tamu
							</span>
							<select
								name="guests"
								value={form.guests}
								onChange={(event) => updateField("guests", event.target.value)}
								className="w-full border border-accent-color/30 bg-background/50 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-color/70"
							>
								<option value="1">1 orang</option>
								<option value="2">2 orang</option>
								<option value="3">3 orang</option>
								<option value="4">4 orang</option>
							</select>
						</label>

						<label className="block">
							<span className="mb-2 block text-xs uppercase tracking-[0.16em] text-accent-color">
								Ucapan dan Doa
							</span>
							<textarea
								name="message"
								value={form.message}
								onChange={(event) => updateField("message", event.target.value)}
								placeholder="Tuliskan ucapan untuk kedua mempelai"
								rows={4}
								className="w-full resize-none border border-accent-color/30 bg-background/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-yellow-color/70"
							/>
						</label>

						<button
							type="submit"
							className="w-full bg-accent-color px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-color/80 focus:outline-none focus:ring-2 focus:ring-yellow-color/60"
						>
							Kirim Konfirmasi
						</button>

						{isSubmitted && (
							<motion.p
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center text-sm text-yellow-color"
								role="status"
							>
								Terima kasih, konfirmasi Anda sudah diterima.
							</motion.p>
						)}
					</div>
				</motion.form>

				{guestMessages.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						className="mt-8"
					>
						<div className="mb-4 flex items-center justify-between gap-4">
							<h3 className="font-pinyon text-4xl text-yellow-color">
								Ucapan untuk Mempelai
							</h3>
							<span className="text-xs text-accent-color">
								{guestMessages.length} ucapan
							</span>
						</div>

						<div className="space-y-3">
							{guestMessages.map((guestMessage, index) => (
								<motion.article
									key={guestMessage.id}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.35, delay: index * 0.05 }}
									className="border border-accent-color/25 bg-neutral-color/25 px-5 py-4"
								>
									<div className="flex flex-wrap items-center justify-between gap-2">
										<h4 className="font-bold text-white">
											{guestMessage.name}
										</h4>
										<span className="text-xs text-accent-color">
											{guestMessage.attendance === "hadir"
												? `Hadir · ${guestMessage.guests} tamu`
												: "Belum bisa hadir"}
										</span>
									</div>
									<p className="mt-2 text-sm leading-relaxed text-white/75">
										{guestMessage.message.trim() ||
											"Mengirimkan doa terbaik untuk kedua mempelai. Semoga selalu bahagia."}
									</p>
								</motion.article>
							))}
						</div>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
