"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Linkedin } from "lucide-react";

const values = [
  { label: "Honnêteté", desc: "On vous dit ce qui marche pour vous — pas ce qui nous arrange." },
  { label: "Proximité",  desc: "Un interlocuteur direct, joignable, qui connaît votre dossier par cœur." },
  { label: "Résultats",  desc: "Notre réputation dépend de vos résultats. On ne lâche pas." },
];

export default function Founder() {
  return (
    <section className="relative py-24 md:py-32" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — texte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-700 font-semibold mb-6">
              ✦ Qui sommes-nous
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-5">
              Pas une grosse agence.<br />
              <span className="gradient-text">Une équipe dédiée.</span>
            </h2>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-4" style={{ maxWidth: "440px" }}>
              Ombraie, c&apos;est une agence à taille humaine basée à <strong className="text-gray-900 font-semibold">Martres-Tolosane</strong>, en Haute-Garonne. On travaille avec un nombre limité de clients pour rester disponibles, réactifs, et vraiment investis dans vos résultats.
            </p>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-10" style={{ maxWidth: "440px" }}>
              Vous n&apos;êtes pas un numéro dans un portefeuille de 200 clients. On connaît votre activité, on suit votre évolution, et on s&apos;adapte chaque mois.
            </p>

            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#7c3aed" }} />
                  <div>
                    <span className="text-gray-900 font-semibold text-sm">{v.label} — </span>
                    <span className="text-gray-500 text-sm">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — carte fondateur */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8 border border-gray-100"
              style={{ background: "white", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
            >
              {/* Avatar + identité */}
              <div className="flex items-center gap-4 mb-7 pb-7 border-b border-gray-100">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
                >
                  L
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Lucas</p>
                  <p className="text-purple-600 text-sm">Fondateur — Ombraie Agency</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={10} className="text-gray-400" />
                    <span className="text-gray-400 text-xs">Martres-Tolosane, Haute-Garonne (31)</span>
                  </div>
                </div>
              </div>

              {/* Citation */}
              <blockquote className="text-gray-500 text-[15px] leading-relaxed mb-7 italic">
                &ldquo;J&apos;ai créé Ombraie parce que j&apos;en avais marre de voir des petites entreprises se faire facturer une fortune pour des résultats médiocres. On mérite mieux que ça.&rdquo;
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-7">
                {[
                  { value: "50+",   label: "clients"        },
                  { value: "3 ans", label: "d'expérience"   },
                  { value: "100%",  label: "disponible"     },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-gray-900 font-bold text-base">{s.value}</p>
                    <p className="text-gray-400 text-[10px] font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Réseaux + appel */}
              <div className="flex items-center gap-2 flex-wrap">
                {[{ Icon: Instagram, label: "Instagram" }, { Icon: Linkedin, label: "LinkedIn" }].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-gray-600 border border-gray-200 hover:border-purple-200 hover:text-purple-700 transition-all duration-300"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
                <a
                  href="tel:+33624003820"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-purple-700 border border-purple-200 hover:border-purple-300 transition-all duration-300 ml-auto"
                  style={{ background: "rgba(124,58,237,0.06)" }}
                >
                  <Phone size={13} />
                  Appeler Lucas
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
