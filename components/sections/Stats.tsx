"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, TrendingUp, BarChart2, Star } from "lucide-react";

const stats = [
  {
    value: 50, prefix: "+", suffix: "",
    label: "Clients accompagnés",
    sub: "E-commerce · B2B · Créateurs",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.35)",
    bg: "from-purple-600/15 via-violet-900/10 to-transparent",
    border: "rgba(168,85,247,0.2)",
    Icon: Users,
  },
  {
    value: 2, prefix: "+", suffix: "M€",
    label: "de CA générés",
    sub: "Pour nos clients en cumulé",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    bg: "from-amber-600/15 via-orange-900/10 to-transparent",
    border: "rgba(245,158,11,0.2)",
    Icon: TrendingUp,
  },
  {
    value: 3.8, prefix: "", suffix: "×",
    label: "ROAS Moyen",
    sub: "Sur nos campagnes Ads",
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    bg: "from-emerald-600/15 via-teal-900/10 to-transparent",
    border: "rgba(52,211,153,0.2)",
    Icon: BarChart2,
  },
  {
    value: 95, prefix: "", suffix: "%",
    label: "Taux de satisfaction",
    sub: "Sur l'ensemble des missions",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.35)",
    bg: "from-indigo-600/15 via-blue-900/10 to-transparent",
    border: "rgba(129,140,248,0.2)",
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
      className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tabular-nums whitespace-nowrap"
      style={{ color }}
    >
      {prefix}{fmt(value, value)}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ En chiffres</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05]">
            Des résultats qui <span className="gradient-text">parlent d&apos;eux-mêmes</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${stat.bg.replace("from-","").split(" ")[0]})`,
                border: `1px solid ${stat.border}`,
              }}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg}`} />

              {/* Glow layer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${stat.glow.replace("0.35","0.15")}, transparent 70%)` }}
              />

              {/* Top glow bar */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 group-hover:opacity-100 opacity-40 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />

              {/* Big background number — decorative */}
              <div
                className="absolute -bottom-4 -right-2 text-[120px] md:text-[150px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                style={{ color: stat.color, opacity: 0.04 }}
              >
                {stat.prefix}{stat.value % 1 !== 0 ? stat.value.toFixed(1) : stat.value}{stat.suffix}
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 md:p-7 lg:p-8 flex flex-col gap-3 md:gap-4">

                {/* Icon */}
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${stat.color}15`, borderColor: `${stat.color}30` }}
                >
                  <stat.Icon size={20} style={{ color: stat.color }} />
                </div>

                {/* Number — with 3D perspective */}
                <div
                  className="relative"
                  style={{
                    perspective: "600px",
                    perspectiveOrigin: "50% 100%",
                  }}
                >
                  <motion.div
                    whileHover={{ rotateX: -8, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Shadow layer for 3D depth */}
                    <span
                      className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-black leading-none tabular-nums blur-[10px] opacity-30 select-none whitespace-nowrap"
                      style={{ color: stat.color, transform: "translateZ(-8px) translateY(4px)" }}
                      aria-hidden
                    >
                      {stat.prefix}{fmt(stat.value, stat.value)}{stat.suffix}
                    </span>
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} color={stat.color} />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="mt-1">
                  <p className="text-white font-bold text-sm md:text-base leading-tight">{stat.label}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{stat.sub}</p>
                </div>

                {/* Animated glow ring */}
                <div
                  className="absolute bottom-3 right-3 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: stat.glow }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
