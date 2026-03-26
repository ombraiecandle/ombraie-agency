import Navbar from "@/components/sections/Navbar";
import RealisationsCarousel from "@/components/sections/RealisationsCarousel";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez les réalisations concrètes d'Ombraie Agency : campagnes Meta & Google Ads avec résultats mesurés, sites web vitrines & e-commerce, flyers et créations print. Tarifs transparents inclus.",
  alternates: {
    canonical: "https://ombraie-agency.vercel.app/realisations",
  },
  openGraph: {
    title: "Nos Réalisations — Ombraie Agency",
    description:
      "ROAS 5.4×, sites livrés en 3 semaines, flyers en 3 jours. Voici ce qu'on accomplit pour nos clients en Haute-Garonne.",
    url: "https://ombraie-agency.vercel.app/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FAFAF9" }}>
      <Navbar />
      <RealisationsCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
