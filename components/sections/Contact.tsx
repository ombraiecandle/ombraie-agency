"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const services = [
    "Social Media Management",
    "Paid Ads (Meta / Google)",
    "Création de contenu",
    "Site E-commerce",
    "Site Vitrine",
    "Design Graphique",
    "Pack complet",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez connecter votre backend / service email
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-glow-left" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm text-purple-300 font-medium mb-8">
              ✦ Contact
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Parlons de votre
              <br />
              <span className="gradient-text">projet</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Remplissez le formulaire et recevez votre audit gratuit + une stratégie personnalisée
              sous 24h. Première consultation offerte.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5 mb-10">
              <a
                href="mailto:contact@ombraie.agency"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass-purple flex items-center justify-center group-hover:glow-purple transition-all">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    contact@ombraie.agency
                  </p>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-xl glass hover:glass-purple flex items-center justify-center text-gray-400 hover:text-purple-300 transition-all duration-200 hover:glow-purple"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-purple rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center gap-6"
              >
                <div className="text-6xl">🚀</div>
                <h3 className="text-2xl font-black text-white">Message envoyé !</h3>
                <p className="text-gray-400 max-w-sm">
                  On revient vers vous sous 24h avec votre audit gratuit. Vérifiez vos emails !
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Nom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Votre business</label>
                  <input
                    type="text"
                    placeholder="Nom de votre entreprise / secteur"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Service souhaité</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#0a0a12] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                  >
                    <option value="">Sélectionner un service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Votre projet</label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre projet, vos objectifs, votre budget approximatif..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex items-center justify-center gap-3 w-full py-4 text-base font-bold text-white rounded-xl overflow-hidden mt-2"
                >
                  <span className="absolute inset-0 shimmer-btn" />
                  <span className="relative z-10">Envoyer ma demande</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
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
