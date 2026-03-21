"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Phone } from "lucide-react";

const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />

      {/* 3D scene */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <HeroScene />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(5,5,8,0.55) 0%, transparent 80%)" }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs md:text-sm text-purple-300 font-medium border border-purple-500/20">
            📍 Agence digitale — Haute-Garonne (31)
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-white mb-4">
            Vous méritez<br />
            <span className="gradient-text">plus de clients.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            On s&apos;occupe de votre visibilité en ligne — réseaux sociaux, publicité, site web —
            pendant que vous, vous gérez votre business.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3 items-center">
          <a href="#contact" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden">
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Audit gratuit — sans engagement</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+33624003820" className="inline-flex items-center gap-2 px-6 py-4 text-base font-semibold text-gray-300 rounded-xl glass hover:bg-white/5 transition-all border border-white/[0.08] hover:border-purple-500/30">
            <Phone size={16} className="text-purple-400" />
            06 24 00 38 20
          </a>
        </motion.div>

        {/* Preuve sociale */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.85 }} className="flex flex-col sm:flex-row items-center gap-5">
          <div className="flex -space-x-2.5">
            {["from-purple-400 to-violet-600","from-amber-400 to-orange-500","from-blue-400 to-indigo-600","from-emerald-400 to-teal-600","from-pink-400 to-rose-600"].map((g, i) => (
              <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-[#050508] flex items-center justify-center text-xs font-bold text-white`}>
                {["A","M","T","S","K"][i]}
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-0.5 justify-center sm:justify-start mb-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
            </div>
            <p className="text-white font-semibold text-sm">+50 clients ont déjà augmenté leur chiffre d&apos;affaires avec nous</p>
          </div>
        </motion.div>

        {/* Chiffres clés — en langage humain */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="flex flex-wrap justify-center gap-3">
          {[
            { value: "+2 000 000 €", label: "générés pour nos clients" },
            { value: "50+", label: "entrepreneurs accompagnés" },
            { value: "95%", label: "de clients satisfaits" },
          ].map((m) => (
            <div key={m.label} className="glass-purple rounded-xl px-5 py-3 text-center">
              <p className="text-xl font-black gradient-text">{m.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-5 h-9 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
