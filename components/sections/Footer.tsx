"use client";

import OmbraieLogoSVG from "../ui/OmbraieLogoSVG";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const links = {
  Services: ["Social Media", "Paid Ads", "Création Contenu", "Sites E-commerce", "Sites Vitrines", "Design Graphique"],
  Agence: ["À propos", "Notre méthode", "Résultats", "Témoignages", "Contact"],
  Légal: ["Mentions légales", "Politique de confidentialité", "CGV"],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/8 to-transparent" />

      <div className="relative section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <OmbraieLogoSVG size={34} showText className="mb-5" />
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xs">
              Agence marketing & digital spécialisée pour les e-commerçants et entreprises ambitieux.
            </p>
            <div className="flex items-center gap-1.5 mb-5">
              <span className="text-gray-600 text-xs">📍</span>
              <span className="text-xs text-gray-600">Martres-Tolosane · Haute-Garonne (31)</span>
            </div>
            <div className="flex gap-2.5">
              {[{ Icon: Instagram, href: "#", label: "Instagram" }, { Icon: Facebook, href: "#", label: "Facebook" }, { Icon: Linkedin, href: "#", label: "LinkedIn" }, { Icon: Mail, href: "mailto:contact@ombraie.agency", label: "Email" }].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-lg glass hover:glass-purple flex items-center justify-center text-gray-500 hover:text-purple-300 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{title}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-400 transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Ombraie Agency. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-gray-600">Disponible pour nouveaux projets</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
