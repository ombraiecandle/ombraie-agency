"use client";

import { useEffect, useRef, useState } from "react";
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
    let i = typing ? displayed.length : displayed.length - 1;

    const timeout = setTimeout(
      () => {
        if (typing) {
          setDisplayed(word.slice(0, i + 1));
          if (i + 1 === word.length) {
            setTimeout(() => setTyping(false), 1800);
          }
        } else {
          setDisplayed(word.slice(0, i));
          if (i === 0) {
            setWordIndex((prev) => (prev + 1) % words.length);
            setTyping(true);
          }
        }
      },
      typing ? 90 : 55
    );

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/10 blur-[120px] pulse-anim" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/8 blur-[100px] float-anim" />
      <div className="absolute top-1/2 right-1/6 w-60 h-60 rounded-full bg-amber-500/6 blur-[80px] float-anim-reverse" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium border border-purple-500/20">
                <Sparkles size={14} className="text-amber-400" />
                Agence Marketing & Digital
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
            >
              <span className="text-white">On propulse les</span>
              <br />
              <span className="gradient-text min-h-[1.2em] block">
                {displayed}
                <span className="inline-block w-0.5 h-[0.9em] bg-purple-400 ml-1 animate-pulse align-middle" />
              </span>
              <span className="text-white">vers le sommet.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Social Media, Paid Ads, Création de Contenu, Sites Web &amp; Design Graphique.
              Une agence full-service pour transformer votre présence digitale en moteur de croissance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 shimmer-btn" />
                <span className="relative z-10">Démarrer maintenant</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 rounded-xl glass hover:bg-white/5 transition-all duration-200 border border-white/6 hover:border-purple-500/30"
              >
                Nos services
                <ArrowRight size={18} className="text-purple-400" />
              </a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-purple-400 to-violet-600",
                  "bg-gradient-to-br from-amber-400 to-orange-600",
                  "bg-gradient-to-br from-blue-400 to-indigo-600",
                  "bg-gradient-to-br from-emerald-400 to-teal-600",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${color} border-2 border-[#050508] flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {["A", "M", "T", "S"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-white font-semibold">+50 clients accompagnés</p>
                <p className="text-xs text-gray-500">E-commerce · B2B · Créateurs</p>
              </div>
            </motion.div>
          </div>

          {/* Right — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <HeroScene />

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-16 -left-4 lg:left-4 glass-purple rounded-2xl p-4 flex items-center gap-3 float-anim"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg">📈</div>
              <div>
                <p className="text-xs text-gray-400">ROAS Moyen</p>
                <p className="text-lg font-black text-white">3.8x</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-24 -right-4 lg:right-4 glass-purple rounded-2xl p-4 flex items-center gap-3 float-anim-reverse"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center text-lg">💰</div>
              <div>
                <p className="text-xs text-gray-400">CA Généré</p>
                <p className="text-lg font-black gradient-text">+2M€</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute top-1/2 -right-8 lg:-right-6 glass rounded-2xl p-3 flex items-center gap-2 border border-emerald-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-semibold text-emerald-400">+285% de ventes</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" />
          <p className="text-xs text-gray-600 tracking-widest uppercase">Découvrir</p>
        </motion.div>
      </div>
    </section>
  );
}
