"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clients accompagnés", icon: "🤝", color: "text-purple-400" },
  { value: 2, prefix: "+", suffix: "M€", label: "de CA générés", icon: "💰", color: "text-amber-400" },
  { value: 3.8, suffix: "x", label: "ROAS moyen", icon: "📈", color: "text-emerald-400" },
  { value: 95, suffix: "%", label: "Taux de satisfaction", icon: "⭐", color: "text-violet-400" },
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
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            const display = value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString();
            ref.current.textContent = `${prefix}${display}${suffix}`;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, prefix, suffix, motionValue]);

  return (
    <span ref={ref} className={`text-5xl md:text-6xl font-black ${color}`}>
      {prefix}0{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase font-medium mb-2">En chiffres</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Des résultats qui{" "}
            <span className="gradient-text">parlent d&apos;eux-mêmes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 text-center hover:glass-purple transition-all duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                color={stat.color}
              />
              <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
