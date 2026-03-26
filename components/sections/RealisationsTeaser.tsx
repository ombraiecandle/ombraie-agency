"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Monitor, Palette } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    Icon: TrendingUp,
    accent: "#7c3aed",
    bg: "rgba(124,58,237,0.05)",
    border: "rgba(124,58,237,0.12)",
    category: "Publicité",
    metric: "ROAS 5.4×",
    metricSub: "+15 700€ CA",
    client: "Coach Fitness Clara",
    detail: "Instagram & Google Ads · 2 mois",
  },
  {
    Icon: Monitor,
    accent: "#0284c7",
    bg: "rgba(2,132,199,0.05)",
    border: "rgba(2,132,199,0.12)",
    category: "Site web",
    metric: "3 semaines",
    metricSub: "Délai de livraison",
    client: "Art & Maison Rénovation",
    detail: "Site vitrine complet · 1 200€",
  },
  {
    Icon: Palette,
    accent: "#be185d",
    bg: "rgba(190,24,93,0.05)",
    border: "rgba(190,24,93,0.12)",
    category: "Design",
    metric: "3 jours",
    metricSub: "Livraison print",
    client: "Électro Confort",
    detail: "Flyer A4 Soldes Hiver · 1 000 ex.",
  },
];

export default function RealisationsTeaser() {
  return (
    <section
      className="relative py-20 md:py-28"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-700 font-semibold mb-5">
            ✦ Nos Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-4">
            Des résultats concrets,
            <br />
            <span className="gradient-text">pas des promesses</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ maxWidth: "36rem" }}>
            Publicités, sites web, créations graphiques — voici ce qu&apos;on
            a accompli pour nos clients locaux.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                background: h.bg,
                border: `1px solid ${h.border}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${h.accent}15` }}
                >
                  <h.Icon size={17} style={{ color: h.accent }} />
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${h.accent}12`, color: h.accent }}
                >
                  {h.category}
                </span>
              </div>

              <div>
                <p className="font-black text-3xl text-gray-900 leading-none">
                  {h.metric}
                </p>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: h.accent }}
                >
                  {h.metricSub}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-900 font-bold text-sm">{h.client}</p>
                <p className="text-gray-400 text-xs mt-0.5">{h.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              boxShadow: "0 8px 32px rgba(124,58,237,0.28)",
            }}
          >
            Voir toutes nos réalisations
            <ArrowRight size={15} />
          </Link>
          <p className="text-gray-400 text-xs">
            Publicités · Sites web · Flyers — avec tarifs transparents
          </p>
        </div>
      </div>
    </section>
  );
}
