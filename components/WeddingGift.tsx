"use client";

import { useState } from "react";
import { motion } from "motion/react";

export const bankAccounts = [
	{
		bank: "Bank Mandiri",
		accountNumber: "1234567890123",
		accountName: "Alice & Bob",
	},
	{
		bank: "Bank BCA",
		accountNumber: "9876543210",
		accountName: "Alice & Bob",
	},
];

export default function WeddingGift() {
	const [copiedAccount, setCopiedAccount] = useState("");

	const copyAccountNumber = async (accountNumber: string) => {
		try {
			await navigator.clipboard.writeText(accountNumber);
			setCopiedAccount(accountNumber);
			window.setTimeout(() => setCopiedAccount(""), 2000);
		} catch {
			setCopiedAccount("");
		}
	};

	return (
		<section className="w-full px-4 py-16 sm:px-6 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				className="mx-auto max-w-3xl"
			>
				<header className="mx-auto mb-10 max-w-xl text-center">
					<p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-color">
						Wedding Gift
					</p>
					<h2 className="font-pinyon text-6xl leading-none text-yellow-color sm:text-7xl">
						Tanda Kasih
					</h2>
					<div className="mx-auto mt-5 h-px w-16 bg-yellow-color/50" />
					<p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
						Doa dan kehadiran Anda adalah hadiah terindah bagi kami. Jika ingin
						memberikan tanda kasih, dapat melalui rekening berikut.
					</p>
				</header>

				<div className="grid gap-5 md:grid-cols-2">
					{bankAccounts.map((account, index) => (
						<motion.article
							key={account.bank}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{
								duration: 0.55,
								delay: index * 0.12,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="border border-accent-color/35 bg-neutral-color/35 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-7"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-accent-color">
										Bank Transfer
									</p>
									<h3 className="mt-2 text-xl font-bold text-white">
										{account.bank}
									</h3>
								</div>
								<span className="border border-yellow-color/40 px-2 py-1 text-xs text-yellow-color">
									{index === 0 ? "MANDIRI" : "BCA"}
								</span>
							</div>

							<div className="mt-8">
								<p className="text-xs uppercase tracking-[0.16em] text-accent-color">
									Nomor Rekening
								</p>
								<p className="mt-2 break-all font-mono text-2xl tracking-[0.08em] text-yellow-color">
									{account.accountNumber}
								</p>
								<p className="mt-3 text-sm text-white/75">
									Atas nama {account.accountName}
								</p>
							</div>

							<button
								type="button"
								onClick={() => copyAccountNumber(account.accountNumber)}
								className="mt-6 w-full border border-accent-color/50 px-4 py-3 text-sm text-white transition hover:border-yellow-color/70 hover:text-yellow-color focus:outline-none focus:ring-2 focus:ring-yellow-color/60"
							>
								{copiedAccount === account.accountNumber
									? "Nomor berhasil disalin"
									: "Salin nomor rekening"}
							</button>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
}
