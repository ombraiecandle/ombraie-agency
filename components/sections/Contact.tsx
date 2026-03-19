"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail, Instagram, Linkedin, Facebook, CheckCircle2, Clock, Shield, Zap } from "lucide-react";

const services = [
  "Social Media Management",
  "Paid Ads — Meta & Google",
  "Création de Contenu",
  "Site E-commerce",
  "Site Vitrine",
  "Design Graphique",
  "Pack Complet",
];

const budgets = ["< 500€ / mois", "500 – 1 500€ / mois", "1 500 – 3 000€ / mois", "+ 3 000€ / mois"];

const socials = [
  { Icon: Instagram, label: "Instagram", handle: "@ombraie.agency", href: "#", color: "from-pink-500 to-rose-600" },
  { Icon: Facebook, label: "Facebook", handle: "Ombraie Agency", href: "#", color: "from-blue-500 to-indigo-600" },
  { Icon: Linkedin, label: "LinkedIn", handle: "Ombraie Agency", href: "#", color: "from-sky-500 to-blue-600" },
];

const guarantees = [
  { icon: <Clock size={16} />, text: "Réponse sous 24h" },
  { icon: <Shield size={16} />, text: "Sans engagement" },
  { icon: <Zap size={16} />, text: "Audit 100% gratuit" },
  { icon: <CheckCircle2 size={16} />, text: "Stratégie offerte" },
];

