"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pains = [
  {
    title: "Vous postez, mais rien ne se passe",
    desc: "Vous êtes présent sur Instagram, Facebook… Mais les clients ne viennent pas. Les likes ne paient pas les factures.",
  },
  {
    title: "Vous avez dépensé en pub sans résultat",
    desc: "Vous avez essayé la publicité en ligne, mais l'argent est parti et les ventes ne sont pas venues. Vous ne savez pas pourquoi.",
  },
  {
    title: "Vous n'avez pas le temps de tout gérer",
    desc: "Votre métier, c'est votre activité — pas de passer des heures sur les réseaux. Le digital, c'est un travail à part entière.",
  },
  {
    title: "Vous ne savez pas par où commencer",
    desc: "Site web, réseaux sociaux, publicité, Google… Tellement de choses que vous ne faites rien. Ou tout à moitié.",
  },
];

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-divider-top">

      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-start">

          {/* Left — texte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-6">
              ✦ On vous reconnaît ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-5">
              Vous avez déjà<br />pensé <span className="gradient-text">ça ?</span>
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8" style={{ maxWidth: "28rem" }}>
              Ce sont les problèmes que nos clients avaient avant de nous appeler. Si vous vous reconnaissez — vous êtes au bon endroit.
            </p>
            <div
              className="rounded-2xl p-6 border border-purple-500/15"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(5,5,8,0.4) 100%)" }}
            >
              <p className="text-white font-bold text-base mb-2">
                Bonne nouvelle — c&apos;est exactement notre travail.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Vous n&apos;avez pas besoin d&apos;y connaître quoi que ce soit. Juste de vouloir plus de clients.
              </p>
              <a href="#services" className="inline-flex items-center gap-1.5 text-purple-300 hover:text-white text-sm font-semibold transition-colors group">
                Voir comment on vous aide
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right — liste douleurs */}
          <div className="flex flex-col gap-0">
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 py-6 border-b border-white/[0.05] last:border-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 flex-shrink-0 mt-2.5" />
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
