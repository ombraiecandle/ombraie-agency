"use client";

import OmbraieLogoSVG from "../ui/OmbraieLogoSVG";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    "Social Media",
    "Paid Ads",
    "Création Contenu",
    "Sites E-commerce",
    "Sites Vitrines",
    "Design Graphique",
  ],
  Agence: ["À propos", "Notre méthode", "Résultats", "Témoignages", "Contact"],
  Légal: ["Mentions légales", "Politique de confidentialité", "CGV"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <OmbraieLogoSVG size={38} showText={true} className="mb-6" />
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Agence marketing & digital spécialisée pour les e-commerçants et entreprises ambitieux.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:contact@ombraie.agency", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass hover:glass-purple flex items-center justify-center text-gray-500 hover:text-purple-300 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">{title}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ombraie Agency. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-gray-600">Disponible pour nouveaux projets</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
