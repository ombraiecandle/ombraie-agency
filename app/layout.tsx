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

const SITE_URL = "https://ombraie-agency.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ombraie Agency — Agence Marketing Digital | Martres-Tolosane, Haute-Garonne",
    template: "%s | Ombraie Agency",
  },
  description:
    "Agence marketing & digital basée à Martres-Tolosane (31). Social Media, Meta Ads, Google Ads, création de sites e-commerce & vitrines, design graphique. Intervient à Cazères, Boussens, Aurignac, Salies-du-Salat, Carbonne, Muret, Rieux-Volvestre et Toulouse.",
  keywords: [
    // Local — village par village
    "agence marketing Martres-Tolosane",
    "agence digitale Martres-Tolosane",
    "agence web Martres-Tolosane",
    "agence marketing Cazères",
    "agence marketing Boussens",
    "agence marketing Aurignac",
    "agence marketing Salies-du-Salat",
    "agence marketing Carbonne",
    "agence marketing Muret",
    "agence marketing Rieux-Volvestre",
    "agence marketing Saint-Martory",
    "agence marketing Haute-Garonne",
    "agence marketing 31",
    "agence digitale Haute-Garonne",
    "agence web Haute-Garonne",
    "création site internet Martres-Tolosane",
    "création site internet Cazères",
    "création site internet Haute-Garonne",
    // Services
    "social media management",
    "meta ads",
    "google ads",
    "publicité facebook",
    "publicité instagram",
    "création de contenu",
    "site e-commerce",
    "site vitrine",
    "design graphique",
    "flyer",
    "identité visuelle",
    "shopify",
    // Régional
    "agence marketing Toulouse",
    "agence marketing Occitanie",
    "agence SMMA France",
    "agence marketing PME",
    "marketing digital e-commerce",
  ],
  authors: [{ name: "Ombraie Agency" }],
  creator: "Ombraie Agency",
  publisher: "Ombraie Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Ombraie Agency",
    title: "Ombraie Agency — Agence Marketing Digital | Martres-Tolosane (31)",
    description:
      "Agence marketing & digital basée en Haute-Garonne (31). Social Media, Paid Ads, Sites web, Design graphique. Cazères, Aurignac, Carbonne, Muret, Toulouse.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ombraie Agency — Agence Marketing Digital | Martres-Tolosane",
    description: "Social Media, Paid Ads, Sites web & Design — Haute-Garonne (31)",
    creator: "@ombraie",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "REMPLACER_PAR_CODE_GOOGLE_SEARCH_CONSOLE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Ombraie Agency",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "Agence marketing & digital spécialisée pour les e-commerçants et entreprises. Social Media, Meta Ads, Google Ads, Sites web, Design graphique.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Martres-Tolosane",
    addressRegion: "Haute-Garonne",
    postalCode: "31220",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2,
    longitude: 1.017,
  },
  telephone: "À compléter",
  email: "contact@ombraie.agency",
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: [
    { "@type": "City", name: "Martres-Tolosane" },
    { "@type": "City", name: "Cazères" },
    { "@type": "City", name: "Boussens" },
    { "@type": "City", name: "Aurignac" },
    { "@type": "City", name: "Salies-du-Salat" },
    { "@type": "City", name: "Carbonne" },
    { "@type": "City", name: "Muret" },
    { "@type": "City", name: "Rieux-Volvestre" },
    { "@type": "City", name: "Saint-Martory" },
    { "@type": "City", name: "Boulogne-sur-Gesse" },
    { "@type": "City", name: "Toulouse" },
    { "@type": "State", name: "Haute-Garonne" },
  ],
  sameAs: [
    "https://www.instagram.com/ombraie.agency",
    "https://www.facebook.com/ombraie.agency",
    "https://www.linkedin.com/company/ombraie-agency",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Marketing Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads & Google Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de Sites Web E-commerce" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de Sites Vitrines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Graphique & Identité Visuelle" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Où est située Ombraie Agency ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ombraie Agency est basée à Martres-Tolosane (31220), en Haute-Garonne. Nous intervenons sur toute la zone : Cazères, Boussens, Aurignac, Salies-du-Salat, Carbonne, Muret, Saint-Martory, Rieux-Volvestre et Toulouse.",
      },
    },
    {
      "@type": "Question",
      name: "Quels services propose Ombraie Agency ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons : Social Media Management (Instagram, TikTok, Facebook), Publicité payante Meta Ads & Google Ads, Création de contenu (visuels, vidéos, copywriting), Création de sites e-commerce & vitrines (Shopify, Next.js), et Design graphique (flyers, identité visuelle, cartes de visite).",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le budget minimum pour travailler avec Ombraie Agency ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous accompagnons des clients à partir de 500€/mois pour les missions de Social Media ou de Paid Ads. Des forfaits sur-mesure sont disponibles selon vos besoins et votre budget.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps pour créer un site e-commerce ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un site vitrine est livré en 2 à 3 semaines. Un site e-commerce Shopify ou Next.js complet est livré en 3 à 6 semaines selon la complexité du projet.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous un audit gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le premier échange est 100% gratuit. Nous réalisons un audit de votre présence digitale actuelle et vous proposons une stratégie personnalisée sous 24h.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
