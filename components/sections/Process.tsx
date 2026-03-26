"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "On apprend à vous connaître",
    desc: "Premier échange gratuit : vous nous parlez de votre activité, vos clients, vos objectifs. On construit une stratégie faite pour vous — pas un modèle copié-collé.",
    detail: "Semaine 1",
  },
  {
    num: "02",
    title: "On prépare tout, vous validez",
    desc: "Visuels, textes, pages web… On crée tout le contenu dont vous avez besoin. Vous validez avant qu'on lance — vous restez maître de votre image à 100%.",
    detail: "Semaine 2",
  },
  {
    num: "03",
    title: "On lance et vous voyez les résultats",
    desc: "Vos contenus et publicités partent en ligne. Chaque mois, un rapport simple et clair : combien de personnes touchées, combien de ventes. On ajuste ensemble.",
    detail: "En continu",
  },
];

export default function Process() {
  return (
    <section id="processus" className="relative py-24 md:py-32 lg:py-40" style={{ background: "#F3F0FF", borderTop: "1px solid rgba(124,58,237,0.08)" }}>
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-700 font-semibold mb-5">
            ✦ La Méthode Ombraie™
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-4">
            Comment ça <span className="gradient-text">se passe concrètement</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ maxWidth: "38rem" }}>
            De votre premier message jusqu&apos;aux premiers résultats — voici exactement ce qu&apos;on fait pour vous.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-8 py-9 md:py-11 border-b border-purple-100 last:border-0"
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
                <span className="text-2xl font-black font-mono text-purple-600">{step.num}</span>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.25), transparent)", minHeight: "32px" }} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{step.title}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-purple-700 flex-shrink-0" style={{ background: "rgba(124,58,237,0.1)" }}>
                    {step.detail}
                  </span>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl p-6 md:p-8 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{ background: "white", boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}
        >
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">Prêt à démarrer ?</p>
            <p className="text-gray-500 text-sm">Audit gratuit · On vous répond dans les 24h.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+33624003820"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-all bg-white"
            >
              <Phone size={14} />
              06 24 00 38 20
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-btn" />
              <span className="relative z-10">Audit gratuit</span>
              <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
