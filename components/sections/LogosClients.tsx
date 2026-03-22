"use client";

import { motion } from "framer-motion";

// Secteurs clients représentés sous forme de "logos texte" stylisés
const logos = [
  { name: "Maison Léa", sector: "Mode & Prêt-à-porter" },
  { name: "FitCore Pro", sector: "Sport & Bien-être" },
  { name: "Saveurs du Sud", sector: "Restauration" },
  { name: "FormaPro", sector: "Formation en ligne" },
  { name: "Atelier Durand", sector: "Artisanat" },
  { name: "ClimatExpert", sector: "Services B2B" },
  { name: "BeautyLab", sector: "Cosmétiques" },
  { name: "ImmoBâtir", sector: "Immobilier" },
  { name: "TechStart", sector: "SaaS & Tech" },
  { name: "Le Comptoir Bio", sector: "Épicerie fine" },
  { name: "Studio Rêve", sector: "Photographie" },
  { name: "CabinetDR", sector: "Santé & Para-médical" },
];

// Duplicate pour le carousel infini
const row1 = [...logos.slice(0, 6), ...logos.slice(0, 6)];
const row2 = [...logos.slice(6, 12), ...logos.slice(6, 12)];

export default function LogosClients() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="section-container mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold text-gray-600 uppercase tracking-[0.25em]"
        >
          Ils nous ont fait confiance
        </motion.p>
      </div>

      {/* Row 1 — défile à gauche */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #050508, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #050508, transparent)" }} />
        <div className="flex gap-6" style={{ width: "max-content", animation: "marquee-left 28s linear infinite" }}>
          {row1.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-6 py-3 rounded-xl border border-white/[0.06] select-none"
              style={{ background: "rgba(255,255,255,0.025)", minWidth: "160px" }}
            >
              <span className="text-white font-bold text-sm leading-tight">{c.name}</span>
              <span className="text-gray-600 text-[10px] mt-0.5 font-medium">{c.sector}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — défile à droite */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #050508, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #050508, transparent)" }} />
        <div className="flex gap-6" style={{ width: "max-content", animation: "marquee-right 22s linear infinite" }}>
          {row2.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-6 py-3 rounded-xl border border-white/[0.06] select-none"
              style={{ background: "rgba(255,255,255,0.025)", minWidth: "160px" }}
            >
              <span className="text-white font-bold text-sm leading-tight">{c.name}</span>
              <span className="text-gray-600 text-[10px] mt-0.5 font-medium">{c.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
