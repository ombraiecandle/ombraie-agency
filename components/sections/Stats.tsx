"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 50, prefix: "+", suffix: "", label: "Clients accompagnés", sub: "E-commerce · B2B · Créateurs", icon: "🤝", color: "text-purple-400" },
  { value: 2, prefix: "+", suffix: "M€", label: "de CA générés", sub: "pour nos clients en cumulé", icon: "💰", color: "text-amber-400" },
  { value: 3.8, prefix: "", suffix: "×", label: "ROAS Moyen", sub: "sur nos campagnes Ads", icon: "📈", color: "text-emerald-400" },
  { value: 95, prefix: "", suffix: "%", label: "Taux de satisfaction", sub: "sur l'ensemble des missions", icon: "⭐", color: "text-violet-400" },
];

function fmt(value: number, v: number) {
  return value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString();
}

function CountUp({ value, prefix = "", suffix = "", color }: { value: number; prefix?: string; suffix?: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
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
    <span ref={ref} className={`text-5xl md:text-6xl lg:text-7xl font-black ${color} leading-none tabular-nums`}>
      {prefix}{fmt(value, value)}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-8 md:mb-12">
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-semibold mb-3">En chiffres</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
            Des résultats qui <span className="gradient-text">parlent d&apos;eux-mêmes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 md:p-7 text-center group hover:glass-purple transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} color={stat.color} />
              <p className="text-white font-bold text-sm md:text-base mt-3 mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs leading-relaxed hidden md:block">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
