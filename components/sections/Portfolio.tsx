"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Tous", "E-commerce", "Social Media", "Ads", "Design"];

const projects = [
  { title: "Mode & Lifestyle", category: "E-commerce", tags: ["Shopify", "Meta Ads"], metric: "+340%", metricLabel: "de chiffre d'affaires", period: "en 3 mois", emoji: "👗", accent: "#a855f7", bg: "from-purple-600/20 to-violet-900/10", border: "border-purple-500/15" },
  { title: "Cosmétiques Premium", category: "Social Media", tags: ["Instagram", "TikTok"], metric: "+18 000", metricLabel: "abonnés qualifiés", period: "en 2 mois", emoji: "💄", accent: "#ec4899", bg: "from-pink-600/20 to-rose-900/10", border: "border-pink-500/15" },
  { title: "Formation en Ligne", category: "Ads", tags: ["Google Ads", "YouTube"], metric: "4.2×", metricLabel: "ROAS · CPA −60%", period: "dès le 2e mois", emoji: "🎓", accent: "#f59e0b", bg: "from-amber-600/20 to-orange-900/10", border: "border-amber-500/15" },
  { title: "Artisan Local", category: "Design", tags: ["Flyers", "Carte", "Logo"], metric: "Identité", metricLabel: "visuelle complète", period: "Print & Digital", emoji: "🛠️", accent: "#14b8a6", bg: "from-teal-600/20 to-emerald-900/10", border: "border-teal-500/15" },
  { title: "Coach Fitness", category: "E-commerce", tags: ["WooCommerce", "Meta Ads"], metric: "+280%", metricLabel: "ventes programme", period: "sur 60 jours", emoji: "💪", accent: "#6366f1", bg: "from-indigo-600/20 to-blue-900/10", border: "border-indigo-500/15" },
  { title: "Restaurant Premium", category: "Social Media", tags: ["Instagram", "Facebook"], metric: "+2 400", metricLabel: "réservations", period: "en 4 mois", emoji: "🍽️", accent: "#f97316", bg: "from-orange-600/20 to-red-900/10", border: "border-orange-500/15" },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="resultats" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center mb-8 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Réalisations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Résultats concrets,<br /><span className="gradient-text">clients satisfaits</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${active === cat ? "shimmer-btn text-white" : "glass text-gray-400 hover:text-white border border-white/[0.06]"}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative bg-gradient-to-br ${p.bg} border ${p.border} rounded-2xl p-6 md:p-7 overflow-hidden hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-2xl -z-10" style={{ background: `${p.accent}12` }} />
              <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border" style={{ background: `${p.accent}15`, borderColor: `${p.accent}25` }}>
                  {p.emoji}
                </div>
                <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="text-lg font-black text-white mb-2">{p.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs text-gray-500 bg-white/[0.04] border border-white/[0.06]">{t}</span>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-3xl font-black leading-none" style={{ color: p.accent }}>{p.metric}</p>
                <p className="text-white font-semibold text-sm mt-1.5">{p.metricLabel}</p>
                <p className="text-gray-500 text-xs mt-0.5">{p.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
