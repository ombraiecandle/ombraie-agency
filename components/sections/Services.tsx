"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Share2, Megaphone, Palette, ShoppingBag } from "lucide-react";

const services = [
  {
    num: "01",
    tag: "WEB",
    cat: "web",
    Icon: Globe,
    title: "Site Vitrine",
    desc: "Design pro, mobile, rapide. Votre meilleur commercial en ligne, disponible 24h/24.",
    price: "dès 499€",
  },
  {
    num: "02",
    tag: "SEO",
    cat: "web",
    Icon: TrendingUp,
    title: "SEO Local",
    desc: "Première position sur Google dans votre ville. Résultats visibles dès le 2e mois.",
    price: "149€/mois",
  },
  {
    num: "03",
    tag: "SOCIAL",
    cat: "social",
    Icon: Share2,
    title: "Réseaux Sociaux",
    desc: "Contenu régulier, visibilité locale, gestion complète. Instagram, Facebook et plus.",
    price: "199€/mois",
  },
  {
    num: "04",
    tag: "ADS",
    cat: "social",
    Icon: Megaphone,
    title: "Publicité Ads",
    desc: "Campagnes Google & Meta rentables, chaque euro investi est suivi et optimisé.",
    price: "199€/mois",
  },
  {
    num: "05",
    tag: "DESIGN",
    cat: "identite",
    Icon: Palette,
    title: "Identité Visuelle",
    desc: "Logo, flyers, cartes de visite. Une image professionnelle qui inspire confiance.",
    price: "dès 70€",
  },
  {
    num: "06",
    tag: "E-COM",
    cat: "web",
    Icon: ShoppingBag,
    title: "Boutique en Ligne",
    desc: "Shopify clé en main. Vendez 24h/24 sans aucune contrainte technique.",
    price: "dès 799€",
  },
];

const filters = [
  { label: "Tous", value: "all" },
  { label: "Web & SEO", value: "web" },
  { label: "Social & Ads", value: "social" },
  { label: "Identité", value: "identite" },
];

export default function Services() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? services : services.filter((s) => s.cat === active);

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 lg:py-40"
      style={{ background: "#0e0e0e" }}
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
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-5"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a855f7",
            }}
          >
            ✦ Nos Services
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] mb-4"
            style={{ color: "#f5f5f5" }}
          >
            Tout ce qu&apos;il faut pour<br />
            <span className="gradient-text">attirer plus de clients</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#666", maxWidth: "38rem" }}>
            Que vous partiez de zéro ou que vous vouliez passer à la vitesse supérieure — on s&apos;occupe de tout.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                active === f.value
                  ? {
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                      color: "#fff",
                      border: "1px solid transparent",
                    }
                  : {
                      background: "transparent",
                      color: "#888",
                      border: "1px solid #2a2a2a",
                    }
              }
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => (
              <motion.div
                key={s.num}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl p-7 cursor-pointer"
                style={{
                  background: "#161616",
                  border: "1px solid #232323",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#232323";
                }}
              >
                {/* Numéro de fond */}
                <span
                  className="absolute top-4 right-5 font-black select-none pointer-events-none"
                  style={{
                    fontSize: "72px",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.04)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-hidden="true"
                >
                  {s.num}
                </span>

                {/* Badge catégorie */}
                <span
                  className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-widest mb-5"
                  style={{
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: "#a855f7",
                    background: "rgba(124,58,237,0.08)",
                  }}
                >
                  {s.tag}
                </span>

                {/* Icône */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#1f1f1f", border: "1px solid #2a2a2a" }}
                >
                  <s.Icon size={19} style={{ color: "#a855f7" }} />
                </div>

                {/* Titre */}
                <h3
                  className="text-[17px] font-bold mb-2.5"
                  style={{ color: "#f0f0f0" }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#666", minHeight: "48px" }}>
                  {s.desc}
                </p>

                {/* Prix + flèche */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[15px] font-bold"
                    style={{ color: "#a855f7" }}
                  >
                    {s.price}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5"
                    style={{ background: "#1f1f1f", border: "1px solid #2a2a2a" }}
                  >
                    <ArrowRight size={14} style={{ color: "#555" }} />
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Discutons de votre projet</span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
