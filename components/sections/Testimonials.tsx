"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Alexandre M.", role: "Boutique mode en ligne", initials: "A", gradient: "from-purple-500 to-violet-700", quote: "En 3 mois, mes ventes ont explosé. Équipe réactive, résultats visibles dès les premières semaines.", metric: "+340% de CA", metricColor: "#a855f7" },
  { name: "Sophie L.", role: "Marque cosmétiques", initials: "S", gradient: "from-pink-500 to-rose-700", quote: "Mon compte Instagram est passé de fantôme à vivant. +18 000 vrais abonnés en 2 mois. Bluffant.", metric: "+18K abonnés", metricColor: "#f472b6" },
  { name: "Thomas B.", role: "Centre de formation", initials: "T", gradient: "from-amber-500 to-orange-700", quote: "Avant je gaspillais mon budget pub sans résultats. Maintenant chaque euro rapporte. Très efficaces.", metric: "4.2× retour pub", metricColor: "#f59e0b" },
  { name: "Marie C.", role: "Artisane créatrice", initials: "M", gradient: "from-teal-500 to-emerald-700", quote: "Mon image de marque est méconnaissable — dans le bon sens. Je reçois des compliments tous les jours.", metric: "Image 100% repensée", metricColor: "#34d399" },
  { name: "Karim D.", role: "E-commerce fitness", initials: "K", gradient: "from-indigo-500 to-blue-700", quote: "Mon site e-commerce était prêt en 3 semaines. Les premières ventes sont arrivées dès le lancement.", metric: "+280% de ventes", metricColor: "#818cf8" },
  { name: "Isabelle R.", role: "Restauratrice", initials: "I", gradient: "from-orange-500 to-red-700", quote: "Nos réseaux étaient morts. Maintenant on a des réservations qui arrivent directement via Instagram.", metric: "+2 400 réservations", metricColor: "#fb923c" },
];

const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4 cursor-default"
      style={{ minWidth: "320px" }}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
      <span
        className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full self-start"
        style={{ background: `${t.metricColor}18`, border: `1px solid ${t.metricColor}35`, color: t.metricColor }}
      >
        ↑ {t.metric}
      </span>
      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center font-black text-white text-sm flex-shrink-0`}>{t.initials}</div>
        <div>
          <p className="text-white font-bold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-24 md:py-32 lg:py-40 overflow-hidden section-divider-top section-divider-bottom section-alt-bg">
      <div className="absolute inset-0 section-glow-right" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="section-header section-container"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Témoignages</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
          Ils nous font <span className="gradient-text">confiance</span>
        </h2>
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-amber-400 text-lg tracking-tight">★★★★★</span>
          <span className="text-gray-500 text-sm ml-1">4.9 / 5 · 50+ clients satisfaits</span>
        </div>
      </motion.div>

      {/* Marquee row 1 — left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #050508, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #050508, transparent)" }} />

        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
            {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
            {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
