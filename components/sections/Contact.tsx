"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, MessageCircle, Mail, Check } from "lucide-react";

const PHONE = "06 24 00 38 20";
const PHONE_HREF = "tel:+33624003820";
const WA_HREF = "https://wa.me/33624003820";

const INPUT = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/[0.04] transition-all duration-200";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" style={{ pointerEvents: "none" }} />
      <div className="absolute inset-0 section-glow-right" style={{ pointerEvents: "none" }} />

      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ On vous répond sous 24h</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Un message suffit<br /><span className="gradient-text">pour démarrer</span>
          </h2>
          <p className="text-gray-400 text-base" style={{ maxWidth: "32rem" }}>
            Dites-nous ce que vous faites et ce que vous voulez. On s&apos;occupe du reste — gratuitement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-10">

          {/* ── LEFT — CTAs directs ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Phone CTA — principal */}
            <a
              href={PHONE_HREF}
              className="group relative rounded-2xl p-6 md:p-7 overflow-hidden border border-purple-500/25 flex items-center gap-5 transition-all duration-300 hover:border-purple-500/50 hover:scale-[1.01]"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.05) 100%)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(124,58,237,0.12), transparent)" }} />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 8px 24px rgba(124,58,237,0.4)" }}
              >
                <Phone size={22} className="text-white" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Appel direct</p>
                <p className="text-2xl font-black text-white tracking-tight">{PHONE}</p>
                <p className="text-sm text-gray-400 mt-0.5">Lun–Ven · 9h–18h</p>
              </div>
              <ArrowRight size={20} className="text-purple-400 group-hover:translate-x-1 transition-transform relative z-10 flex-shrink-0" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-5 overflow-hidden border border-emerald-500/20 flex items-center gap-4 transition-all duration-300 hover:border-emerald-500/40 hover:scale-[1.01]"
              style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(5,5,8,0.5) 100%)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 6px 20px rgba(37,211,102,0.3)" }}
              >
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-base">WhatsApp</p>
                <p className="text-gray-400 text-sm">Réponse rapide garantie</p>
              </div>
              <span className="text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-full"
                style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                💬 Écrire
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@ombraie.agency"
              className="group rounded-2xl p-5 border border-white/[0.07] flex items-center gap-4 transition-all duration-300 hover:border-white/15"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Mail size={18} className="text-gray-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">contact@ombraie.agency</p>
                <p className="text-gray-500 text-xs mt-0.5">Réponse sous 24h</p>
              </div>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🎁", label: "Audit offert" },
                { icon: "⚡", label: "Réponse 24h" },
                { icon: "🔓", label: "Sans engagement" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-white/[0.06] text-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-xs text-gray-400 font-semibold leading-tight">{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Formulaire simple ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full rounded-3xl p-10 flex flex-col items-center justify-center gap-5 text-center border border-emerald-500/20"
                  style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.06), rgba(5,5,8,0.7))", minHeight: "400px" }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#34d399,#0d9488)", boxShadow: "0 0 40px rgba(52,211,153,0.3)" }}>
                    <Check size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">Message reçu !</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">On vous rappelle sous 24h avec votre audit gratuit.</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full"
                    style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Nous sommes disponibles
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="rounded-3xl p-6 md:p-8 border border-white/[0.07] flex flex-col gap-5"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">Laissez-nous vos coordonnées</h3>
                    <p className="text-gray-500 text-sm">30 secondes · On vous rappelle gratuitement sous 24h.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Votre nom *</label>
                      <input
                        type="text" required placeholder="Jean Dupont"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={INPUT}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email *</label>
                      <input
                        type="email" required placeholder="jean@entreprise.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={INPUT}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Votre activité en 2 mots</label>
                    <textarea
                      rows={4} placeholder="Ex : je vends des produits en ligne et je veux plus de ventes..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={INPUT} style={{ resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative flex items-center justify-center gap-2.5 w-full py-4 text-base font-bold text-white rounded-xl overflow-hidden"
                  >
                    <span className="absolute inset-0 shimmer-btn" />
                    <span className="relative z-10">Je veux qu&apos;on m&apos;appelle gratuitement</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Ou appelez directement : <a href={PHONE_HREF} className="text-purple-400 font-semibold hover:text-purple-300">{PHONE}</a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
