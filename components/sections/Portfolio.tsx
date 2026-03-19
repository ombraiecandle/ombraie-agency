"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AdResults from "../portfolio/AdResults";
import SiteMockups from "../portfolio/SiteMockups";
import FlyerGallery from "../portfolio/FlyerGallery";

const tabs = [
  { id: "ads", label: "Résultats Publicités", icon: "🎯", count: 3 },
  { id: "sites", label: "Sites Web", icon: "🌐", count: 3 },
  { id: "flyers", label: "Flyers & Design", icon: "🎨", count: 10 },
];

export default function Portfolio() {
  const [active, setActive] = useState("ads");

  return (
    <section id="resultats" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Nos Réalisations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Nos créations,<br /><span className="gradient-text">vos prochains résultats</span>
          </h2>
          <p className="text-gray-400 text-base">Exemples concrets de ce qu&apos;on réalise pour nos clients chaque mois.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
                active === tab.id
                  ? "shimmer-btn text-white border-transparent shadow-lg shadow-purple-500/20"
                  : "glass text-gray-400 hover:text-white border-white/[0.07] hover:border-white/15"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${active === tab.id ? "bg-white/20" : "bg-white/[0.06] text-gray-500"}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {active === "ads" && <AdResults />}
            {active === "sites" && <SiteMockups />}
            {active === "flyers" && <FlyerGallery />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
