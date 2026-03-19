"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const words = ["E-commerce", "Entreprises", "Marques", "Créateurs"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (typing) {
          const next = word.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next === word) setTimeout(() => setTyping(false), 2000);
        } else {
          const next = displayed.slice(0, -1);
          setDisplayed(next);
          if (next === "") {
            setWordIndex((p) => (p + 1) % words.length);
            setTyping(true);
          }
        }
      },
      typing ? 85 : 50
    );
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />

      {/* 3D scene as background */}
      <div className="absolute inset-0 opacity-60">
        <HeroScene />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[140px] pulse-anim pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-[120px] float-anim pointer-events-none" />

      {/* Content — centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 md:pt-32 pb-14 md:pb-24 flex flex-col items-center text-center gap-5 md:gap-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium border border-purple-500/20">
            <Sparkles size={15} className="text-amber-400" />
            Agence Marketing &amp; Digital Full-Service
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight text-white">
            On propulse
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight gradient-text min-h-[1.1em] break-words">
            {displayed || "\u00A0"}
            <span className="inline-block w-0.5 md:w-1 h-[0.8em] bg-purple-400 ml-1.5 animate-pulse align-middle rounded-sm" />
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight text-white">
            vers le sommet.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light"
        >
          Social Media · Paid Ads · Création de Contenu · Sites Web &amp; Design Graphique
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-9 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Démarrer un projet</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-3 px-9 py-5 text-lg font-semibold text-gray-300 rounded-2xl glass hover:bg-white/5 transition-all duration-200 border border-white/8 hover:border-purple-500/30"
          >
            Voir nos services
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-6 pt-4"
        >
          {/* Avatars */}
          <div className="flex -space-x-3">
            {[
              "from-purple-400 to-violet-600",
              "from-amber-400 to-orange-500",
              "from-blue-400 to-indigo-600",
              "from-emerald-400 to-teal-600",
              "from-pink-400 to-rose-600",
            ].map((g, i) => (
              <div
                key={i}
                className={`w-11 h-11 rounded-full bg-gradient-to-br ${g} border-2 border-[#050508] flex items-center justify-center text-sm font-bold text-white shadow-lg`}
              >
                {["A", "M", "T", "S", "K"][i]}
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-base">★</span>
              ))}
            </div>
            <p className="text-white font-semibold text-base">+50 clients accompagnés</p>
            <p className="text-gray-500 text-sm mt-0.5">E-commerce · B2B · Créateurs de contenu</p>
          </div>
        </motion.div>

        {/* Metrics floating cards — horizontal row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-3 mt-2 md:mt-4"
        >
          {[
            { label: "ROAS Moyen", value: "3.8×", icon: "📈", color: "text-emerald-400" },
            { label: "CA Généré", value: "+2M€", icon: "💰", color: "gradient-text" },
            { label: "Satisfaction", value: "95%", icon: "⭐", color: "text-amber-400" },
          ].map((m) => (
            <div key={m.label} className="glass-purple rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 float-anim">
              <span className="text-xl md:text-2xl">{m.icon}</span>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{m.label}</p>
                <p className={`text-xl md:text-2xl font-black ${m.color}`}>{m.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
