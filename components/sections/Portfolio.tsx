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
    metric: "+340% CA",
    metricSub: "en 3 mois",
    gradient: "from-purple-600/20 via-violet-800/10 to-transparent",
    accent: "#7c3aed",
    emoji: "👗",
    bg: "bg-gradient-to-br from-purple-900/40 to-violet-950/20",
  },
  {
    title: "Cosmétiques Premium",
    category: "Social Media",
    tags: ["Instagram", "TikTok", "Reels"],
    metric: "+18K",
    metricSub: "abonnés en 2 mois",
    gradient: "from-pink-600/20 via-rose-800/10 to-transparent",
    accent: "#ec4899",
    emoji: "💄",
    bg: "bg-gradient-to-br from-pink-900/40 to-rose-950/20",
  },
  {
    title: "Formation en ligne",
    category: "Ads",
    tags: ["Google Ads", "YouTube"],
    metric: "4.2x ROAS",
    metricSub: "CPA réduit de 60%",
    gradient: "from-amber-600/20 via-orange-800/10 to-transparent",
    accent: "#f59e0b",
    emoji: "🎓",
    bg: "bg-gradient-to-br from-amber-900/40 to-orange-950/20",
  },
  {
    title: "Artisan Local",
    category: "Design",
    tags: ["Flyers", "Carte", "Logo"],
    metric: "Identité complète",
    metricSub: "Print & Digital",
    gradient: "from-teal-600/20 via-emerald-800/10 to-transparent",
    accent: "#14b8a6",
    emoji: "🛠️",
    bg: "bg-gradient-to-br from-teal-900/40 to-emerald-950/20",
  },
  {
    title: "Fitness & Coach",
    category: "E-commerce",
    tags: ["WooCommerce", "Meta Ads"],
    metric: "+280% ventes",
    metricSub: "programme en ligne",
    gradient: "from-indigo-600/20 via-blue-800/10 to-transparent",
    accent: "#6366f1",
    emoji: "💪",
    bg: "bg-gradient-to-br from-indigo-900/40 to-blue-950/20",
  },
  {
    title: "Restaurant Premium",
    category: "Social Media",
    tags: ["Instagram", "Facebook", "Stories"],
    metric: "+2400",
    metricSub: "réservations générées",
    gradient: "from-orange-600/20 via-red-800/10 to-transparent",
    accent: "#f97316",
    emoji: "🍽️",
    bg: "bg-gradient-to-br from-orange-900/40 to-red-950/20",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="resultats" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Nos Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "shimmer-btn text-white shadow-lg"
                  : "glass text-gray-400 hover:text-white hover:glass-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative ${project.bg} border border-white/[0.05] rounded-2xl p-7 overflow-hidden hover:border-white/10 transition-all duration-300 cursor-pointer`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.accent}22, transparent 70%)` }}
              />

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Emoji + category */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}33` }}
                  >
                    {project.emoji}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric */}
                <div className="border-t border-white/[0.05] pt-4">
                  <p className="text-2xl font-black" style={{ color: project.accent }}>
                    {project.metric}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{project.metricSub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
