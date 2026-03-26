"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Check,
  TrendingUp,
  ArrowRight,
  Monitor,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Realisation, AdsData, SiteData, FlyerData } from "@/types/realisation";

// ─── DATA ────────────────────────────────────────────────────

const adCampaigns = [
  {
    client: "Boutique Mode",
    sector: "Vêtements · Toulouse",
    platform: "Facebook & Instagram Ads",
    duration: "3 mois · 800€/mois",
    metrics: [
      { label: "Impressions", value: "124 000" },
      { label: "Clics", value: "3 870" },
      { label: "Taux de clic", value: "3,12%" },
      { label: "ROAS", value: "4.8×" },
      { label: "CA généré", value: "22 400€" },
      { label: "Coût/clic", value: "0,62€" },
    ],
    bars: [30, 45, 38, 62, 78, 55, 82, 70, 85, 92, 80, 100],
    accent: "#7c3aed",
    roas_highlight: "4.8×",
    ca_highlight: "+22 400€",
  },
  {
    client: "Restaurant Le Gaulois",
    sector: "Restauration · Pamiers",
    platform: "Facebook Ads",
    duration: "6 semaines · 400€/mois",
    metrics: [
      { label: "Impressions", value: "42 000" },
      { label: "Clics", value: "1 240" },
      { label: "Taux de clic", value: "2,95%" },
      { label: "ROAS", value: "3.2×" },
      { label: "CA généré", value: "8 600€" },
      { label: "Coût/clic", value: "0,77€" },
    ],
    bars: [20, 32, 28, 50, 60, 45, 68, 58, 72, 78, 65, 84],
    accent: "#f59e0b",
    roas_highlight: "3.2×",
    ca_highlight: "+8 600€",
  },
  {
    client: "Coach Fitness Clara",
    sector: "Coaching · En ligne",
    platform: "Instagram & Google Ads",
    duration: "2 mois · 600€/mois",
    metrics: [
      { label: "Impressions", value: "89 000" },
      { label: "Clics", value: "2 560" },
      { label: "Taux de clic", value: "2,88%" },
      { label: "ROAS", value: "5.4×" },
      { label: "CA généré", value: "15 700€" },
      { label: "Coût/clic", value: "0,55€" },
    ],
    bars: [38, 55, 50, 68, 76, 65, 82, 75, 90, 86, 93, 100],
    accent: "#34d399",
    roas_highlight: "5.4×",
    ca_highlight: "+15 700€",
  },
];

const websites = [
  {
    name: "Art & Maison Rénovation",
    url: "artmaison-renovation.fr",
    type: "Site Vitrine",
    sector: "Artisan bâtiment",
    nav: ["Accueil", "Services", "Réalisations", "Contact"],
    headline: "Rénovation &\nAménagement",
    heroSub: "Artisan local depuis 15 ans en Haute-Garonne",
    heroCta: "Demander un devis →",
    heroTag: "Certifié RGE",
    accentColor: "#7c3aed",
    navBg: "white",
    navText: "#111",
    heroBg: "linear-gradient(135deg, #f3f0ff 0%, #ede9fe 100%)",
    heroTextColor: "#1a1a2e",
    services: ["Carrelage", "Peinture", "Plâtrerie"],
    serviceIcons: ["🪟", "🖌️", "🏗️"],
    testimonial: "Travail impeccable, très professionnel et rapide.",
    deliveryTime: "3 semaines",
    price: "1 200€",
  },
  {
    name: "La Boutique d'Inès",
    url: "laboutiqueines.fr",
    type: "E-commerce",
    sector: "Mode femme",
    nav: ["Nouveautés", "Robes", "Accessoires", "Mon panier"],
    headline: "Nouvelle\nCollection Été",
    heroSub: "Livraison offerte dès 60€ · Retour 30 jours",
    heroCta: "Voir la collection →",
    heroTag: "Livraison 24h",
    accentColor: "#be185d",
    navBg: "#fff0f6",
    navText: "#be185d",
    heroBg: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
    heroTextColor: "#831843",
    services: ["Robes", "Tops", "Sacs"],
    serviceIcons: ["👗", "👚", "👜"],
    testimonial: "Site super bien fait, j'ai commandé en 2 minutes !",
    deliveryTime: "4 semaines",
    price: "2 400€",
  },
  {
    name: "Cabinet Ostéo Muret",
    url: "osteo-muret.fr",
    type: "Site Vitrine",
    sector: "Santé & Bien-être",
    nav: ["Accueil", "Prestations", "L'équipe", "Rendez-vous"],
    headline: "Ostéopathie &\nBien-être",
    heroSub: "Prise en charge mutuelle · Adultes & enfants",
    heroCta: "Prendre rendez-vous →",
    heroTag: "D.O. diplômé",
    accentColor: "#0284c7",
    navBg: "white",
    navText: "#0284c7",
    heroBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    heroTextColor: "#0c4a6e",
    services: ["Ostéo adulte", "Pédiatrique", "Sportif"],
    serviceIcons: ["🧘", "👶", "🏃"],
    testimonial: "Très à l'écoute, je recommande vivement.",
    deliveryTime: "2 semaines",
    price: "950€",
  },
];

