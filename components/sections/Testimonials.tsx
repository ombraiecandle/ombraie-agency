"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexandre M.",
    role: "Fondateur — Boutique Mode",
    avatar: "A",
    color: "from-purple-400 to-violet-600",
    text: "En 3 mois, Ombraie a transformé notre boutique Shopify en machine à vendre. Les campagnes Meta Ads qu'ils gèrent tournent à 4x de ROAS. Résultats concrets, équipe réactive — je recommande les yeux fermés.",
    stars: 5,
    metric: "+340% CA",
  },
  {
    name: "Sophie L.",
    role: "CEO — Marque Cosmétiques",
    avatar: "S",
    color: "from-pink-400 to-rose-600",
    text: "Leur créa de contenu TikTok et Instagram a explosé notre audience. En 2 mois, +18k abonnés qualifiés et une vraie communauté engagée. Le contenu est premium, ça se voit que c'est une agence qui maîtrise son sujet.",
    stars: 5,
    metric: "+18K abonnés",
  },
  {
    name: "Thomas B.",
    role: "Gérant — Centre de Formation",
    avatar: "T",
    color: "from-amber-400 to-orange-600",
    text: "Google Ads et YouTube Ads gérés par Ombraie ont divisé mon CPA par 2.5. Ils connaissent vraiment les leviers de croissance pour le marché de la formation. Les reporting sont clairs et actionnables.",
    stars: 5,
    metric: "4.2x ROAS",
  },
  {
    name: "Marie C.",
    role: "Artisane — Créatrice",
    avatar: "M",
    color: "from-teal-400 to-emerald-600",
    text: "Mon identité visuelle, mes flyers, ma carte de visite — tout a été repensé de A à Z. Je reçois des compliments sur mon image tous les jours. Un travail soigné qui reflète vraiment qui je suis.",
    stars: 5,
    metric: "Identité 100%",
  },
  {
    name: "Karim D.",
    role: "E-commerçant — Fitness",
    avatar: "K",
    color: "from-indigo-400 to-blue-600",
    text: "Site e-commerce + Meta Ads : combo parfait. Ils ont construit le site en moins de 3 semaines et les premières ventes sont venues dès la première semaine d'ads. Très bon ROI depuis le départ.",
    stars: 5,
    metric: "+280% ventes",
  },
  {
    name: "Isabelle R.",
    role: "Propriétaire — Restaurant",
    avatar: "I",
    color: "from-orange-400 to-red-600",
    text: "Nos réseaux sociaux étaient moribonds avant Ombraie. Maintenant on a un flux constant de nouvelles réservations grâce à leur content et à quelques campagnes bien ciblées. C'est concret, ça marche.",
    stars: 5,
    metric: "+2400 réserv.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="temoignages" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-6">
            ✦ Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Ce que disent nos{" "}
            <span className="gradient-text">clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-gray-400 text-sm">4.9/5 — 50+ avis vérifiés</span>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="break-inside-avoid glass rounded-2xl p-6 hover:glass-purple transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-semibold mb-5">
                📈 {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/[0.05] pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
