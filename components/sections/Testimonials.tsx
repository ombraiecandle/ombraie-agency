"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { name: "Alexandre M.", role: "Fondateur — Boutique Mode", initials: "A", gradient: "from-purple-500 to-violet-700", quote: "En 3 mois, Ombraie a transformé notre boutique en machine à vendre. Campagnes Meta Ads à 4× ROAS. Équipe réactive, résultats concrets.", metric: "+340% CA", metricColor: "text-purple-400" },
  { name: "Sophie L.", role: "CEO — Marque Cosmétiques", initials: "S", gradient: "from-pink-500 to-rose-700", quote: "Leur contenu TikTok et Instagram a explosé notre audience. +18k abonnés qualifiés en 2 mois. Le contenu est premium, ça se voit.", metric: "+18K abonnés", metricColor: "text-pink-400" },
  { name: "Thomas B.", role: "Gérant — Centre de Formation", initials: "T", gradient: "from-amber-500 to-orange-700", quote: "Google Ads géré par Ombraie a divisé mon CPA par 2.5. Les reportings sont clairs, actionnables. Vraiment efficaces.", metric: "4.2× ROAS", metricColor: "text-amber-400" },
  { name: "Marie C.", role: "Artisane — Créatrice", initials: "M", gradient: "from-teal-500 to-emerald-700", quote: "Mon identité visuelle, flyers, carte de visite — tout repensé de A à Z. Je reçois des compliments sur mon image tous les jours.", metric: "Identité 100%", metricColor: "text-teal-400" },
  { name: "Karim D.", role: "E-commerçant — Fitness", initials: "K", gradient: "from-indigo-500 to-blue-700", quote: "Site e-commerce construit en 3 semaines, premières ventes dès la première semaine d'ads. Très bon ROI depuis le départ.", metric: "+280% ventes", metricColor: "text-indigo-400" },
  { name: "Isabelle R.", role: "Propriétaire — Restaurant", initials: "I", gradient: "from-orange-500 to-red-700", quote: "Nos réseaux étaient morts avant Ombraie. Maintenant on a un flux constant de réservations. C'est concret, ça marche.", metric: "+2400 réserv.", metricColor: "text-orange-400" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="temoignages" className="relative py-16 md:py-24 lg:py-32 overflow-hidden section-divider-top section-divider-bottom section-alt-bg">
      <div className="absolute inset-0 section-glow-right" />

      <div ref={ref} className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="section-header">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Témoignages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-amber-400 text-lg tracking-tight">★★★★★</span>
            <span className="text-gray-500 text-sm ml-1">4.9 / 5 · 50+ avis vérifiés</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" style={{ alignItems: "start" }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: i * 0.09 }}
              className="glass rounded-2xl p-6 md:p-7 hover:glass-purple transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => <span key={si} className="text-amber-400 text-base">★</span>)}
              </div>
              <p className="text-gray-300 text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <span className={`inline-flex items-center text-sm font-bold px-3 py-1.5 rounded-full border ${t.metricColor}`}
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                ↑ {t.metric}
              </span>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center font-black text-white text-sm flex-shrink-0`}>{t.initials}</div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