const flyers = [
  {
    brand: "Restaurant Le Gaulois",
    title: "PROMO\nÉTÉ",
    subtitle: "Menu & Cocktails du Soir",
    tag: "–20% ce weekend",
    offers: [
      { label: "Formule déjeuner", price: "12,90€" },
      { label: "Menu du soir", price: "22,50€" },
      { label: "Cocktail maison", price: "8,00€" },
    ],
    promoLine: "–20% sur toute la carte",
    promoSub: "Valable vendredi & samedi soir",
    address: "12 rue de la Mairie, Pamiers",
    phone: "05 61 27 44 10",
    type: "Flyer A5 Recto/Verso",
    color1: "#d97706",
    color2: "#dc2626",
    prints: "500 ex.",
    deliveryTime: "5 jours",
    price: "220€",
  },
  {
    brand: "Studio Pilates Cazères",
    title: "GRANDE\nOUVERTURE",
    subtitle: "Studio Pilates & Yoga",
    tag: "Entrée gratuite J-1",
    offers: [
      { label: "Cours Pilates Mat", price: "15€/séance" },
      { label: "Yoga Vinyasa", price: "13€/séance" },
      { label: "Abonnement mensuel", price: "89€/mois" },
    ],
    promoLine: "1er cours offert",
    promoSub: "Sur présentation de ce flyer",
    address: "8 avenue du Parc, Cazères",
    phone: "06 12 34 56 78",
    type: "Affiche A3 + Format Réseaux",
    color1: "#7c3aed",
    color2: "#a855f7",
    prints: "200 affiches",
    deliveryTime: "4 jours",
    price: "350€",
  },
  {
    brand: "Électro Confort",
    title: "SOLDES\nHIVER",
    subtitle: "Jusqu'à –40% sur tout",
    tag: "Offre limitée",
    offers: [
      { label: "Lave-linge 8kg", price: "dès 299€" },
      { label: "Réfrigérateur", price: "dès 199€" },
      { label: 'TV 4K 55"', price: "dès 349€" },
    ],
    promoLine: "–40% sur tout le magasin",
    promoSub: "Du 8 au 22 janvier 2025",
    address: "Zone Commerciale Nord, Muret",
    phone: "05 61 51 XX XX",
    type: "Flyer A4 Recto",
    color1: "#0369a1",
    color2: "#4338ca",
    prints: "1 000 ex.",
    deliveryTime: "3 jours",
    price: "200€",
  },
];

const adsPricing = [
  {
    name: "Starter",
    price: "300€",
    period: "/mois",
    sub: "Budget pub jusqu'à 500€/mois",
    features: [
      "Campagnes Facebook & Instagram",
      "Ciblage audience sur-mesure",
      "Rapport mensuel complet",
      "1 visuel publicitaire/semaine",
    ],
  },
  {
    name: "Pro",
    price: "500€",
    period: "/mois",
    sub: "Budget pub 500€ – 2 000€/mois",
    features: [
      "Facebook, Instagram + Google Ads",
      "Remarketing & audiences similaires",
      "Rapport hebdo + appel bilan mensuel",
      "3 visuels/semaine",
    ],
    highlighted: true,
  },
  {
    name: "Expert",
    price: "750€",
    period: "/mois",
    sub: "Budget pub 2 000€+/mois",
    features: [
      "Multi-plateforme (Meta, Google, TikTok)",
      "A/B testing continu",
      "Tableau de bord en temps réel",
      "Visuels & vidéos illimités",
    ],
  },
];

const sitesPricing = [
  {
    name: "Site Vitrine",
    price: "800€",
    period: "",
    sub: "1 à 3 pages · Livré en 2-3 sem.",
    features: [
      "Design responsive mobile",
      "Formulaire de contact",
      "Google Maps intégré",
      "SEO de base inclus",
    ],
  },
  {
    name: "Site Pro",
    price: "1 400€",
    period: "",
    sub: "5 à 8 pages · Livré en 3-4 sem.",
    features: [
      "Design premium sur-mesure",
      "Blog / page actualités",
      "SEO avancé + Analytics",
      "Prise de rendez-vous en ligne",
    ],
    highlighted: true,
  },
  {
    name: "E-commerce",
    price: "1 500€",
    period: "",
    sub: "Boutique · Livré en 4 sem.",
    features: [
      "Jusqu'à 50 produits",
      "Paiement en ligne sécurisé",
      "Gestion des stocks",
      "Codes promo & livraison",
    ],
  },
];

const flyersPricing = [
  {
    name: "Flyer A5",
    price: "150€",
    period: "",
    sub: "Recto · Livré en 3 jours",
    features: [
      "Création graphique complète",
      "1 révision incluse",
      "Fichier print-ready (PDF)",
      "Format réseaux offert",
    ],
  },
  {
    name: "Flyer A5 R/V",
    price: "220€",
    period: "",
    sub: "Recto/Verso · Livré en 4 jours",
    features: [
      "Création graphique complète",
      "2 révisions incluses",
      "Fichiers print-ready",
      "Format réseaux offert",
    ],
    highlighted: true,
  },
  {
    name: "Pack Complet",
    price: "450€",
    period: "",
    sub: "Flyer + Affiche + Réseaux",
    features: [
      "Tous formats (A5, A4, A3)",
      "Formats réseaux sociaux inclus",
      "Révisions illimitées",
      "Charte graphique incluse",
    ],
  },
];

// ─── INNER CARDS ─────────────────────────────────────────────

