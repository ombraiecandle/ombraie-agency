import Navbar from "@/components/sections/Navbar";
import RealisationsCarousel from "@/components/sections/RealisationsCarousel";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import type { Realisation } from "@/types/realisation";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez les réalisations concrètes d'Ombraie Agency : campagnes Meta & Google Ads, sites web vitrines & e-commerce, flyers et créations print. Tarifs transparents inclus.",
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

async function fetchRealisations(): Promise<Realisation[]> {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key || url.includes("VOTRE_PROJECT")) return [];

    const res = await fetch(
      `${url}/rest/v1/realisations?visible=eq.true&order=order_index.asc,created_at.desc`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function RealisationsPage() {
  const realisations = await fetchRealisations();

  const adsFromDB = realisations.filter((r) => r.category === "ads");
  const sitesFromDB = realisations.filter((r) => r.category === "sites");
  const flyersFromDB = realisations.filter((r) => r.category === "flyers");

  return (
    <main className="min-h-screen" style={{ background: "#FAFAF9" }}>
      <Navbar />
      <RealisationsCarousel
        adsFromDB={adsFromDB}
        sitesFromDB={sitesFromDB}
        flyersFromDB={flyersFromDB}
      />
      <Contact />
      <Footer />
    </main>
  );
}
