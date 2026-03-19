"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "📱",
    number: "01",
    title: "Social Media Management",
    desc: "Gestion complète de vos réseaux sociaux. Stratégie, calendrier éditorial, creation de posts, stories et reels — on construit une audience engagée qui convertit.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
    gradient: "from-purple-500 to-violet-700",
    glow: "rgba(124,58,237,0.25)",
    border: "hover:border-purple-500/30",
  },
  {
    icon: "🎯",
    number: "02",
    title: "Paid Ads — Meta & Google",
    desc: "Campagnes publicitaires haute performance sur Facebook, Instagram et Google. Ciblage laser, creatives qui convertissent, optimisation continue du ROAS.",
    tags: ["Meta Ads", "Google Ads", "Remarketing", "A/B Testing"],
    gradient: "from-indigo-500 to-blue-700",
    glow: "rgba(79,70,229,0.25)",
    border: "hover:border-indigo-500/30",
  },
  {
    icon: "🎬",
    number: "03",
    title: "Création de Contenu",
    desc: "Visuels, vidéos, copywriting et ugc-style content qui captivent. Du scroll-stopping jusqu'à la conversion — on crée du contenu qui travaille pour vous 24h/24.",
    tags: ["Vidéo & Reels", "Copywriting", "UGC", "Motion Design"],
    gradient: "from-violet-500 to-fuchsia-700",
    glow: "rgba(139,92,246,0.25)",
    border: "hover:border-violet-500/30",
  },
  {
    icon: "🛒",
    number: "04",
    title: "Sites E-commerce",
    desc: "Boutiques en ligne optimisées pour la conversion. Design premium, UX fluide, intégration paiement et performance technique. Shopify, WooCommerce ou sur-mesure.",
    tags: ["Shopify", "WooCommerce", "Sur-mesure", "CRO"],
    gradient: "from-amber-500 to-orange-700",
    glow: "rgba(245,158,11,0.25)",
    border: "hover:border-amber-500/30",
  },
  {
    icon: "🌐",
    number: "05",
    title: "Sites Vitrines",
    desc: "Sites web professionnels qui reflètent votre image et génèrent des leads qualifiés. Rapides, accessibles, optimisés SEO dès le lancement.",
    tags: ["Next.js", "Responsive", "SEO", "Performance"],
    gradient: "from-teal-500 to-emerald-700",
    glow: "rgba(20,184,166,0.2)",
    border: "hover:border-teal-500/30",
  },
  {
    icon: "🎨",
    number: "06",
    title: "Design Graphique",
    desc: "Flyers, cartes de visite, identité visuelle, bannières publicitaires — tout ce qu'il faut pour une image de marque cohérente et impactante sur tous les supports.",
    tags: ["Flyers", "Cartes Visite", "Branding", "Print & Digital"],
    gradient: "from-pink-500 to-rose-700",
    glow: "rgba(236,72,153,0.2)",
    border: "hover:border-pink-500/30",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Ce qu&apos;on fait pour vous
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Une agence{" "}
            <span className="gradient-text">full-service</span>
            <br />
            pour votre croissance
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            De la stratégie social media à la création de votre boutique en ligne —
            on pilote tous les leviers de votre présence digitale.
          </p>
        </motion.div>

        {/* Grid 2 colonnes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative glass rounded-3xl p-9 border border-white/[0.05] ${s.border} transition-all duration-500 overflow-hidden cursor-default`}
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{ background: s.glow }}
              />
              {/* Top border */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Number */}
              <span className="text-xs font-bold text-purple-600/50 tracking-widest uppercase mb-6 block">
                {s.number}
              </span>

              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-4xl mb-7 group-hover:scale-105 transition-transform duration-300 shadow-xl`}
                style={{ boxShadow: `0 12px 32px ${s.glow}` }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors leading-tight">
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 leading-relaxed text-base mb-7 group-hover:text-gray-300 transition-colors">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-gray-400 bg-white/[0.04] border border-white/[0.07] group-hover:border-purple-500/20 group-hover:text-purple-300 transition-all"
                  >
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
