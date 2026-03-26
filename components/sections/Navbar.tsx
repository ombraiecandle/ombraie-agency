"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import OmbraieLogoSVG from "../ui/OmbraieLogoSVG";

const links = [
  { label: "Accueil",     href: "/"            },
  { label: "Services",    href: "#services"    },
  { label: "Réalisations", href: "/realisations" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact",     href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Sur les sous-pages, les liens ancres doivent pointer vers /#section
  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHome) return `/${href}`;
    return href;
  };

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
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,250,249,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          paddingTop:    scrolled ? "0.75rem" : "1.25rem",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">

          <a href="/" className="flex-shrink-0">
            <OmbraieLogoSVG size={30} showText light />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={resolveHref(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="tel:+33624003820"
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-purple-700 rounded-full border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 whitespace-nowrap"
            >
              <Phone size={13} />
              <span className="hidden xl:inline">06 24 00 38 20</span>
              <span className="xl:hidden">Appeler</span>
            </a>
            <a
              href="#contact"
              className="relative px-5 py-2 text-sm font-bold text-white rounded-full overflow-hidden group whitespace-nowrap"
            >
              <span className="absolute inset-0 shimmer-btn opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Audit gratuit</span>
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+33624003820"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-purple-700 rounded-full border border-purple-200 bg-purple-50"
            >
              <Phone size={13} />
              Appeler
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-28 px-8 gap-5"
            style={{ background: "#FAFAF9" }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={resolveHref(link.href)}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-2xl font-semibold text-gray-900 border-b border-gray-100 pb-4"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+33624003820"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-purple-700 border border-purple-200 bg-purple-50"
            >
              <Phone size={16} />
              06 24 00 38 20
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="relative px-6 py-4 text-center text-base font-bold text-white rounded-2xl overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-btn" />
              <span className="relative z-10">Démarrer mon projet →</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
