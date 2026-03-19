"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Tous", "E-commerce", "Social Media", "Ads", "Design"];

const projects = [
  {
    title: "Mode & Lifestyle",
    category: "E-commerce",
    tags: ["Shopify", "Meta Ads"],
    metric: "+340%",
    metricLabel: "de chiffre d'affaires",
    period: "en 3 mois",
    emoji: "👗",
    gradient: "from-purple-600/30 to-violet-900/20",
    accentColor: "#a855f7",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Cosmétiques Premium",
    category: "Social Media",
    tags: ["Instagram", "TikTok", "Reels"],
    metric: "+18 000",
    metricLabel: "abonnés qualifiés",
    period: "en 2 mois",
    emoji: "💄",
    gradient: "from-pink-600/30 to-rose-900/20",
    accentColor: "#ec4899",
    borderColor: "border-pink-500/20",
  },
  {
    title: "Formation en Ligne",
    category: "Ads",
    tags: ["Google Ads", "YouTube Ads"],
    metric: "4.2×",
    metricLabel: "ROAS · CPA −60%",
    period: "dès le 2e mois",
    emoji: "🎓",
    gradient: "from-amber-600/30 to-orange-900/20",
    accentColor: "#f59e0b",
    borderColor: "border-amber-500/20",
  },
  {
    title: "Artisan Local",
    category: "Design",
    tags: ["Flyers", "Carte Visite", "Logo"],
    metric: "100%",
    metricLabel: "Identité visuelle",
    period: "Print & Digital",
    emoji: "🛠️",
    gradient: "from-teal-600/30 to-emerald-900/20",
    accentColor: "#14b8a6",
    borderColor: "border-teal-500/20",
  },
  {
    title: "Coach Fitness",
    category: "E-commerce",
    tags: ["WooCommerce", "Meta Ads"],
    metric: "+280%",
    metricLabel: "ventes programme en ligne",
    period: "sur 60 jours",
    emoji: "💪",
    gradient: "from-indigo-600/30 to-blue-900/20",
    accentColor: "#6366f1",
    borderColor: "border-indigo-500/20",
  },
  {
    title: "Restaurant Premium",
    category: "Social Media",
    tags: ["Instagram", "Facebook"],
    metric: "+2 400",
    metricLabel: "réservations générées",
    period: "en 4 mois",
    emoji: "🍽️",
    gradient: "from-orange-600/30 to-red-900/20",
    accentColor: "#f97316",
    borderColor: "border-orange-500/20",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="resultats" className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium mb-8">
            ✦ Nos Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Résultats concrets,
            <br />
            <span className="gradient-text">clients satisfaits</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14 lg:mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "shimmer-btn text-white shadow-lg shadow-purple-500/20"
                  : "glass text-gray-400 hover:text-white hover:glass-purple border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid — 2 colonnes max */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${project.gradient} border ${project.borderColor} rounded-3xl p-9 overflow-hidden hover:scale-[1.02] transition-all duration-400 cursor-pointer`}
            >
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
                style={{ background: `${project.accentColor}15` }}
              />
              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border"
                  style={{
                    background: `${project.accentColor}18`,
                    borderColor: `${project.accentColor}30`,
                  }}
                >
                  {project.emoji}
                </div>
                <ArrowUpRight
                  size={22}
                  className="text-gray-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white mb-3 leading-tight">{project.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-gray-400 bg-white/[0.05] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metric */}
              <div className="border-t border-white/[0.06] pt-6">
                <p
                  className="text-4xl font-black leading-none mb-1"
                  style={{ color: project.accentColor }}
                >
                  {project.metric}
                </p>
                <p className="text-white font-semibold text-base mt-2">{project.metricLabel}</p>
                <p className="text-gray-500 text-sm mt-1">{project.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
