"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Gestion complète de vos réseaux sociaux. Stratégie, calendrier éditorial, création de posts, stories, reels — on s'occupe de tout pour faire grandir votre audience.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
    color: "from-purple-600 to-violet-800",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: "🎯",
    title: "Paid Ads — Meta & Google",
    desc: "Campagnes publicitaires à haute performance sur Facebook, Instagram et Google. Ciblage précis, creatives qui convertissent, optimisation continue du ROAS.",
    tags: ["Meta Ads", "Google Ads", "Remarketing", "A/B Testing"],
    color: "from-indigo-600 to-blue-800",
    glow: "rgba(79,70,229,0.3)",
  },
  {
    icon: "🎬",
    title: "Création de Contenu",
    desc: "Visuels, vidéos, copywriting et ugc-style content qui captivent et convertissent. Du scroll-stopping jusqu'à la vente, on crée du contenu qui travaille pour vous.",
    tags: ["Vidéo", "Reels", "Copywriting", "UGC"],
    color: "from-violet-600 to-purple-800",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: "🛒",
    title: "Sites E-commerce",
    desc: "Boutiques en ligne optimisées pour la conversion. Design premium, UX fluide, intégration paiement, et performance technique au top. Shopify, WooCommerce ou sur mesure.",
    tags: ["Shopify", "WooCommerce", "Sur-mesure", "CRO"],
    color: "from-amber-500 to-orange-700",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: "🌐",
    title: "Sites Vitrines",
    desc: "Sites web professionnels qui reflètent votre image de marque et génèrent des leads. Rapides, accessibles, référencés sur Google dès le lancement.",
    tags: ["Next.js", "Responsive", "SEO", "Performance"],
    color: "from-teal-500 to-emerald-700",
    glow: "rgba(20,184,166,0.25)",
  },
  {
    icon: "🎨",
    title: "Design Graphique",
    desc: "Flyers, cartes de visite, identité visuelle, bannières publicitaires — tout ce dont vous avez besoin pour une image de marque cohérente et impactante sur tous les supports.",
    tags: ["Flyers", "Cartes", "Branding", "Print & Digital"],
    color: "from-pink-500 to-rose-700",
    glow: "rgba(236,72,153,0.25)",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Une agence{" "}
            <span className="gradient-text">full-service</span>
            <br />
            pour votre croissance digitale
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            De la stratégie social media à la création de votre boutique en ligne, on prend en charge tous les leviers de votre présence digitale.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-2xl p-7 hover:border-white/10 transition-all duration-500 cursor-default overflow-hidden"
              style={{
                borderColor: "rgba(255,255,255,0.04)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: s.glow }}
              />

              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{ boxShadow: `0 8px 24px ${s.glow}` }}
                >
                  {s.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-5 group-hover:text-gray-300 transition-colors">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-400 bg-white/[0.04] border border-white/[0.06] group-hover:border-purple-500/20 group-hover:text-purple-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
