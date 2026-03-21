"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Où est basée Ombraie Agency ?",
    a: "Nous sommes basés à Martres-Tolosane (31220), en Haute-Garonne. Nous intervenons sur toute la zone — Cazères, Boussens, Aurignac, Salies-du-Salat, Carbonne, Rieux-Volvestre, Muret et Toulouse — et accompagnons aussi des clients partout en France grâce à notre approche 100% digitale.",
  },
  {
    q: "Quel est le délai pour créer un site web ?",
    a: "Un site vitrine est livré en 2 à 3 semaines. Un site e-commerce Shopify ou sur-mesure est livré en 3 à 6 semaines selon la complexité. Nous respectons les délais — c'est un engagement.",
  },
  {
    q: "Quel budget faut-il prévoir pour lancer des publicités ?",
    a: "Pour Meta Ads (Facebook/Instagram), nous recommandons un budget publicitaire minimum de 300–500€/mois pour obtenir des données exploitables. Pour Google Ads, 500–800€/mois minimum. Ces budgets sont séparés de nos honoraires de gestion.",
  },
  {
    q: "Proposez-vous un audit gratuit ?",
    a: "Oui, le premier échange est 100% gratuit et sans engagement. Nous analysons votre présence digitale, votre marché et vos concurrents, puis vous présentons une stratégie personnalisée sous 24h.",
  },
  {
    q: "Comment se passe le suivi des campagnes publicitaires ?",
    a: "Vous recevez un reporting mensuel complet avec tous les indicateurs clés : ROAS, CPA, CTR, conversions, dépenses. Nous organisons un appel de suivi mensuel pour analyser les résultats et ajuster la stratégie.",
  },
  {
    q: "Pouvez-vous gérer les réseaux sociaux de A à Z ?",
    a: "Oui. Nous nous occupons de tout : stratégie éditoriale, création de contenu (visuels, vidéos, captions), publication, gestion de la communauté et analyse des performances. Vous n'avez rien à faire.",
  },
  {
    q: "Travaillez-vous avec des petites entreprises locales ?",
    a: "Absolument. Nous accompagnons aussi bien des artisans, commerçants et PME de la région (Cazères, Aurignac, Carbonne, Muret...) que des e-commerçants ou startups. Nos offres sont adaptées à chaque taille d'entreprise.",
  },
  {
    q: "Puis-je voir des exemples de résultats concrets ?",
    a: "Oui, notre section Réalisations présente des exemples réels de campagnes publicitaires avec les métriques obtenues (ROAS, CA généré, CPA) et des sites web que nous avons créés. Nous pouvons aussi partager des références clients sur demande.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: open ? "rgba(124,58,237,0.05)" : "rgba(255,255,255,0.02)", borderColor: open ? "rgba(124,58,237,0.25)" : undefined }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className="text-white font-semibold text-sm md:text-base leading-snug pr-4">{item.q}</span>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: open ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.08)"}` }}
        >
          {open
            ? <Minus size={14} className="text-purple-300" />
            : <Plus size={14} className="text-gray-400" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-gray-400 text-[15px] leading-relaxed px-5 md:px-6 pb-5 md:pb-6 border-t border-white/[0.05] pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" style={{ pointerEvents: "none" }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-gray-400 text-base" style={{ maxWidth: "36rem" }}>
            Tout ce que vous devez savoir avant de démarrer avec nous.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-2xl p-6 md:p-8 border border-purple-500/15 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(5,5,8,0.6) 100%)" }}
        >
          <p className="text-white font-bold text-base mb-2">Votre question n&apos;est pas listée ?</p>
          <p className="text-gray-400 text-sm mb-4">On répond à toutes vos questions en moins de 24h.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white relative overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Poser une question →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
