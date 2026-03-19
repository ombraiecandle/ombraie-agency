"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  {
    value: 50,
    prefix: "+",
    suffix: "",
    label: "Clients accompagnés",
    sub: "E-commerce · B2B · Créateurs",
    icon: "🤝",
    color: "text-purple-400",
  },
  {
    value: 2,
    prefix: "+",
    suffix: "M€",
    label: "de CA générés",
    sub: "pour nos clients en cumulé",
    icon: "💰",
    color: "text-amber-400",
  },
  {
    value: 3.8,
    prefix: "",
    suffix: "×",
    label: "ROAS Moyen",
    sub: "sur nos campagnes Ads",
    icon: "📈",
    color: "text-emerald-400",
  },
  {
    value: 95,
    prefix: "",
    suffix: "%",
    label: "Satisfaction client",
    sub: "sur l'ensemble de nos missions",
    icon: "⭐",
    color: "text-violet-400",
  },
];

function CountUp({
  value,
  prefix = "",
  suffix = "",
  color,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);

  // Format helper
  const fmt = (v: number) =>
    value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString();

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const controls = animate(motionValue, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${prefix}${fmt(v)}${suffix}`;
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <span ref={ref} className={`text-6xl md:text-7xl lg:text-8xl font-black ${color} leading-none tabular-nums`}>
      {prefix}{fmt(value)}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />

      {/* Top/bottom dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <p className="text-gray-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">En chiffres</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Des résultats qui{" "}
            <span className="gradient-text">parlent d&apos;eux-mêmes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass rounded-3xl p-8 lg:p-10 text-center group hover:glass-purple transition-all duration-400"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                color={stat.color}
              />
              <p className="text-white font-bold text-lg mt-4 mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
