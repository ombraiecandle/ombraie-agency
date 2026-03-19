"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const CTAScene = dynamic(() => import("../3d/CTAOrbs"), { ssr: false, loading: () => null });

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Big glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/15 blur-[100px] rounded-full" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-8">
            <Zap size={14} className="text-amber-400" />
            Prêt à passer à la vitesse supérieure ?
          </div>

          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-8">
            Transformons votre
            <br />
            <span className="gradient-text">présence digitale</span>
            <br />
            <span className="text-white">ensemble.</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Un audit gratuit de votre situation actuelle + une stratégie personnalisée offerte.
            Sans engagement, sans bullshit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-btn" />
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ boxShadow: "0 0 60px rgba(124,58,237,0.6)" }}
              />
              <span className="relative z-10">Audit gratuit →</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Réponse sous 24h</span>
              </div>
              <span className="text-gray-600">•</span>
              <span>100% gratuit</span>
              <span className="text-gray-600">•</span>
              <span>Sans engagement</span>
            </div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-16 pt-12 border-t border-white/[0.04]"
          >
            {[
              { icon: "🔒", label: "Données sécurisées" },
              { icon: "📋", label: "Contrat transparent" },
              { icon: "🎯", label: "Résultats mesurables" },
              { icon: "⚡", label: "Onboarding rapide" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-500">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
