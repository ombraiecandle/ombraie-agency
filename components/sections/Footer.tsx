"use client";

import OmbraieLogoSVG from "../ui/OmbraieLogoSVG";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const links = {
  Services: ["Réseaux Sociaux", "Publicité en ligne", "Création de Contenu", "Site Vitrine", "Boutique en ligne", "Identité Visuelle"],
  Agence:   ["À propos", "Notre méthode", "Témoignages", "Contact"],
  Légal:    ["Mentions légales", "Politique de confidentialité", "CGV"],
};

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "#FAFAF9", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="relative section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <OmbraieLogoSVG size={30} showText light className="mb-5" />
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xs">
              Agence marketing & digital pour les entreprises qui veulent attirer plus de clients.
            </p>
            <div className="flex items-center gap-1.5 mb-5">
              <span className="text-gray-400 text-xs">📍</span>
              <span className="text-xs text-gray-400">Martres-Tolosane · Haute-Garonne (31)</span>
            </div>
            <a
              href="tel:+33624003820"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors mb-5"
            >
              <Phone size={13} />
              06 24 00 38 20
            </a>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, href: "#",                          label: "Instagram" },
                { Icon: Facebook,  href: "#",                          label: "Facebook"  },
                { Icon: Linkedin,  href: "#",                          label: "LinkedIn"  },
                { Icon: Mail,      href: "mailto:contact@ombraie.agency", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 hover:border-purple-200 hover:bg-purple-50 flex items-center justify-center text-gray-500 hover:text-purple-700 transition-all duration-200"
                >
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
                    <a href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ombraie Agency. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-gray-400">Disponible pour nouveaux projets</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
