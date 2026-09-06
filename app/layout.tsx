import type { Metadata } from "next";
import { Pinyon_Script, Andada_Pro } from "next/font/google";
import "./globals.css";


const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pinyon", 
});


const andadaPro = Andada_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-andada", 
});

export const metadata: Metadata = {
  title: "Bob & Alice Wedding",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pinyonScript.variable} ${andadaPro.variable} h-full antialiased`}
    >
      <body className={`${andadaPro.className} h-full`}>{children}</body>
    </html>
  );
}
