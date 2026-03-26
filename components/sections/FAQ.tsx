"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que c'est vraiment gratuit pour commencer ?",
    a: "Oui, complètement. Le premier échange — par téléphone ou message — est 100% gratuit et sans aucun engagement. On vous donne notre avis honnête sur ce qui peut fonctionner pour vous. Si vous voulez aller plus loin, on vous propose une offre. Sinon, aucun problème.",
  },
  {
    q: "Je n'y connais rien au digital. Est-ce que c'est pour moi ?",
    a: "C'est exactement pour vous. Vous n'avez pas besoin de connaître quoi que ce soit — c'est notre travail. On vous explique tout simplement, on prend en charge l'exécution, et vous voyez les résultats. Vous gardez votre énergie pour votre métier.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Pour les publicités, les premières statistiques arrivent dès les premiers jours. Des résultats significatifs se voient généralement entre 4 et 8 semaines. Pour un site web, il est livré en 2 à 4 semaines. On ne vous fait jamais attendre des mois pour voir quelque chose.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Ça dépend de ce dont vous avez besoin. On s'adapte à chaque situation — une petite entreprise locale n'a pas le même budget qu'une boutique en ligne. Le mieux est d'en parler directement : on trouve toujours une solution qui correspond à votre budget.",
  },
  {
    q: "Est-ce que vous vous occupez vraiment de tout ?",
    a: "Oui. Dès que vous nous confiez votre projet, on gère tout : création des contenus, publications, publicités, suivi des résultats, ajustements. Vous recevez un compte-rendu clair chaque mois. Vous n'avez rien à faire si ce n'est approuver et encaisser.",
  },
  {
    q: "Vous travaillez avec des entreprises dans mon secteur ?",
    a: "On travaille avec toutes sortes d'entreprises : boutiques en ligne, restaurants, artisans, coachs, professions libérales, PME locales... Si vous avez des clients à trouver ou des ventes à faire, on peut vous aider.",
  },
  {
    q: "Vous êtes basés où ? Peut-on se rencontrer ?",
    a: "On est basés à Martres-Tolosane, en Haute-Garonne (31). On intervient dans toute la région — Cazères, Aurignac, Carbonne, Muret, Toulouse — et on peut se déplacer pour se rencontrer en vrai. Pour les clients hors région, on travaille très bien à distance.",
  },
  {
    q: "Que se passe-t-il si les résultats ne sont pas là ?",
    a: "On ne vous abandonne pas. Si une approche ne fonctionne pas assez bien, on l'ajuste. On vous dit honnêtement ce qui marche et ce qui ne marche pas — pas de jargon, pas de faux-semblants. Notre réputation, c'est vos résultats.",
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
    <section id="faq" className="relative py-24 md:py-32 lg:py-40 overflow-hidden section-divider-top">

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
            Vous avez des <span className="gradient-text">questions ?</span>
          </h2>
          <p className="text-gray-400 text-base" style={{ maxWidth: "36rem" }}>
            Voici les vraies questions que nous posent nos clients avant de démarrer.
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
          className="mt-10 rounded-2xl p-6 md:p-8 border border-white/[0.06] text-center"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-white font-bold text-base mb-2">Vous avez une autre question ?</p>
          <p className="text-gray-400 text-sm mb-4">Posez-la directement — on vous répond honnêtement, sans jargon.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white relative overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Poser une question →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
