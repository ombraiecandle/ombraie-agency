"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", icon: "🔍", title: "Audit & Stratégie", desc: "Analyse de votre marché, concurrents et présence actuelle. Stratégie sur-mesure avec des objectifs clairs et mesurables dès le départ.", detail: "Semaine 1", accent: "#7c3aed" },
  { num: "02", icon: "🎨", title: "Création & Production", desc: "Notre équipe crée tous les assets : visuels, vidéos, copies, landing pages. Tout validé avec vous avant lancement — zéro surprise.", detail: "Semaine 2", accent: "#4f46e5" },
  { num: "03", icon: "🚀", title: "Lancement & Diffusion", desc: "Déploiement sur tous vos canaux. Monitoring en temps réel, optimisation quotidienne pour maximiser chaque euro investi.", detail: "Semaine 3", accent: "#8b5cf6" },
  { num: "04", icon: "📊", title: "Analyse & Scaling", desc: "Rapports hebdomadaires transparents. On identifie ce qui performe, on arrête ce qui ne convertit pas, on scale ce qui marche.", detail: "En continu", accent: "#f59e0b" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="processus" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Notre Méthode</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Un process <span className="gradient-text">éprouvé</span>,<br />des résultats garantis
          </h2>
          <p className="text-gray-400 text-base">Accompagnement structuré en 4 phases pour maximiser l&apos;impact dès le premier mois.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-2xl p-7 md:p-8 border border-white/[0.05] hover:border-white/10 overflow-hidden transition-all duration-400"
            >
              <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10" style={{ background: `${step.accent}12` }} />

              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl border" style={{ background: `${step.accent}15`, borderColor: `${step.accent}25` }}>
                  {step.icon}
                </div>
                <span className="text-5xl font-black opacity-10 font-mono" style={{ color: step.accent }}>{step.num}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 group-hover:text-gray-300 transition-colors">{step.desc}</p>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border" style={{ color: step.accent, borderColor: `${step.accent}30`, background: `${step.accent}10` }}>
                ⏱ {step.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
