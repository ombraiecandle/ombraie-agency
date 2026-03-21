"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import OmbraieLogoSVG from "../ui/OmbraieLogoSVG";

const links = [
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "Résultats", href: "#resultats" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 glass border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="group">
            <OmbraieLogoSVG size={36} showText={true} />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-violet-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+33624003820"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-purple-300 rounded-lg border border-purple-500/25 hover:border-purple-500/50 hover:text-white transition-all duration-200"
              style={{ background: "rgba(124,58,237,0.08)" }}
            >
              <Phone size={14} />
              06 24 00 38 20
            </a>
            <a
              href="#contact"
              className="relative px-5 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 shimmer-btn rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Démarrer un projet</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 glass-purple md:hidden flex flex-col pt-28 px-8 gap-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-2xl font-semibold text-white border-b border-white/5 pb-4"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 px-6 py-3 text-center text-sm font-bold text-white shimmer-btn rounded-xl"
            >
              Démarrer un projet
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