function AdCard({ c }: { c: (typeof adCampaigns)[0] }) {
  const maxBar = Math.max(...c.bars);
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-100"
      style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: c.accent }}
      >
        <div>
          <p className="text-white font-black text-base leading-tight">
            {c.client}
          </p>
          <p className="text-white/70 text-xs mt-0.5">{c.sector}</p>
        </div>
        <span
          className="text-xs font-bold text-white/90 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          {c.platform}
        </span>
      </div>
      <div className="px-5 pt-5 pb-3">
        <p className="text-xs text-gray-400 font-medium mb-3">
          Évolution des performances · {c.duration}
        </p>
        <div className="flex items-end gap-1 h-14">
          {c.bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${(h / maxBar) * 100}%`,
                background:
                  i === c.bars.length - 1 ? c.accent : `${c.accent}40`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="grid grid-cols-3 gap-2">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="p-2.5 rounded-xl bg-gray-50 border border-gray-100"
            >
              <p className="text-gray-400 text-[10px] font-medium leading-tight mb-1">
                {m.label}
              </p>
              <p className="text-gray-900 font-bold text-sm">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div
            className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              background: `${c.accent}10`,
              border: `1px solid ${c.accent}25`,
            }}
          >
            <TrendingUp size={13} style={{ color: c.accent }} />
            <span className="text-xs font-bold" style={{ color: c.accent }}>
              ROAS {c.roas_highlight}
            </span>
          </div>
          <div
            className="flex-1 flex items-center justify-center px-3 py-2 rounded-xl"
            style={{
              background: `${c.accent}10`,
              border: `1px solid ${c.accent}25`,
            }}
          >
            <span className="text-xs font-bold" style={{ color: c.accent }}>
              {c.ca_highlight} CA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteCard({ w }: { w: (typeof websites)[0] }) {
  const lines = w.headline.split("\n");
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-100"
      style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      <div
        className="px-3 py-2 flex items-center gap-2"
        style={{ background: "#f0f0ee", borderBottom: "1px solid #e5e5e3" }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex gap-1 ml-1">
          <div
            className="px-2 py-0.5 rounded-t text-[8px] text-gray-500 font-medium"
            style={{
              background: "white",
              border: "1px solid #e5e5e3",
              borderBottom: "1px solid white",
            }}
          >
            {w.url.split(".")[0]}
          </div>
          <div
            className="px-2 py-0.5 rounded-t text-[8px] text-gray-400"
            style={{ background: "#e8e8e6" }}
          >
            +
          </div>
        </div>
        <div
          className="flex-1 mx-1 px-2 py-0.5 rounded-md text-[9px] text-gray-400 flex items-center gap-1"
          style={{ background: "white", border: "1px solid #ddd" }}
        >
          <span style={{ color: "#16a34a", fontSize: "8px" }}>🔒</span>
          {w.url}
        </div>
      </div>

      <div
        style={{ height: "270px", overflow: "hidden", position: "relative" }}
      >
        <div
          className="flex items-center justify-between px-3"
          style={{
            background: w.navBg,
            borderBottom: `2px solid ${w.accentColor}`,
            padding: "6px 12px",
          }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-4 h-4 rounded-sm flex items-center justify-center text-white text-[7px] font-black"
              style={{ background: w.accentColor }}
            >
              {w.name[0]}
            </div>
            <span
              className="text-[8px] font-black tracking-tight"
              style={{ color: w.navText }}
            >
              {w.name.split(" ").slice(0, 2).join(" ").toUpperCase()}
            </span>
          </div>
          <div className="flex gap-2.5">
            {w.nav.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-[7px] font-medium"
                style={{ color: w.navText, opacity: 0.7 }}
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold text-white"
            style={{ background: w.accentColor }}
          >
            {w.nav[3]}
          </div>
        </div>

        <div
          className="flex items-center justify-between px-4 py-4 gap-3"
          style={{ background: w.heroBg }}
        >
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[7px] font-bold mb-2"
              style={{
                background: `${w.accentColor}18`,
                color: w.accentColor,
              }}
            >
              ✓ {w.heroTag}
            </div>
            <div
              className="font-black leading-[1.15] mb-2"
              style={{ fontSize: "12px", color: w.heroTextColor }}
            >
              {lines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <div
              className="text-[7.5px] leading-relaxed mb-3"
              style={{
                color: w.heroTextColor,
                opacity: 0.6,
                maxWidth: "130px",
              }}
            >
              {w.heroSub}
            </div>
            <div
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[7px] font-bold text-white"
              style={{ background: w.accentColor }}
            >
              {w.heroCta}
            </div>
          </div>
          <div
            className="flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center text-2xl"
            style={{
              background: `linear-gradient(135deg, ${w.accentColor}25, ${w.accentColor}10)`,
              border: `1px solid ${w.accentColor}20`,
            }}
          >
            {w.serviceIcons[0]}
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderTop: "1px solid #f0f0f0",
            padding: "8px 12px",
          }}
        >
          <div
            className="text-[7px] font-bold uppercase tracking-wider mb-2"
            style={{ color: "#9ca3af" }}
          >
            {w.type === "E-commerce" ? "Nos produits" : "Nos prestations"}
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {w.services.map((s, i) => (
              <div
                key={s}
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${w.accentColor}15` }}
              >
                <div
                  className="flex items-center justify-center text-base"
                  style={{
                    height: "30px",
                    background: `linear-gradient(135deg, ${w.accentColor}12, ${w.accentColor}06)`,
                  }}
                >
                  {w.serviceIcons[i]}
                </div>
                <div style={{ padding: "4px 6px", background: "white" }}>
                  <div className="text-[7px] font-semibold text-gray-700 truncate">
                    {s}
                  </div>
                  {w.type === "E-commerce" && (
                    <div
                      className="text-[7px] font-black mt-0.5"
                      style={{ color: w.accentColor }}
                    >
                      {["39€", "89€", "124€"][i]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{
            background: `${w.accentColor}06`,
            borderTop: `1px solid ${w.accentColor}12`,
          }}
        >
          <span className="text-[10px]">⭐⭐⭐⭐⭐</span>
          <span className="text-[7.5px] text-gray-500 italic truncate">
            &ldquo;{w.testimonial}&rdquo;
          </span>
        </div>

        <div
          className="flex items-center justify-between px-3 py-1.5"
          style={{ background: "#1a1a2e" }}
        >
          <span className="text-[7px] text-white/50">{w.url}</span>
          <span
            className="text-[7px] font-bold"
            style={{ color: w.accentColor }}
          >
            © 2025
          </span>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-5 pointer-events-none"
          style={{ background: "linear-gradient(transparent, white)" }}
        />
      </div>

      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-gray-900 font-bold text-sm">{w.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">
            {w.sector} · {w.type}
          </p>
        </div>
        <div className="text-right">
          <p className="font-black text-sm" style={{ color: "#7c3aed" }}>
            {w.price}
          </p>
          <p className="text-gray-400 text-xs">{w.deliveryTime}</p>
        </div>
      </div>
    </div>
  );
}

