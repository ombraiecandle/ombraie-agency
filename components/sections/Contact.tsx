"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, MessageCircle, Mail, Check } from "lucide-react";

const PHONE      = "06 24 00 38 20";
const PHONE_HREF = "tel:+33624003820";
const WA_HREF    = "https://wa.me/33624003820";

const INPUT = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white transition-all duration-200";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40" style={{ background: "#F3F0FF", borderTop: "1px solid rgba(124,58,237,0.08)" }}>
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-700 font-semibold mb-5">
            ✦ On vous répond sous 24h
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-4">
            Un message suffit<br /><span className="gradient-text">pour démarrer</span>
          </h2>
          <p className="text-gray-500 text-base" style={{ maxWidth: "32rem" }}>
            Dites-nous ce que vous faites et ce que vous voulez. On s&apos;occupe du reste — gratuitement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-10">

          {/* LEFT — CTAs directs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="group rounded-2xl p-6 md:p-7 border border-purple-200 flex items-center gap-5 transition-all duration-300 hover:border-purple-300 hover:shadow-md"
              style={{ background: "white" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
              >
                <Phone size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">Appel direct</p>
                <p className="text-2xl font-black text-gray-900 tracking-tight">{PHONE}</p>
                <p className="text-sm text-gray-400 mt-0.5">Lun–Ven · 9h–18h</p>
              </div>
              <ArrowRight size={18} className="text-purple-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-5 border border-emerald-200 flex items-center gap-4 transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
              style={{ background: "white" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
              >
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-bold text-base">WhatsApp</p>
                <p className="text-gray-400 text-sm">Réponse rapide garantie</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                💬 Écrire
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@ombraie.agency"
              className="group rounded-2xl p-5 border border-gray-200 flex items-center gap-4 transition-all duration-300 hover:border-purple-200 hover:shadow-md"
              style={{ background: "white" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100">
                <Mail size={18} className="text-gray-500 group-hover:text-purple-600 transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-semibold text-sm">contact@ombraie.agency</p>
                <p className="text-gray-400 text-xs mt-0.5">Réponse sous 24h</p>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </a>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🎁", label: "Audit offert"       },
                { icon: "⚡", label: "Réponse 24h"        },
                { icon: "🔓", label: "Sans engagement"    },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 text-center bg-white">
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-xs text-gray-500 font-semibold leading-tight">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Link to pricing */}
            <a
              href="#portfolio"
              className="group rounded-2xl p-5 border border-purple-100 flex items-center justify-between gap-4 hover:border-purple-200 transition-all duration-200"
              style={{ background: "white" }}
            >
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Voir nos tarifs détaillés</p>
                <p className="text-gray-400 text-xs">Publicités, sites web & flyers · Transparents & sans surprise</p>
              </div>
              <ArrowRight size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>

          {/* RIGHT — Formulaire */}
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
                  className="h-full rounded-3xl p-10 flex flex-col items-center justify-center gap-5 text-center border border-emerald-200"
                  style={{ background: "white", minHeight: "400px", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #34d399, #0d9488)" }}>
                    <Check size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Message reçu !</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">On vous rappelle sous 24h avec votre audit gratuit.</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Nous sommes disponibles
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col gap-5"
                  style={{ background: "white", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
                >
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">Laissez-nous vos coordonnées</h3>
                    <p className="text-gray-400 text-sm">30 secondes · On vous rappelle gratuitement sous 24h.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Votre nom *</label>
                      <input
                        type="text" required placeholder="Jean Dupont"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={INPUT}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                      <input
                        type="email" required placeholder="jean@entreprise.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={INPUT}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Votre activité en quelques mots</label>
                    <textarea
                      rows={4}
                      placeholder="Ex : je vends des produits en ligne et je veux plus de ventes..."
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

                  <p className="text-xs text-gray-400 text-center">
                    Ou appelez directement :{" "}
                    <a href={PHONE_HREF} className="text-purple-600 font-semibold hover:text-purple-700">{PHONE}</a>
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
