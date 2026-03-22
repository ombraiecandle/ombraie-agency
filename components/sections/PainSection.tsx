"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pains = [
  {
    icon: "😮‍💨",
    title: "Vous postez, mais rien ne se passe",
    desc: "Vous êtes présent sur Instagram, Facebook… Mais les clients ne viennent pas. Les likes ne paient pas les factures.",
  },
  {
    icon: "💸",
    title: "Vous avez dépensé en pub sans résultat",
    desc: "Vous avez essayé la publicité en ligne, mais l'argent est parti et les ventes ne sont pas venues. Vous ne savez pas pourquoi.",
  },
  {
    icon: "⏳",
    title: "Vous n'avez pas le temps de tout gérer",
    desc: "Votre métier, c'est votre activité — pas de passer des heures sur les réseaux ou à créer des visuels. Le digital, c'est un travail à part entière.",
  },
  {
    icon: "🤷",
    title: "Vous ne savez pas par où commencer",
    desc: "Site web, réseaux sociaux, publicité, Google… Il y a tellement de choses à faire que vous ne faites rien. Ou vous faites tout à moitié.",
  },
];

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-divider-top">
      <div className="absolute inset-0 section-glow-left" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">
            ✦ On vous reconnaît ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Vous avez déjà pensé<br /><span className="gradient-text">une de ces choses ?</span>
          </h2>
          <p className="text-gray-400 text-base" style={{ maxWidth: "36rem" }}>
            Ce sont les problèmes que nos clients avaient avant de nous appeler. Si vous vous reconnaissez — vous êtes au bon endroit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5" style={{ alignItems: "start" }}>
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 p-6 rounded-2xl border border-white/[0.06] hover:border-purple-500/20 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge vers la solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-14 rounded-2xl p-7 md:p-10 text-center border border-purple-500/20"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(5,5,8,0.7) 100%)" }}
        >
          <p className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
            Bonne nouvelle — c&apos;est exactement <span className="gradient-text">notre travail.</span>
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed" style={{ maxWidth: "40rem", margin: "0 auto 1.5rem" }}>
            On s&apos;occupe de votre visibilité en ligne de A à Z. Vous n&apos;avez pas besoin d&apos;y connaître quoi que ce soit — juste de vouloir plus de clients.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold text-sm transition-colors group"
          >
            Voir comment on peut vous aider
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