function FlyerRestaurant({ f }: { f: (typeof flyers)[0] }) {
  return (
    <div
      style={{
        aspectRatio: "1/1.41",
        position: "relative",
        overflow: "hidden",
        background: "#1a0800",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, #c2410c 0%, #92400e 50%, #1c0a00 100%)",
        }}
      />
      <svg
        style={{
          position: "absolute",
          top: "-18%",
          right: "-18%",
          width: "72%",
          opacity: 0.18,
        }}
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.7" fill="none" />
        <circle cx="100" cy="100" r="64" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="48" stroke="white" strokeWidth="0.4" fill="rgba(255,255,255,0.04)" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line key={a} x1="100" y1="100"
            x2={100 + 96 * Math.cos((a * Math.PI) / 180)}
            y2={100 + 96 * Math.sin((a * Math.PI) / 180)}
            stroke="white" strokeWidth="0.3" opacity="0.6"
          />
        ))}
        <circle cx="100" cy="100" r="5" fill="rgba(255,255,255,0.25)" />
      </svg>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "3px", background: "linear-gradient(90deg, #f59e0b, #ef4444, transparent)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 15px 9px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "6px", letterSpacing: "2.5px", textTransform: "uppercase" }}>Brasserie Traditionnelle</div>
            <div style={{ color: "white", fontSize: "9px", fontWeight: 900, letterSpacing: "1.5px", textTransform: "uppercase" }}>{f.brand}</div>
          </div>
          <div style={{ padding: "3px 8px", borderRadius: "4px", background: "#f59e0b", color: "#1a0800", fontSize: "7px", fontWeight: 900 }}>{f.tag}</div>
        </div>
        <div style={{ textAlign: "center", padding: "16px 15px 12px", borderBottom: "1px solid rgba(255,255,255,0.09)" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "6px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>{f.subtitle}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(245,158,11,0.5)" }} />
            <span style={{ color: "#f59e0b", fontSize: "11px" }}>✦</span>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(245,158,11,0.5)" }} />
          </div>
          {f.title.split("\n").map((line, i) => (
            <div key={i} style={{ color: i === 0 ? "rgba(255,255,255,0.9)" : "#f59e0b", fontSize: i === 0 ? "22px" : "30px", fontWeight: 900, lineHeight: 1.05, letterSpacing: i === 0 ? "4px" : "2px", textTransform: "uppercase", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>{line}</div>
          ))}
        </div>
        <div style={{ padding: "10px 15px", flex: 1 }}>
          {f.offers.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 9px", marginBottom: "4px", borderRadius: "5px", borderLeft: "2px solid rgba(245,158,11,0.6)", background: "rgba(255,255,255,0.06)" }}>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "8px", fontWeight: 600 }}>✦ {o.label}</span>
              <span style={{ color: "#f59e0b", fontSize: "9px", fontWeight: 900 }}>{o.price}</span>
            </div>
          ))}
          <div style={{ marginTop: "8px", padding: "7px 10px", borderRadius: "7px", textAlign: "center", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)" }}>
            <div style={{ color: "#fbbf24", fontWeight: 900, fontSize: "11px" }}>{f.promoLine}</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "7px", marginTop: "2px" }}>{f.promoSub}</div>
          </div>
        </div>
        <div style={{ padding: "7px 15px 9px", background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px", marginBottom: "3px" }}>📍 {f.address}</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px" }}>📞 {f.phone}</div>
        </div>
        <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #f59e0b, #ef4444)" }} />
      </div>
    </div>
  );
}

