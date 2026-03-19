"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Audit & Stratégie",
    desc: "On analyse votre marché, vos concurrents et votre positionnement actuel. On construit une stratégie sur-mesure avec des objectifs clairs et mesurables.",
    duration: "Semaine 1",
  },
  {
    num: "02",
    icon: "🎨",
    title: "Création & Production",
    desc: "Notre équipe crée tous les assets nécessaires : visuels, vidéos, copies publicitaires, landing pages. Tout est validé ensemble avant le lancement.",
    duration: "Semaine 2",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Lancement & Diffusion",
    desc: "On déploie les campagnes et le contenu sur tous vos canaux. Monitoring en temps réel, optimisation quotidienne des performances.",
    duration: "Semaine 3",
  },
  {
    num: "04",
    icon: "📊",
    title: "Analyse & Scaling",
    desc: "Rapports hebdomadaires transparents. On identifie ce qui performe, on coupe ce qui ne fonctionne pas, on scale ce qui convertit.",
    duration: "En continu",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="processus" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Notre Méthode
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Un process{" "}
            <span className="gradient-text">éprouvé</span>,
            <br />
            des résultats garantis
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Chaque client bénéficie d&apos;un accompagnement structuré en 4 phases pour maximiser l&apos;impact dès le premier mois.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full origin-left bg-gradient-to-r from-purple-500/20 via-purple-500/60 to-purple-500/20"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Number bubble */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 mx-auto lg:mx-0 rounded-2xl glass-purple flex items-center justify-center text-xl font-black text-purple-300 border border-purple-500/30 group-hover:glow-purple transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 group-hover:glass-purple transition-all duration-300 h-full">
                  {/* Step num */}
                  <span className="text-xs font-bold text-purple-500/60 tracking-widest uppercase mb-2 block">
                    {step.num}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {/* Duration badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-medium">
                    ⏱ {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
