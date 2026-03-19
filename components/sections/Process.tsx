"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Audit & Stratégie",
    desc: "On analyse votre marché, vos concurrents et votre présence actuelle. On construit une stratégie sur-mesure avec des objectifs clairs et mesurables dès le départ.",
    detail: "Semaine 1",
    color: "from-purple-500/20 to-violet-600/10",
    border: "border-purple-500/15",
    accent: "#7c3aed",
  },
  {
    num: "02",
    icon: "🎨",
    title: "Création & Production",
    desc: "Notre équipe crée tous les assets : visuels, vidéos, copies, landing pages. Tout est validé avec vous avant le lancement — zéro surprise.",
    detail: "Semaine 2",
    color: "from-indigo-500/20 to-blue-600/10",
    border: "border-indigo-500/15",
    accent: "#4f46e5",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Lancement & Diffusion",
    desc: "On déploie les campagnes sur tous vos canaux. Monitoring en temps réel, optimisation quotidienne des performances pour maximiser chaque euro dépensé.",
    detail: "Semaine 3",
    color: "from-violet-500/20 to-fuchsia-600/10",
    border: "border-violet-500/15",
    accent: "#8b5cf6",
  },
  {
    num: "04",
    icon: "📊",
    title: "Analyse & Scaling",
    desc: "Rapports hebdomadaires transparents. On identifie ce qui performe, on arrête ce qui ne fonctionne pas, on scale ce qui convertit.",
    detail: "En continu",
    color: "from-amber-500/20 to-orange-600/10",
    border: "border-amber-500/15",
    accent: "#f59e0b",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="processus" className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Notre Méthode
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Un process{" "}
            <span className="gradient-text">éprouvé</span>,
            <br />
            des résultats garantis
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Chaque client suit un accompagnement structuré en 4 phases
            pour maximiser l&apos;impact dès le premier mois.
          </p>
        </motion.div>

        {/* Steps — 2 colonnes sur desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl p-10 border ${step.border} bg-gradient-to-br ${step.color} hover:scale-[1.02] transition-all duration-400 overflow-hidden`}
            >
              {/* Glow on hover */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
                style={{ background: `${step.accent}18` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border"
                  style={{
                    background: `${step.accent}15`,
                    borderColor: `${step.accent}30`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step number */}
                <span
                  className="text-6xl font-black opacity-15 font-mono"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                {step.desc}
              </p>

              {/* Duration badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  color: step.accent,
                  borderColor: `${step.accent}30`,
                  background: `${step.accent}10`,
                }}
              >
                ⏱ {step.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