function FlyerPilates({ f }: { f: (typeof flyers)[0] }) {
  const petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div style={{ aspectRatio: "1/1.41", position: "relative", overflow: "hidden", background: "#0f0428" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, #4c1d95 0%, #6d28d9 45%, #4c1d95 100%)" }} />
      <svg style={{ position: "absolute", top: "4%", left: "50%", transform: "translateX(-50%)", width: "80%", opacity: 0.22 }} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="0.6" fill="none" />
        <circle cx="100" cy="100" r="78" stroke="rgba(196,181,253,0.8)" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="62" stroke="rgba(196,181,253,0.9)" strokeWidth="0.8" fill="none" />
        {petalAngles.map((a) => {
          const rad = (a * Math.PI) / 180;
          const cx2 = 100 + 40 * Math.cos(rad);
          const cy2 = 100 + 40 * Math.sin(rad);
          return <ellipse key={a} cx={cx2} cy={cy2} rx="22" ry="11" transform={`rotate(${a + 90}, ${cx2}, ${cy2})`} stroke="rgba(196,181,253,0.9)" strokeWidth="0.7" fill="rgba(255,255,255,0.03)" />;
        })}
        <circle cx="100" cy="100" r="7" fill="rgba(255,255,255,0.18)" />
      </svg>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #c084fc, transparent)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 15px 8px" }}>
          <div>
            <div style={{ color: "rgba(196,181,253,0.6)", fontSize: "6px", letterSpacing: "2.5px", textTransform: "uppercase" }}>Bien-être & Sport</div>
            <div style={{ color: "white", fontSize: "8.5px", fontWeight: 900, letterSpacing: "1px" }}>{f.brand.toUpperCase()}</div>
          </div>
          <div style={{ padding: "3px 9px", borderRadius: "99px", border: "1px solid rgba(196,181,253,0.5)", color: "rgba(196,181,253,0.9)", fontSize: "7px", fontWeight: 700 }}>{f.tag}</div>
        </div>
        <div style={{ textAlign: "center", padding: "22px 15px 14px" }}>
          {f.title.split("\n").map((line, i) => (
            <div key={i} style={{ color: i === 0 ? "rgba(255,255,255,0.85)" : "#c084fc", fontSize: i === 0 ? "20px" : "28px", fontWeight: 900, lineHeight: 1.05, letterSpacing: i === 0 ? "5px" : "2px", textTransform: "uppercase", textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>{line}</div>
          ))}
          <div style={{ color: "rgba(196,181,253,0.55)", fontSize: "7px", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "8px" }}>{f.subtitle}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 15px 10px" }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(196,181,253,0.3)" }} />
          <span style={{ color: "rgba(196,181,253,0.7)", fontSize: "10px" }}>✦</span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(196,181,253,0.3)" }} />
        </div>
        <div style={{ padding: "0 15px", flex: 1 }}>
          {f.offers.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 9px", marginBottom: "4px", borderRadius: "5px", background: "rgba(255,255,255,0.07)", borderLeft: "2px solid rgba(196,181,253,0.5)" }}>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "8px", fontWeight: 600 }}>◇ {o.label}</span>
              <span style={{ color: "#c084fc", fontSize: "9px", fontWeight: 900 }}>{o.price}</span>
            </div>
          ))}
          <div style={{ marginTop: "8px", padding: "7px 10px", borderRadius: "7px", textAlign: "center", background: "rgba(192,132,252,0.12)", border: "1px solid rgba(192,132,252,0.35)" }}>
            <div style={{ color: "#c084fc", fontWeight: 900, fontSize: "11px" }}>{f.promoLine}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "7px", marginTop: "2px" }}>{f.promoSub}</div>
          </div>
        </div>
        <div style={{ padding: "7px 15px 9px", background: "rgba(0,0,0,0.35)", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "10px" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px", marginBottom: "3px" }}>📍 {f.address}</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px" }}>📞 {f.phone}</div>
        </div>
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #c084fc, transparent)" }} />
      </div>
    </div>
  );
}