type Step = 1 | 2;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [step, setStep] = useState<Step>(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-xs text-purple-300 font-medium mb-5">✦ Démarrons ensemble</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
            Parlons de <span className="gradient-text">votre projet</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">Premier échange offert — audit de votre situation + stratégie personnalisée sous 24h.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10 xl:gap-14">

          {/* ─── Left panel ─── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-5">

            {/* Email card */}
            <a href="mailto:contact@ombraie.agency" className="group relative glass rounded-2xl p-5 md:p-6 border border-white/[0.05] hover:border-purple-500/25 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center flex-shrink-0 glow-purple">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Email direct</p>
                  <p className="text-white font-bold text-base group-hover:text-purple-300 transition-colors">contact@ombraie.agency</p>
                </div>
                <ArrowRight size={16} className="text-gray-600 group-hover:text-purple-400 ml-auto transition-colors group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* Social cards */}
            <div className="grid grid-cols-3 gap-3">
              {socials.map(({ Icon, label, handle, href, color }) => (
                <a key={label} href={href} className="group glass rounded-xl p-4 border border-white/[0.05] hover:border-white/10 flex flex-col items-center gap-2 text-center transition-all duration-200 hover:scale-105">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-gray-600 text-[10px] mt-0.5 hidden md:block">{handle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Guarantees */}
            <div className="glass rounded-2xl p-5 md:p-6 border border-white/[0.05]">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Nos engagements</p>
              <div className="grid grid-cols-2 gap-3">
                {guarantees.map((g) => (
                  <div key={g.text} className="flex items-center gap-2.5">
                    <span className="text-purple-400 flex-shrink-0">{g.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{g.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof card */}
            <div className="relative glass-purple rounded-2xl p-5 md:p-6 border border-purple-500/15 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="flex -space-x-2 flex-shrink-0">
                  {["from-purple-400 to-violet-600","from-amber-400 to-orange-500","from-pink-400 to-rose-600"].map((g, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-[#050508] flex items-center justify-center text-xs font-black text-white`}>
                      {["A","S","K"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                  </div>
                  <p className="text-white text-sm font-semibold">+50 clients nous font confiance</p>
                  <p className="text-gray-500 text-xs mt-0.5">E-commerce · B2B · Créateurs de contenu</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ─── Right panel — Form ─── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>

            <AnimatePresence mode="wait">
              {sent ? (
                /* ── Success state ── */
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-purple rounded-3xl p-10 md:p-14 text-center flex flex-col items-center gap-6 border border-purple-500/15 h-full justify-center min-h-[400px]">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-4xl glow-purple mx-auto">✓</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Message envoyé !</h3>
                    <p className="text-gray-400 text-base leading-relaxed max-w-sm mx-auto">On revient vers vous sous 24h avec votre audit gratuit et une stratégie personnalisée. Vérifiez vos emails !</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Nous sommes disponibles
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass rounded-3xl border border-white/[0.06] overflow-hidden">

                  {/* Progress bar */}
                  <div className="flex border-b border-white/[0.06]">
                    {[1, 2].map((s) => (
                      <button key={s} onClick={() => s === 1 && setStep(1)}
                        className={`flex-1 py-4 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${step === s ? "text-purple-300 bg-purple-500/8" : s < step ? "text-emerald-400" : "text-gray-600"}`}
                      >
                        <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black border ${step === s ? "border-purple-500 bg-purple-500/20 text-purple-300" : s < step ? "border-emerald-500 bg-emerald-500/20 text-emerald-400" : "border-white/10 text-gray-600"}`}>
                          {s < step ? "✓" : s}
                        </span>
                        {s === 1 ? "Vos coordonnées" : "Votre projet"}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 md:p-8">
                    <AnimatePresence mode="wait">
                      {step === 1 ? (
                        /* ── Step 1 ── */
                        <motion.form key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} onSubmit={handleNext} className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-lg font-black text-white mb-1">Qui êtes-vous ?</h3>
                            <p className="text-gray-500 text-sm">Quelques informations pour préparer votre audit.</p>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Prénom & Nom *</label>
                              <input type="text" required placeholder="Jean Dupont" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Email *</label>
                              <input type="email" required placeholder="jean@entreprise.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all" />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Votre entreprise / activité</label>
                            <input type="text" placeholder="Nom de votre boutique, marque, activité..." value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all" />
                          </div>

                          <button type="submit" className="group relative flex items-center justify-center gap-2 w-full py-4 text-base font-bold text-white rounded-xl overflow-hidden mt-2">
                            <span className="absolute inset-0 shimmer-btn" />
                            <span className="relative z-10">Continuer</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </motion.form>
                      ) : (
                        /* ── Step 2 ── */
                        <motion.form key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-lg font-black text-white mb-1">Parlez-nous de votre projet</h3>
                            <p className="text-gray-500 text-sm">Plus c'est précis, plus notre stratégie sera percutante.</p>
                          </div>

                          {/* Service selector */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Service souhaité *</label>
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((s) => (
                                <button key={s} type="button" onClick={() => setForm({ ...form, service: s })}
                                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 border ${form.service === s ? "bg-purple-500/15 border-purple-500/50 text-purple-300" : "bg-white/[0.03] border-white/[0.07] text-gray-400 hover:border-white/15 hover:text-gray-300"}`}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Budget selector */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Budget mensuel estimé</label>
                            <div className="grid grid-cols-2 gap-2">
                              {budgets.map((b) => (
                                <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${form.budget === b ? "bg-amber-500/12 border-amber-500/40 text-amber-300" : "bg-white/[0.03] border-white/[0.07] text-gray-400 hover:border-white/15 hover:text-gray-300"}`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Message */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Décrivez votre projet</label>
                            <textarea rows={4} placeholder="Vos objectifs, votre situation actuelle, ce que vous attendez de nous..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                              className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all resize-none" />
                          </div>

                          <div className="flex gap-3 mt-2">
                            <button type="button" onClick={() => setStep(1)} className="px-5 py-4 rounded-xl text-sm font-semibold text-gray-400 glass hover:bg-white/5 border border-white/[0.07] transition-all">
                              ← Retour
                            </button>
                            <button type="submit" className="group relative flex-1 flex items-center justify-center gap-2 py-4 text-base font-bold text-white rounded-xl overflow-hidden">
                              <span className="absolute inset-0 shimmer-btn" />
                              <span className="relative z-10">Envoyer ma demande</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>

                          <p className="text-xs text-gray-600 text-center">En envoyant ce formulaire, vous acceptez d&apos;être recontacté par Ombraie Agency. Aucun spam.</p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
