"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "📱", number: "01", title: "Social Media Management",
    desc: "Stratégie, calendrier éditorial, posts, stories, reels — on construit une audience engagée qui convertit.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
    gradient: "from-purple-500 to-violet-700", glow: "rgba(124,58,237,0.2)",
  },
  {
    icon: "🎯", number: "02", title: "Paid Ads — Meta & Google",
    desc: "Campagnes haute performance, ciblage précis, creatives qui convertissent, optimisation continue du ROAS.",
    tags: ["Meta Ads", "Google Ads", "Remarketing", "A/B Test"],
    gradient: "from-indigo-500 to-blue-700", glow: "rgba(79,70,229,0.2)",
  },
  {
    icon: "🎬", number: "03", title: "Création de Contenu",
    desc: "Visuels, vidéos, copywriting UGC-style — du scroll-stopping jusqu'à la conversion.",
    tags: ["Vidéo & Reels", "Copywriting", "UGC", "Motion Design"],
    gradient: "from-violet-500 to-fuchsia-700", glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: "🛒", number: "04", title: "Sites E-commerce",
    desc: "Boutiques optimisées pour la conversion. Design premium, UX fluide, paiement intégré.",
    tags: ["Shopify", "WooCommerce", "Sur-mesure", "CRO"],
    gradient: "from-amber-500 to-orange-700", glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: "🌐", number: "05", title: "Sites Vitrines",
    desc: "Sites web professionnels qui génèrent des leads. Rapides, accessibles, référencés dès le lancement.",
    tags: ["Next.js", "Responsive", "SEO", "Performance"],
    gradient: "from-teal-500 to-emerald-700", glow: "rgba(20,184,166,0.18)",
  },
  {
    icon: "🎨", number: "06", title: "Design Graphique",
    desc: "Flyers, cartes de visite, identité visuelle et bannières — une image de marque cohérente partout.",
    tags: ["Flyers", "Cartes Visite", "Branding", "Print & Digital"],
    gradient: "from-pink-500 to-rose-700", glow: "rgba(236,72,153,0.18)",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Nos Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Une agence <span className="gradient-text">full-service</span>
            <br />pour votre croissance
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            De la stratégie social media à la création de votre boutique — on pilote tous les leviers de votre présence digitale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-2xl p-6 md:p-7 border border-white/[0.05] hover:border-white/10 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" style={{ background: s.glow }} />
              <div className={`absolute top-0 left-5 right-5 h-px bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <span className="text-xs font-bold text-purple-600/40 tracking-widest uppercase mb-4 block">{s.number}</span>

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform duration-300`} style={{ boxShadow: `0 8px 24px ${s.glow}` }}>
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-purple-100 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-300 transition-colors">{s.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 bg-white/[0.04] border border-white/[0.06] group-hover:text-purple-400 group-hover:border-purple-500/20 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
