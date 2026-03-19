"use client";

import { motion } from "framer-motion";

const sites = [
  {
    name: "LuxStore Paris",
    type: "E-commerce Mode Luxe",
    emoji: "👜",
    accent: "#c084fc",
    accentDark: "#7c3aed",
    status: "En ligne",
    stack: ["Shopify", "Custom Theme", "Meta Pixel"],
    preview: <LuxStorePreview />,
  },
  {
    name: "Zen & Beauté",
    type: "Spa & Institut de Beauté",
    emoji: "🌿",
    accent: "#34d399",
    accentDark: "#059669",
    status: "En ligne",
    stack: ["Next.js", "Tailwind", "Booking intégré"],
    preview: <SpaPreview />,
  },
  {
    name: "TechLaunch SAS",
    type: "Startup B2B — Site Vitrine",
    emoji: "🚀",
    accent: "#60a5fa",
    accentDark: "#2563eb",
    status: "En ligne",
    stack: ["Next.js", "Framer Motion", "SEO"],
    preview: <TechPreview />,
  },
];

function BrowserFrame({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/[0.07]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 mx-3 bg-[#0d0d1a] rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border flex-shrink-0" style={{ borderColor: `${accent}60` }}>
            <div className="w-1 h-1 rounded-full m-auto mt-0.5" style={{ background: accent }} />
          </div>
          <span className="text-[10px] text-gray-500 font-mono">ombraie-client.fr</span>
          <div className="ml-auto w-3 h-3 rounded-full" style={{ background: `${accent}40` }} />
        </div>
      </div>
      {/* Content */}
      <div className="relative overflow-hidden" style={{ maxHeight: "320px" }}>
        {children}
      </div>
    </div>
  );
}

function LuxStorePreview() {
  const products = [
    { name: "Sac Cuir Milano", price: "289€", tag: "Bestseller", color: "#c084fc" },
    { name: "Pochette Soirée", price: "159€", tag: "Nouveau", color: "#f59e0b" },
    { name: "Ceinture Luxe", price: "120€", tag: "-20%", color: "#34d399" },
  ];
  return (
    <div className="bg-[#08080f] min-h-[320px]">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
        <span className="text-xs font-black text-white tracking-widest">LUXSTORE</span>
        <div className="flex gap-4">
          {["Femme","Homme","Accessoires"].map(t => <span key={t} className="text-[9px] text-gray-500">{t}</span>)}
        </div>
        <div className="flex gap-2 text-gray-500 text-xs">♡ 🛍</div>
      </div>
      {/* Hero band */}
      <div className="relative px-5 py-5 bg-gradient-to-r from-purple-900/40 to-violet-900/20">
        <div className="text-[10px] text-purple-300 font-semibold mb-1">NOUVELLE COLLECTION</div>
        <div className="text-lg font-black text-white leading-tight">Automne–<br/>Hiver 2025</div>
        <div className="mt-2 inline-flex px-3 py-1 rounded-full text-[9px] font-bold text-white" style={{ background: "#7c3aed" }}>Découvrir →</div>
        <div className="absolute right-4 top-3 w-16 h-16 rounded-full bg-purple-600/20 border border-purple-500/20 flex items-center justify-center text-3xl">👜</div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-3 gap-2 px-3 py-3">
        {products.map(p => (
          <div key={p.name} className="rounded-lg overflow-hidden bg-[#0f0f1e] border border-white/[0.05]">
            <div className="h-20 flex items-center justify-center text-3xl" style={{ background: `${p.color}10` }}>👜</div>
            <div className="p-2">
              <div className="text-[9px] text-white font-bold leading-tight">{p.name}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] font-black" style={{ color: p.color }}>{p.price}</span>
                <span className="text-[8px] px-1 py-0.5 rounded font-bold text-white" style={{ background: `${p.color}30` }}>{p.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpaPreview() {
  return (
    <div className="bg-[#050e0a] min-h-[320px]">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
        <span className="text-xs font-black text-emerald-400 tracking-widest">ZEN & BEAUTÉ</span>
        <div className="flex gap-3 text-[9px] text-gray-500">Soins · Massages · Forfaits · Contact</div>
        <div className="text-[9px] px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">Réserver</div>
      </div>
      {/* Hero */}
      <div className="relative px-5 py-6 bg-gradient-to-br from-emerald-900/30 to-teal-900/10 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-800/20 to-transparent flex items-center justify-center text-5xl">🌿</div>
        <div className="text-[10px] text-emerald-400 font-semibold tracking-wider mb-1">VOTRE SANCTUAIRE</div>
        <div className="text-base font-black text-white leading-tight">L&apos;art du<br/>bien-être<br/><span className="text-emerald-400">à Paris.</span></div>
        <div className="flex gap-2 mt-3">
          <div className="text-[9px] px-2 py-1 rounded bg-emerald-500 text-white font-bold">Prendre RDV</div>
          <div className="text-[9px] px-2 py-1 rounded border border-emerald-500/30 text-emerald-400">Nos soins</div>
        </div>
      </div>
      {/* Services row */}
      <div className="grid grid-cols-4 gap-1.5 px-3 py-3">
        {[["🧖","Massage","60€"],["💆","Visage","45€"],["✨","Gommage","55€"],["💅","Manucure","35€"]].map(([icon,name,price]) => (
          <div key={name as string} className="text-center p-2 rounded-lg bg-emerald-900/10 border border-emerald-500/10">
            <div className="text-xl mb-1">{icon}</div>
            <div className="text-[9px] text-white font-semibold">{name}</div>
            <div className="text-[8px] text-emerald-400 font-bold mt-0.5">{price}</div>
          </div>
        ))}
      </div>
      {/* Reviews */}
      <div className="flex items-center gap-2 px-3 pb-3">
        <div className="text-amber-400 text-xs">★★★★★</div>
        <span className="text-[9px] text-gray-500">4.9/5 · 127 avis Google</span>
        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] text-emerald-400">Disponible</span>
      </div>
    </div>
  );
}

function TechPreview() {
  return (
    <div className="bg-[#030712] min-h-[320px]">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-blue-500/10">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[8px] font-black text-white">TL</div>
          <span className="text-xs font-black text-white">TechLaunch</span>
        </div>
        <div className="flex gap-3 text-[9px] text-gray-500">Produit · Tarifs · À propos · Blog</div>
        <div className="text-[9px] px-2 py-1 rounded bg-blue-500 text-white font-bold">Démo gratuite</div>
      </div>
      {/* Hero */}
      <div className="px-5 py-5 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[9px] text-blue-300 font-semibold">Nouveau — Version 2.0</span>
          </div>
          <h3 className="text-base font-black text-white leading-tight mb-2">
            Automatisez votre<br />
            <span className="text-blue-400">prospection B2B.</span>
          </h3>
          <p className="text-[10px] text-gray-500 mb-3 max-w-xs">Générez des leads qualifiés automatiquement et closez 3× plus vite avec notre IA.</p>
          <div className="flex gap-2">
            <div className="text-[9px] px-3 py-1.5 rounded-lg bg-blue-500 text-white font-bold">Démarrer gratuitement</div>
            <div className="text-[9px] px-3 py-1.5 rounded-lg border border-blue-500/30 text-blue-400">Voir démo</div>
          </div>
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 px-3 pb-3">
        {[["500+","clients B2B"],["92%","taux satisfaction"],["3×","plus de leads"]].map(([v,l]) => (
          <div key={l as string} className="text-center p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
            <div className="text-sm font-black text-blue-400">{v}</div>
            <div className="text-[8px] text-gray-500 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SiteMockups() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {sites.map((site, i) => (
        <motion.div
          key={site.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="flex flex-col gap-4"
        >
          <BrowserFrame accent={site.accent}>
            {site.preview}
          </BrowserFrame>

          <div className="glass rounded-2xl p-5 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{site.emoji}</span>
                <div>
                  <h3 className="text-white font-black text-sm">{site.name}</h3>
                  <p className="text-gray-500 text-xs">{site.type}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {site.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {site.stack.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full border font-semibold" style={{ color: site.accent, borderColor: `${site.accent}30`, background: `${site.accent}10` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
