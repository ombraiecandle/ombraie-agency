"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "📱", number: "01", title: "Réseaux Sociaux",
    desc: "On gère tout — publications, stories, reels, abonnés. Vous vous concentrez sur votre métier, on fait grandir votre audience.",
    tags: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
    gradient: "from-purple-500 to-violet-700", glow: "rgba(124,58,237,0.2)",
  },
  {
    icon: "🎯", number: "02", title: "Publicité en ligne",
    desc: "On diffuse vos annonces aux bonnes personnes au bon moment, sur Facebook, Instagram et Google — pour attirer des clients prêts à acheter.",
    tags: ["Facebook & Instagram", "Google", "Retargeting"],
    gradient: "from-indigo-500 to-blue-700", glow: "rgba(79,70,229,0.2)",
  },
  {
    icon: "🎬", number: "03", title: "Création de Contenu",
    desc: "Visuels qui accrochent, vidéos qui font rester, textes qui donnent envie d'acheter — tout pensé pour votre clientèle.",
    tags: ["Vidéos & Reels", "Visuels", "Textes"],
    gradient: "from-violet-500 to-fuchsia-700", glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: "🛒", number: "04", title: "Boutique en ligne",
    desc: "Un site e-commerce beau, rapide et facile à utiliser. Vos clients commandent en quelques clics, vous encaissez.",
    tags: ["Shopify", "WooCommerce", "Sur-mesure"],
    gradient: "from-amber-500 to-orange-700", glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: "🌐", number: "05", title: "Site Vitrine",
    desc: "Votre carte de visite sur internet. Un site professionnel qui rassure vos visiteurs et les transforme en clients.",
    tags: ["Design moderne", "Mobile", "Référencement"],
    gradient: "from-teal-500 to-emerald-700", glow: "rgba(20,184,166,0.18)",
  },
  {
    icon: "🎨", number: "06", title: "Identité Visuelle",
    desc: "Logo, couleurs, flyers, cartes de visite — une image cohérente et professionnelle qui marque les esprits.",
    tags: ["Logo", "Flyers", "Cartes de visite"],
    gradient: "from-pink-500 to-rose-700", glow: "rgba(236,72,153,0.18)",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 overflow-hidden section-divider-top">
      <div className="absolute inset-0 section-glow-left" />
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="section-header">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Nos Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Tout ce qu&apos;il faut pour<br /><span className="gradient-text">attirer plus de clients</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Que vous démarriez de zéro ou que vous vouliez passer à la vitesse supérieure — on s&apos;occupe de votre présence en ligne de A à Z.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" style={{ alignItems: "start" }}>
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
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-5 group-hover:text-gray-300 transition-colors">{s.desc}</p>

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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white rounded-xl overflow-hidden"
          >
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Discutons de votre projet</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#processus"
            className="text-sm text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
          >
            Voir notre méthode
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
