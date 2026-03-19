import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ombraie Agency — Agence Marketing & Digital",
  description: "Agence spécialisée en Social Media, Paid Ads, Création de contenu, Sites web e-commerce & vitrines, et design graphique. Transformez votre présence digitale.",
  keywords: "agence marketing, social media, google ads, meta ads, création de contenu, site ecommerce, site vitrine, design graphique, flyer",
  openGraph: {
    title: "Ombraie Agency",
    description: "Agence marketing digital — Social Media, Ads, Contenu, Sites web, Design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
