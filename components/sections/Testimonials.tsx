"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alexandre M.",
    role: "Fondateur — Boutique Mode",
    initials: "A",
    gradient: "from-purple-400 to-violet-600",
    quote: "En 3 mois, Ombraie a transformé notre boutique Shopify en machine à vendre. Les campagnes Meta Ads tournent à 4× de ROAS. Résultats concrets, équipe ultra-réactive.",
    metric: "+340% CA",
    stars: 5,
  },
  {
    name: "Sophie L.",
    role: "CEO — Marque Cosmétiques",
    initials: "S",
    gradient: "from-pink-400 to-rose-600",
    quote: "Leur contenu TikTok et Instagram a explosé notre audience. En 2 mois : +18k abonnés qualifiés et une vraie communauté engagée. Le contenu est premium, ça se voit.",
    metric: "+18K abonnés",
    stars: 5,
  },
  {
    name: "Thomas B.",
    role: "Gérant — Centre de Formation",
    initials: "T",
    gradient: "from-amber-400 to-orange-600",
    quote: "Google Ads géré par Ombraie a divisé mon CPA par 2.5. Ils connaissent les leviers de croissance pour le marché de la formation. Les reportings sont clairs et actionnables.",
    metric: "4.2× ROAS",
    stars: 5,
  },
  {
    name: "Marie C.",
    role: "Artisane — Créatrice",
    initials: "M",
    gradient: "from-teal-400 to-emerald-600",
    quote: "Mon identité visuelle, mes flyers, ma carte de visite — tout repensé de A à Z. Je reçois des compliments sur mon image tous les jours. Un travail soigné et premium.",
    metric: "Identité 100%",
    stars: 5,
  },
  {
    name: "Karim D.",
    role: "E-commerçant — Fitness",
    initials: "K",
    gradient: "from-indigo-400 to-blue-600",
    quote: "Site e-commerce + Meta Ads : combo parfait. Construit en 3 semaines, premières ventes dès la première semaine. Très bon ROI depuis le départ, je recommande.",
    metric: "+280% ventes",
    stars: 5,
  },
  {
    name: "Isabelle R.",
    role: "Propriétaire — Restaurant",
    initials: "I",
    gradient: "from-orange-400 to-red-600",
    quote: "Nos réseaux étaient quasi-morts avant Ombraie. Aujourd'hui on a un flux constant de nouvelles réservations. C'est concret, ça marche vraiment.",
    metric: "+2400 réserv.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="temoignages" className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium mb-8">
            ✦ Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Ils nous font{" "}
            <span className="gradient-text">confiance</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400 text-2xl tracking-tight">★★★★★</span>
            <span className="text-gray-400 text-lg ml-2">4.9 / 5 · 50+ avis vérifiés</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-3xl p-9 hover:glass-purple transition-all duration-400 flex flex-col gap-7"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, si) => (
                  <span key={si} className="text-amber-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 self-start">
                <span className="text-purple-400 text-base">📈</span>
                <span className="text-purple-300 text-sm font-bold">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/[0.06]">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-lg font-black text-white flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-base">{t.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
