"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, TrendingUp, BarChart2, Star } from "lucide-react";

const stats = [
  {
    value: 50, prefix: "+", suffix: "",
    label: "Clients qui vendent plus",
    sub: "Boutiques, artisans, entreprises locales",
    color: "#a855f7",
    Icon: Users,
  },
  {
    value: 2, prefix: "+", suffix: "M€",
    label: "de revenus générés",
    sub: "Pour l'ensemble de nos clients",
    color: "#f59e0b",
    Icon: TrendingUp,
  },
  {
    value: 3.8, prefix: "", suffix: "×",
    label: "€ récupérés par € investi",
    sub: "En publicité en ligne (moyenne)",
    color: "#34d399",
    Icon: BarChart2,
  },
  {
    value: 95, prefix: "", suffix: "%",
    label: "de clients satisfaits",
    sub: "Ils recommandent nos services",
    color: "#818cf8",
    Icon: Star,
  },
];

function fmt(value: number, v: number) {
  return value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString();
}

function CountUp({ value, prefix = "", suffix = "", color }: { value: number; prefix?: string; suffix?: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(value);

  useEffect(() => {
    if (!isInView || triggered.current) return;
    triggered.current = true;
    motionValue.set(0);
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${prefix}${fmt(value, v)}${suffix}`;
      },
    });
    return controls.stop;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <span
      ref={ref}
      className="font-black leading-none tabular-nums"
      style={{ color, fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
    >
      {prefix}{fmt(value, value)}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ En chiffres</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05]">
            Ce que nos clients <span className="gradient-text">ont obtenu</span>
          </h2>
        </motion.div>

        {/* Stats — 4 colonnes épurées */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", overflow: "hidden" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 p-7 md:p-10"
              style={{ background: "#050508" }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1" style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}20` }}>
                <stat.Icon size={18} style={{ color: stat.color }} />
              </div>

              {/* Nombre */}
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} color={stat.color} />

              {/* Label */}
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{stat.label}</p>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
