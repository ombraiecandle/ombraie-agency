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
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <HeroScene />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[140px] pulse-anim pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-[120px] float-anim pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs md:text-sm text-purple-300 font-medium border border-purple-500/20">
            <Sparkles size={13} className="text-amber-400" />
            Agence Marketing &amp; Digital Full-Service
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight text-white">On propulse</h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight gradient-text min-h-[1.1em] break-words">
            {displayed || "\u00A0"}
            <span className="inline-block w-0.5 md:w-1 h-[0.8em] bg-purple-400 ml-1 animate-pulse align-middle rounded-sm" />
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight text-white">vers le sommet.</h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl font-light">
          Social Media · Paid Ads · Création de Contenu · Sites Web &amp; Design Graphique
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 items-center">
          <a href="#contact" className="group relative inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white rounded-xl overflow-hidden">
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Démarrer un projet</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-gray-300 rounded-xl glass hover:bg-white/5 transition-all border border-white/8 hover:border-purple-500/30">
            Voir nos services
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.9 }} className="flex flex-col sm:flex-row items-center gap-5">
          <div className="flex -space-x-2.5">
            {["from-purple-400 to-violet-600","from-amber-400 to-orange-500","from-blue-400 to-indigo-600","from-emerald-400 to-teal-600","from-pink-400 to-rose-600"].map((g, i) => (
              <div key={i} className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${g} border-2 border-[#050508] flex items-center justify-center text-xs font-bold text-white`}>
                {["A","M","T","S","K"][i]}
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
            </div>
            <p className="text-white font-semibold text-sm">+50 clients accompagnés · E-commerce &amp; B2B</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-wrap justify-center gap-3">
          {[
            { label: "ROAS Moyen", value: "3.8×", icon: "📈", color: "text-emerald-400" },
            { label: "CA Généré", value: "+2M€", icon: "💰", color: "gradient-text" },
            { label: "Satisfaction", value: "95%", icon: "⭐", color: "text-amber-400" },
          ].map((m) => (
            <div key={m.label} className="glass-purple rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-lg">{m.icon}</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">{m.label}</p>
                <p className={`text-lg font-black ${m.color}`}>{m.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-9 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
