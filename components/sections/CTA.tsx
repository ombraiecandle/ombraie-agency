"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 md:py-36 lg:py-44 overflow-hidden section-divider-top section-divider-bottom" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div ref={ref} className="relative section-container" style={{ textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center gap-6 md:gap-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium">
            ⚡ Premier échange 100% gratuit
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Et si on parlait de<br />
            <span className="gradient-text">votre business ?</span>
          </h2>

          <p className="text-base md:text-xl text-gray-300 max-w-xl leading-relaxed">
            On vous donne un avis honnête sur ce qui peut marcher pour vous. Pas de jargon, pas de pression — juste une vraie conversation.
          </p>

          <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white rounded-2xl overflow-hidden">
            <span className="absolute inset-0 shimmer-btn" />
            <span className="relative z-10">Je veux un audit gratuit</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 text-sm">
            {["✓ Gratuit et sans engagement", "✓ Réponse sous 24h", "✓ On s'adapte à votre budget"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
