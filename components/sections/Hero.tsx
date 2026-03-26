"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Phone, MapPin } from "lucide-react";

const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#FAFAF9" }}>
      {/* Subtle ambient gradients */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(124,58,237,0.07), transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(168,85,247,0.05), transparent 70%)" }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center pt-28 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-700 border border-purple-200 mb-8"
              style={{ background: "rgba(124,58,237,0.06)" }}>
              <MapPin size={11} />
              Haute-Garonne (31) · Agence digitale locale
            </div>

            <h1
              className="font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Vous méritez<br />
              <span className="gradient-text">plus de clients.</span>
            </h1>

            <p
              className="text-gray-500 leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", maxWidth: "36rem" }}
            >
              On s&apos;occupe de votre visibilité en ligne — réseaux sociaux, publicité, site web — pendant que vous, vous gérez votre business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-12">
              <a href="#contact" className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full overflow-hidden">
                <span className="absolute inset-0 shimmer-btn" />
                <span className="relative z-10">Audit gratuit — sans engagement</span>
                <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+33624003820"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-all duration-300 bg-white"
              >
                <Phone size={14} className="text-purple-600" />
                06 24 00 38 20
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "from-purple-400 to-violet-600",
                  "from-amber-400 to-orange-500",
                  "from-blue-400 to-indigo-600",
                  "from-emerald-400 to-teal-600",
                  "from-pink-400 to-rose-600",
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["A", "M", "T", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                </div>
                <p className="text-gray-500 text-sm">+50 clients nous font confiance</p>
              </div>
            </div>
          </motion.div>

          {/* Right — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ height: "480px" }}
          >
            <HeroScene />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border border-gray-200 flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-purple-500 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
