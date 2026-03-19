"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const services = [
  "Social Media Management",
  "Paid Ads (Meta / Google)",
  "Création de contenu",
  "Site E-commerce",
  "Site Vitrine",
  "Design Graphique",
  "Pack complet",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-purple text-sm text-purple-300 font-medium mb-8">
                ✦ Contact
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Parlons de
                <br />
                <span className="gradient-text">votre projet</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Remplissez le formulaire et recevez votre audit gratuit + stratégie personnalisée sous 24h. Première consultation offerte.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              <a
                href="mailto:contact@ombraie.agency"
                className="group flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-2xl glass-purple flex items-center justify-center group-hover:glow-purple transition-all duration-300 flex-shrink-0">
                  <Mail size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                  <p className="text-white text-lg font-semibold group-hover:text-purple-300 transition-colors">
                    contact@ombraie.agency
                  </p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">Nos réseaux</p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-14 h-14 rounded-2xl glass hover:glass-purple flex items-center justify-center text-gray-400 hover:text-purple-300 transition-all duration-200"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔒", label: "Données sécurisées" },
                { icon: "📋", label: "Contrat transparent" },
                { icon: "🎯", label: "Résultats mesurables" },
                { icon: "⚡", label: "Onboarding en 48h" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 glass rounded-2xl px-5 py-4">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-sm text-gray-400 font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-purple rounded-3xl p-16 text-center flex flex-col items-center gap-8"
              >
                <div className="text-7xl">🚀</div>
                <h3 className="text-3xl font-black text-white">Message envoyé !</h3>
                <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                  On revient vers vous sous 24h avec votre audit gratuit. Vérifiez vos emails !
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-10 flex flex-col gap-6">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-semibold">Nom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-semibold">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-base"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-semibold">Votre business</label>
                  <input
                    type="text"
                    placeholder="Nom / secteur de votre entreprise"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-base"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-semibold">Service souhaité</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-[#0a0a12] border border-white/[0.08] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors text-base"
                  >
                    <option value="">Sélectionner un service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 font-semibold">Votre projet</label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs, votre budget approximatif..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors text-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex items-center justify-center gap-3 w-full py-5 text-lg font-bold text-white rounded-2xl overflow-hidden mt-2"
                >
                  <span className="absolute inset-0 shimmer-btn" />
                  <span className="relative z-10">Envoyer ma demande</span>
                  <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="text-xs text-gray-600 text-center">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté par Ombraie Agency.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
