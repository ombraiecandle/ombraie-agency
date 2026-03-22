"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Instagram, Linkedin } from "lucide-react";

const values = [
  { label: "Honnêteté", desc: "On vous dit ce qui marche pour vous — pas ce qui nous arrange." },
  { label: "Proximité", desc: "Un interlocuteur direct, joignable, qui connaît votre dossier." },
  { label: "Résultats", desc: "Notre réputation dépend de vos résultats. On ne lâche pas." },
];

export default function Founder() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-divider-top">
      <div className="absolute inset-0 section-glow-right" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — Texte */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-6">
              ✦ Qui sommes-nous
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-5">
              Pas une grosse agence.<br />
              <span className="gradient-text">Une équipe dédiée.</span>
            </h2>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-6" style={{ maxWidth: "480px" }}>
              Ombraie, c&apos;est une agence à taille humaine basée à <strong className="text-white">Martres-Tolosane</strong>. On travaille avec un nombre limité de clients pour rester disponibles, réactifs, et vraiment investis dans vos résultats.
            </p>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-8" style={{ maxWidth: "480px" }}>
              Vous n&apos;êtes pas un numéro dans un portefeuille de 200 clients. On connaît votre activité, on suit votre évolution, et on s&apos;adapte chaque mois à ce qui marche pour <em>vous</em>.
            </p>

            {/* Valeurs */}
            <div className="flex flex-col gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                  <div>
                    <span className="text-white font-bold text-sm">{v.label} — </span>
                    <span className="text-gray-400 text-sm">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold text-sm transition-colors group"
              >
                Discuter avec nous directement
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right — Carte fondateur */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-3xl p-8 border border-white/[0.07]"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {/* Avatar placeholder */}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 8px 32px rgba(124,58,237,0.4)" }}
                >
                  L
                </div>
                <div>
                  <p className="text-white font-black text-xl">Lucas</p>
                  <p className="text-purple-300 text-sm font-semibold">Fondateur — Ombraie Agency</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={11} className="text-gray-500" />
                    <span className="text-gray-500 text-xs">Martres-Tolosane, 31</span>
                  </div>
                </div>
              </div>

              {/* Citation */}
              <blockquote className="text-gray-300 text-[15px] leading-relaxed mb-6 italic border-l-2 border-purple-500/40 pl-4">
                &ldquo;J&apos;ai créé Ombraie parce que j&apos;en avais marre de voir des petites entreprises se faire facturer une fortune pour des résultats médiocres. On mérite mieux que ça.&rdquo;
              </blockquote>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: "50+", label: "clients" },
                  { value: "3 ans", label: "d'expérience" },
                  { value: "100%", label: "locaux & dispo" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-3 rounded-xl border border-white/[0.06]"
                    style={{ background: "rgba(124,58,237,0.06)" }}
                  >
                    <p className="text-white font-black text-lg">{s.value}</p>
                    <p className="text-gray-500 text-[10px] font-semibold mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Réseaux */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 border border-white/[0.07] hover:border-purple-500/30 hover:text-white transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Instagram size={14} />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 border border-white/[0.07] hover:border-purple-500/30 hover:text-white transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
