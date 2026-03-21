"use client";

import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";

const zones = [
  { name: "Martres-Tolosane", distance: "Base", highlight: true, dept: "31220" },
  { name: "Boussens", distance: "4 km", highlight: false, dept: "31360" },
  { name: "Cazères", distance: "7 km", highlight: false, dept: "31220" },
  { name: "Aurignac", distance: "13 km", highlight: false, dept: "31420" },
  { name: "Saint-Martory", distance: "15 km", highlight: false, dept: "31360" },
  { name: "Salies-du-Salat", distance: "20 km", highlight: false, dept: "31260" },
  { name: "Carbonne", distance: "25 km", highlight: false, dept: "31390" },
  { name: "Rieux-Volvestre", distance: "22 km", highlight: false, dept: "31310" },
  { name: "Boulogne-sur-Gesse", distance: "35 km", highlight: false, dept: "31350" },
  { name: "Muret", distance: "40 km", highlight: false, dept: "31600" },
  { name: "Toulouse", distance: "~65 km", highlight: true, dept: "31000" },
];

const services_locaux = [
  { icon: "📱", label: "Social Media" },
  { icon: "🎯", label: "Meta & Google Ads" },
  { icon: "🌐", label: "Création de Sites" },
  { icon: "🎨", label: "Design Graphique" },
];

export default function ZoneIntervention() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "2rem" }}>
      <div className="absolute inset-0 section-glow-right" style={{ pointerEvents: "none" }} />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">

          {/* Left — texte */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-6">
                <MapPin size={12} className="text-purple-400" />
                Zone d&apos;intervention — Haute-Garonne (31)
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-5">
                Une agence locale,<br />
                <span className="gradient-text">des résultats concrets</span>
              </h2>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-8" style={{ maxWidth: "480px" }}>
                Basés à <strong className="text-white">Martres-Tolosane</strong>, nous accompagnons les entrepreneurs
                et e-commerçants de toute la <strong className="text-white">Haute-Garonne</strong> —
                du village à la métropole. Proximité garantie, résultats mesurables.
              </p>

              {/* Services badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {services_locaux.map((s) => (
                  <span
                    key={s.label}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-gray-300 border border-white/[0.08]"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <span>{s.icon}</span> {s.label}
                  </span>
                ))}
              </div>

              {/* Local promise */}
              <div
                className="rounded-2xl p-5 border border-purple-500/15"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(5,5,8,0.5) 100%)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <Zap size={15} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Pourquoi travailler avec une agence locale ?</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Nous connaissons le tissu économique local — artisans, commerces, PME, e-commerçants.
                      Rendez-vous en présentiel possibles, réactivité maximale, et une vraie compréhension de vos enjeux terrain.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — carte visuelle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.07] p-5"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Communes couvertes</p>
                <span className="text-xs text-purple-300 glass-purple px-2.5 py-1 rounded-full font-semibold">{zones.length} communes</span>
              </div>

              <div className="flex flex-col gap-2">
                {zones.map((z, i) => (
                  <motion.div
                    key={z.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 border transition-all duration-200 group"
                    style={{
                      background: z.highlight ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.025)",
                      borderColor: z.highlight ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: z.highlight ? "#a855f7" : "#374151" }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: z.highlight ? "#e9d5ff" : "#d1d5db" }}
                      >
                        {z.name}
                      </span>
                      <span className="text-xs text-gray-600">{z.dept}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: z.highlight ? "#a855f7" : "#6b7280" }}
                      >
                        {z.distance}
                      </span>
                      {z.highlight && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold text-purple-300"
                          style={{ background: "rgba(124,58,237,0.2)" }}>
                          {z.name === "Martres-Tolosane" ? "📍 Siège" : "🏙️ Métropole"}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <p className="text-xs text-gray-500 text-center">
                  📡 Missions 100% digitales — intervention possible <strong className="text-gray-400">partout en France</strong>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
