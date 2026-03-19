"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/12 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-5 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center gap-6 md:gap-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium">
            ⚡ Prêt à accélérer votre croissance ?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight">
            Transformons votre<br />
            <span className="gradient-text">présence digitale</span><br />
            ensemble.
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed">
            Audit gratuit de votre situation + stratégie personnalisée offerte. Sans engagement.
          </p>

          <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white rounded-2xl overflow-hidden">
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Demander mon audit gratuit</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500 text-xs md:text-sm">
            {["✓ Réponse sous 24h", "✓ 100% gratuit", "✓ Sans engagement", "✓ Stratégie personnalisée"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