function FlyerElectro({ f }: { f: (typeof flyers)[0] }) {
  return (
    <div style={{ aspectRatio: "1/1.41", position: "relative", overflow: "hidden", background: "#030712" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, #1e3a8a 0%, #0c1445 45%, #030712 100%)" }} />
      <svg style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "42%" }} viewBox="0 0 160 130" preserveAspectRatio="none">
        <polygon points="160,0 160,110 60,0" fill="rgba(250,204,21,0.07)" />
        <polygon points="160,0 160,75 110,0" fill="rgba(250,204,21,0.05)" />
        <polyline points="105,8 80,58 97,58 72,122 114,44 90,44 110,8" fill="rgba(250,204,21,0.18)" stroke="rgba(250,204,21,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "3px", background: "linear-gradient(90deg, #facc15, #f59e0b, transparent)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 15px 8px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div>
            <div style={{ color: "rgba(250,204,21,0.6)", fontSize: "6px", letterSpacing: "2px", textTransform: "uppercase" }}>Électroménager & Hi-Fi</div>
            <div style={{ color: "white", fontSize: "9px", fontWeight: 900, letterSpacing: "1px" }}>{f.brand.toUpperCase()}</div>
          </div>
          <div style={{ padding: "3px 8px", borderRadius: "4px", background: "#facc15", color: "#030712", fontSize: "7px", fontWeight: 900 }}>{f.tag.toUpperCase()}</div>
        </div>
        <div style={{ textAlign: "center", padding: "14px 15px 10px" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "6px", letterSpacing: "3.5px", textTransform: "uppercase", marginBottom: "5px" }}>{f.subtitle}</div>
          {f.title.split("\n").map((line, i) => (
            <div key={i} style={{ fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", fontSize: i === 0 ? "26px" : "22px", color: i === 0 ? "white" : "#facc15", letterSpacing: i === 0 ? "4px" : "2px", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>{line}</div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 15px 10px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(250,204,21,0.3)" }} />
          <span style={{ color: "rgba(250,204,21,0.7)", fontSize: "10px" }}>⚡</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(250,204,21,0.3)" }} />
        </div>
        <div style={{ padding: "0 15px", flex: 1 }}>
          {f.offers.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 9px", marginBottom: "4px", borderRadius: "5px", background: "rgba(255,255,255,0.05)", borderLeft: "2px solid rgba(250,204,21,0.5)" }}>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "8px", fontWeight: 600 }}>→ {o.label}</span>
              <span style={{ color: "#facc15", fontSize: "9px", fontWeight: 900 }}>{o.price}</span>
            </div>
          ))}
          <div style={{ marginTop: "8px", padding: "7px 10px", borderRadius: "7px", textAlign: "center", background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.35)" }}>
            <div style={{ color: "#facc15", fontWeight: 900, fontSize: "11px" }}>{f.promoLine}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "7px", marginTop: "2px" }}>{f.promoSub}</div>
          </div>
        </div>
        <div style={{ padding: "7px 15px 9px", background: "rgba(0,0,0,0.45)", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "10px" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px", marginBottom: "3px" }}>📍 {f.address}</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "7px" }}>📞 {f.phone}</div>
        </div>
        <div style={{ height: "3px", background: "linear-gradient(90deg, #facc15, #f59e0b, transparent)" }} />
      </div>
    </div>
  );
}

function FlyerCard({ f, index }: { f: (typeof flyers)[0]; index: number }) {
  const preview =
    index === 0 ? (
      <FlyerRestaurant f={f} />
    ) : index === 1 ? (
      <FlyerPilates f={f} />
    ) : (
      <FlyerElectro f={f} />
    );
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gray-100"
      style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      {preview}
      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-xs font-medium">{f.type}</p>
          <p className="text-gray-400 text-xs mt-0.5">
            {f.prints} · Livré en {f.deliveryTime}
          </p>
        </div>
        <p className="font-black text-base" style={{ color: "#7c3aed" }}>
          {f.price}
        </p>
      </div>
    </div>
  );
}

function PricingCard({
  p,
  accent,
}: {
  p: {
    name: string;
    price: string;
    period: string;
    sub: string;
    features: string[];
    highlighted?: boolean;
  };
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={
        p.highlighted
          ? {
              background: accent,
              border: `1px solid ${accent}`,
              boxShadow: `0 8px 32px ${accent}30`,
            }
          : {
              background: "white",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }
      }
    >
      <div>
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-2 ${p.highlighted ? "text-white/70" : "text-gray-400"}`}
        >
          {p.name}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black leading-none ${p.highlighted ? "text-white" : "text-gray-900"}`}
            style={{ fontSize: "2rem" }}
          >
            {p.price}
          </span>
          <span
            className={`text-sm font-medium ${p.highlighted ? "text-white/70" : "text-gray-400"}`}
          >
            {p.period}
          </span>
        </div>
        <p
          className={`text-xs mt-1.5 ${p.highlighted ? "text-white/70" : "text-gray-400"}`}
        >
          {p.sub}
        </p>
      </div>
      <ul className="flex flex-col gap-2.5 flex-1">
        {p.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.highlighted ? "bg-white/20" : "bg-purple-50"}`}
            >
              <Check
                size={10}
                className={p.highlighted ? "text-white" : "text-purple-600"}
              />
            </div>
            <span
              className={`text-xs leading-relaxed ${p.highlighted ? "text-white/90" : "text-gray-600"}`}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#contact-real"
        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
          p.highlighted
            ? "bg-white text-purple-700 hover:bg-white/90"
            : "border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700"
        }`}
      >
        Demander un devis <ArrowRight size={13} />
      </a>
    </div>
  );
}

// ─── SELECTOR CARDS ───────────────────────────────────────────

type Tab = "sites" | "flyers" | "ads";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectors: {
  id: Tab;
  label: string;
  sub: string;
  icon: React.FC<{ size?: number; style?: React.CSSProperties }>;
  accent: string;
  bg: string;
  count: string;
}[] = [
  {
    id: "sites",
    label: "Sites Web",
    sub: "Vitrines & boutiques e-commerce",
    icon: Monitor,
    accent: "#0284c7",
    bg: "rgba(2,132,199,0.08)",
    count: "3 projets",
  },
  {
    id: "flyers",
    label: "Flyers & Visuels",
    sub: "Print, affiches & réseaux sociaux",
    icon: Palette,
    accent: "#be185d",
    bg: "rgba(190,24,93,0.08)",
    count: "3 créations",
  },
  {
    id: "ads",
    label: "Publicités",
    sub: "Meta Ads & Google Ads",
    icon: TrendingUp,
    accent: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    count: "3 campagnes",
  },
];

// ─── DYNAMIC CARDS (données Supabase) ─────────────────────────

function DynamicAdCard({ r }: { r: Realisation }) {
  const d = r.data as AdsData;
  const accent = d.accent || "#7c3aed";
  const roas = parseFloat(d.roas ?? "0") || 2;
  const bars = Array.from({ length: 12 }, (_, i) => {
    const t = i / 11;
    return Math.min(100, Math.round(18 + t * 64 + (t > 0.6 ? (t - 0.6) * roas * 45 : 0)));
  });
  const maxBar = Math.max(...bars);
  const metrics = [
    d.impressions && { label: "Impressions", value: d.impressions },
    d.clicks && { label: "Clics", value: d.clicks },
    d.ctr && { label: "Taux de clic", value: `${d.ctr}%` },
    d.cpc && { label: "Coût/clic", value: `${d.cpc}€` },
    { label: "ROAS", value: `${d.roas}×` },
    { label: "CA généré", value: `${Number(d.ca).toLocaleString("fr-FR")}€` },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: accent }}>
        <div>
          <p className="text-white font-black text-base leading-tight">{d.client}</p>
          <p className="text-white/70 text-xs mt-0.5">{d.sector}</p>
        </div>
        <span className="text-xs font-bold text-white/90 px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
          {d.platform}
        </span>
      </div>
      {d.image_url && (
        <div className="overflow-hidden" style={{ maxHeight: "160px" }}>
          <img src={d.image_url} alt={d.client} className="w-full object-cover" />
        </div>
      )}
      <div className="px-5 pt-5 pb-3">
        <p className="text-xs text-gray-400 font-medium mb-3">Évolution des performances · {d.duration}</p>
        <div className="flex items-end gap-1 h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${(h / maxBar) * 100}%`, background: i === bars.length - 1 ? accent : `${accent}40` }} />
          ))}
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="grid grid-cols-3 gap-2">
          {metrics.slice(0, 6).map((m) => (
            <div key={m.label} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-gray-400 text-[10px] font-medium leading-tight mb-1">{m.label}</p>
              <p className="text-gray-900 font-bold text-sm">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: `${accent}10`, border: `1px solid ${accent}25` }}>
            <TrendingUp size={13} style={{ color: accent }} />
            <span className="text-xs font-bold" style={{ color: accent }}>ROAS {d.roas}×</span>
          </div>
          <div className="flex-1 flex items-center justify-center px-3 py-2 rounded-xl" style={{ background: `${accent}10`, border: `1px solid ${accent}25` }}>
            <span className="text-xs font-bold" style={{ color: accent }}>+{Number(d.ca).toLocaleString("fr-FR")}€ CA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicSiteCard({ r }: { r: Realisation }) {
  const d = r.data as SiteData;
  const accent = d.accent || "#0284c7";
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
      {/* Browser chrome */}
      <div className="px-3 py-2 flex items-center gap-2" style={{ background: "#f0f0ee", borderBottom: "1px solid #e5e5e3" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /><div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 mx-1 px-2 py-0.5 rounded-md text-[9px] text-gray-400 flex items-center gap-1" style={{ background: "white", border: "1px solid #ddd" }}>
          <span style={{ color: "#16a34a", fontSize: "8px" }}>🔒</span>
          {d.url || `${d.name?.toLowerCase().replace(/\s/g, "")}.fr`}
        </div>
      </div>
      {/* Hero visual */}
      {d.image_url ? (
        <div className="relative overflow-hidden" style={{ minHeight: "140px" }}>
          <img src={d.image_url} alt={d.name} className="w-full object-cover" style={{ maxHeight: "200px" }} />
        </div>
      ) : (
      <div className="flex items-center justify-between px-6 py-8" style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}08)`, minHeight: "140px" }}>
        <div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold mb-3" style={{ background: `${accent}15`, color: accent }}>
            ✓ {d.type}
          </div>
          <p className="font-black text-xl text-gray-900 leading-tight mb-1">{d.name}</p>
          <p className="text-gray-500 text-sm">{d.sector}</p>
        </div>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${accent}15`, border: `1px solid ${accent}20` }}>
          <Monitor size={24} style={{ color: accent }} />
        </div>
      </div>
      )}
      {/* Testimonial */}
      {d.testimonial && (
        <div className="flex items-center gap-2 px-5 py-3" style={{ background: `${accent}06`, borderTop: `1px solid ${accent}12` }}>
          <span className="text-[10px]">⭐⭐⭐⭐⭐</span>
          <span className="text-[11px] text-gray-500 italic truncate">&ldquo;{d.testimonial}&rdquo;</span>
        </div>
      )}
      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-gray-900 font-bold text-sm">{d.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{d.sector} · {d.type}</p>
        </div>
        <div className="text-right">
          <p className="font-black text-sm" style={{ color: accent }}>{Number(d.price).toLocaleString("fr-FR")}€</p>
          <p className="text-gray-400 text-xs">{d.delivery_time}</p>
        </div>
      </div>
    </div>
  );
}

