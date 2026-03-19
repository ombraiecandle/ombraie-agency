"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      {/* Big centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/12 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 md:gap-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium">
            ⚡ Prêt à passer à la vitesse supérieure ?
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight">
            Transformons votre
            <br />
            <span className="gradient-text">présence digitale</span>
            <br />
            ensemble.
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl font-light">
            Un audit gratuit de votre situation + une stratégie personnalisée offerte.
            Sans engagement.
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-4 px-12 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "0 0 80px rgba(124,58,237,0.6)" }}
            />
            <span className="relative z-10">Demander mon audit gratuit</span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-500 text-sm">
            {[
              "✓ Réponse sous 24h",
              "✓ 100% gratuit",
              "✓ Sans engagement",
              "✓ Stratégie personnalisée",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