function DynamicFlyerCard({ r }: { r: Realisation }) {
  const d = r.data as FlyerData;
  const c1 = d.color1 || "#7c3aed";
  const c2 = d.color2 || "#a855f7";
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
      {/* Flyer preview */}
      {d.image_url ? (
        <div className="relative overflow-hidden" style={{ minHeight: "200px" }}>
          <img src={d.image_url} alt={d.brand} className="w-full object-cover" style={{ maxHeight: "280px" }} />
        </div>
      ) : (
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(145deg, ${c1}, ${c2})`, minHeight: "200px" }}>
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at 80% 20%, white, transparent 60%)" }} />
        <div className="relative p-5 flex flex-col gap-3">
          {/* Brand + tag */}
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{d.brand}</p>
            {d.tag && <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>{d.tag}</span>}
          </div>
          {/* Offers */}
          {(d.offers ?? []).filter((o) => o.label).map((o, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.1)", borderLeft: "2px solid rgba(255,255,255,0.4)" }}>
              <span className="text-white/80 text-xs font-medium">✦ {o.label}</span>
              <span className="text-white font-black text-sm">{o.price}</span>
            </div>
          ))}
          {/* Promo */}
          {d.promo && (
            <div className="px-3 py-2 rounded-lg text-center" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <p className="text-white font-black text-sm">{d.promo}</p>
            </div>
          )}
          {/* Address */}
          {(d.address || d.phone) && (
            <div className="border-t border-white/15 pt-2 space-y-0.5">
              {d.address && <p className="text-white/50 text-[9px]">📍 {d.address}</p>}
              {d.phone && <p className="text-white/50 text-[9px]">📞 {d.phone}</p>}
            </div>
          )}
        </div>
      </div>
      )}
      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-xs font-medium">{d.type}</p>
          <p className="text-gray-400 text-xs mt-0.5">{d.prints}{d.prints ? " · " : ""}Livré en {d.delivery_time}</p>
        </div>
        <p className="font-black text-base" style={{ color: c1 }}>{Number(d.price).toLocaleString("fr-FR")}€</p>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────

interface CarouselProps {
  adsFromDB?: Realisation[];
  sitesFromDB?: Realisation[];
  flyersFromDB?: Realisation[];
}

export default function RealisationsCarousel({ adsFromDB = [], sitesFromDB = [], flyersFromDB = [] }: CarouselProps) {
  const [active, setActive] = useState<Tab>("sites");
  const [cardIndex, setCardIndex] = useState(0);

  const activeSelector = selectors.find((s) => s.id === active)!;
  const accent = activeSelector.accent;
  const pricing =
    active === "ads"
      ? adsPricing
      : active === "sites"
        ? sitesPricing
        : flyersPricing;

  // Utilise les données DB si disponibles, sinon les données statiques
  const useDB = {
    ads: adsFromDB.length > 0,
    sites: sitesFromDB.length > 0,
    flyers: flyersFromDB.length > 0,
  };

  const cards =
    active === "ads"
      ? (useDB.ads ? adsFromDB : adCampaigns)
      : active === "sites"
      ? (useDB.sites ? sitesFromDB : websites)
      : (useDB.flyers ? flyersFromDB : flyers);

  const handleTabChange = (id: Tab) => {
    setActive(id);
    setCardIndex(0);
  };

  const prev = () => setCardIndex((i) => Math.max(0, i - 1));
  const next = () => setCardIndex((i) => Math.min(cards.length - 1, i + 1));

  return (
    <section
      id="realisations"
      className="relative py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-700 font-semibold mb-5">
            ✦ Portfolio complet
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-4">
            Des exemples concrets,
            <br />
            <span className="gradient-text">des prix honnêtes</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ maxWidth: "38rem" }}>
            Voici ce qu&apos;on réalise pour nos clients, avec les résultats et
            les tarifs transparents. Pas de surprise.
          </p>
        </motion.div>

        {/* Visual selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {selectors.map((s, i) => {
            const isActive = active === s.id;
            return (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => handleTabChange(s.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl p-5 text-left transition-all duration-300 overflow-hidden group"
                style={
                  isActive
                    ? {
                        background: s.accent,
                        boxShadow: `0 8px 32px ${s.accent}35`,
                        border: `1px solid ${s.accent}`,
                      }
                    : {
                        background: s.bg,
                        border: `1px solid ${s.accent}20`,
                        boxShadow: "none",
                      }
                }
              >
                {/* Glow on active */}
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15), transparent 60%)",
                    }}
                  />
                )}

                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : `${s.accent}15`,
                    }}
                  >
                    <s.icon
                      size={18}
                      style={{ color: isActive ? "white" : s.accent }}
                    />
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full mt-0.5"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : `${s.accent}12`,
                      color: isActive ? "white" : s.accent,
                    }}
                  >
                    {s.count}
                  </span>
                </div>

                <div className="relative mt-4">
                  <p
                    className="font-black text-base leading-tight"
                    style={{ color: isActive ? "white" : "#111827" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs mt-1 leading-relaxed"
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,0.7)"
                        : "#6b7280",
                    }}
                  >
                    {s.sub}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white/60"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Carousel content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Desktop: show all cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-5 md:gap-6 mb-16">
              {active === "ads" && (useDB.ads
                ? adsFromDB.map((r) => <DynamicAdCard key={r.id} r={r} />)
                : adCampaigns.map((c, i) => <AdCard key={i} c={c} />)
              )}
              {active === "sites" && (useDB.sites
                ? sitesFromDB.map((r) => <DynamicSiteCard key={r.id} r={r} />)
                : websites.map((w, i) => <WebsiteCard key={i} w={w} />)
              )}
              {active === "flyers" && (useDB.flyers
                ? flyersFromDB.map((r) => <DynamicFlyerCard key={r.id} r={r} />)
                : flyers.map((f, i) => <FlyerCard key={i} f={f} index={i} />)
              )}
            </div>

            {/* Mobile: single card avec navigation */}
            <div className="md:hidden mb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {active === "ads" && (useDB.ads
                    ? <DynamicAdCard r={adsFromDB[cardIndex]} />
                    : <AdCard c={adCampaigns[cardIndex]} />
                  )}
                  {active === "sites" && (useDB.sites
                    ? <DynamicSiteCard r={sitesFromDB[cardIndex]} />
                    : <WebsiteCard w={websites[cardIndex]} />
                  )}
                  {active === "flyers" && (useDB.flyers
                    ? <DynamicFlyerCard r={flyersFromDB[cardIndex]} />
                    : <FlyerCard f={flyers[cardIndex]} index={cardIndex} />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Dots + arrows */}
              <div className="flex items-center justify-center gap-4 mt-5">
                <button
                  onClick={prev}
                  disabled={cardIndex === 0}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-30"
                  style={{ borderColor: `${accent}30`, color: accent }}
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-2">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCardIndex(i)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        background:
                          i === cardIndex ? accent : `${accent}30`,
                        transform:
                          i === cardIndex ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  disabled={cardIndex === cards.length - 1}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-30"
                  style={{ borderColor: `${accent}30`, color: accent }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  Nos tarifs
                </h3>
                <p className="text-gray-500 text-sm">
                  {active === "ads"
                    ? "Budget publicitaire non inclus · Engagement mensuel · Sans frais cachés"
                    : active === "sites"
                      ? "Prix tout inclus · Design + développement + mise en ligne · Hébergement non inclus"
                      : "Création graphique uniquement · Impression non incluse · Fichiers print-ready fournis"}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {pricing.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <PricingCard p={p} accent={accent} />
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-6">
                Vous avez un besoin spécifique ?{" "}
                <a
                  href="#contact-real"
                  className="text-purple-700 font-semibold hover:text-purple-800"
                >
                  Demandez un devis sur-mesure →
                </a>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contact anchor stub */}
      <div id="contact-real" />
    </section>
  );
}
