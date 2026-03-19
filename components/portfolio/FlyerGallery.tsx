"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ─── 10 Flyers as inline SVG/JSX designs ─── */

function FlyerRestaurant() {
  return (
    <div className="w-full h-full bg-[#0a0703] relative overflow-hidden" style={{fontFamily:"system-ui,sans-serif"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B4513]/10 to-[#8B4513]/30" />
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
      <div className="relative p-5 flex flex-col h-full">
        <div className="text-center mb-3">
          <div className="text-[9px] tracking-[0.4em] text-amber-500/70 uppercase mb-1">Restaurant Gastronomique</div>
          <div className="text-2xl font-black text-white leading-none">Le Grand</div>
          <div className="text-2xl font-black leading-none" style={{color:"#F59E0B"}}>Palais</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="h-px flex-1 bg-amber-700/40" />
            <span className="text-amber-600/60 text-[8px]">✦</span>
            <div className="h-px flex-1 bg-amber-700/40" />
          </div>
        </div>
        <div className="text-center my-2">
          <div className="text-[28px] leading-none">🍽️</div>
          <div className="text-xs font-black text-white mt-1">Menu Dégustation</div>
          <div className="text-[9px] text-gray-400 mt-0.5">7 plats · Accord mets & vins</div>
          <div className="text-xl font-black mt-1" style={{color:"#F59E0B"}}>89€</div>
          <div className="text-[8px] text-gray-500">par personne</div>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-1 mb-2">
            {[["📍","18 Rue de la Paix, Paris"],["📞","01 42 36 89 10"],["🕐","Mar-Dim 19h–23h"],["⭐","Michelin Guide 2024"]].map(([i,t]) => (
              <div key={t as string} className="flex items-center gap-1">
                <span className="text-[10px]">{i}</span>
                <span className="text-[8px] text-gray-400">{t}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-[8px] text-amber-600 tracking-widest uppercase">Réservation conseillée</div>
        </div>
      </div>
    </div>
  );
}

function FlyerFitness() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#0a0a0a"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-red-900/20" />
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-orange-500/10 blur-xl" />
      <div className="relative p-4 flex flex-col h-full">
        <div className="mb-3">
          <div className="text-[8px] tracking-[0.3em] text-orange-400/70 uppercase">Coaching Personnel</div>
          <div className="text-xl font-black text-white leading-tight">TRANSFORME<br/>TON CORPS.</div>
          <div className="text-xl font-black leading-tight" style={{color:"#F97316"}}>EN 90 JOURS.</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {[["💪","Force"],["🔥","Cardio"],["🥗","Nutrition"]].map(([i,l]) => (
            <div key={l as string} className="text-center p-1.5 rounded-lg" style={{background:"rgba(249,115,22,0.1)",border:"1px solid rgba(249,115,22,0.2)"}}>
              <div className="text-base">{i}</div>
              <div className="text-[8px] text-orange-300 font-bold">{l}</div>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-xl mb-3" style={{background:"rgba(249,115,22,0.12)",border:"1px solid rgba(249,115,22,0.2)"}}>
          <div className="text-[9px] text-gray-400 line-through mb-0.5">Programme habituel · 199€</div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-white">99€</span>
            <span className="text-[9px] text-orange-400 mb-1">/mois — offre lancement</span>
          </div>
        </div>
        <div className="mt-auto text-center">
          <div className="text-[9px] font-black text-white py-2 px-4 rounded-full inline-block" style={{background:"linear-gradient(135deg,#F97316,#DC2626)"}}>
            S&apos;inscrire maintenant →
          </div>
          <div className="text-[8px] text-gray-600 mt-1">@fitcoach.pro · 06 XX XX XX XX</div>
        </div>
      </div>
    </div>
  );
}

function FlyerSoldes() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#0f0005"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-red-600/10 blur-2xl" />
      <div className="relative p-4 flex flex-col h-full text-center">
        <div className="mb-2">
          <div className="text-[8px] tracking-[0.3em] text-red-400/60 uppercase">Vente Flash</div>
          <div className="text-4xl font-black leading-none" style={{color:"#EF4444"}}>-70%</div>
          <div className="text-[10px] text-white font-black tracking-widest">SUR TOUT LE SITE</div>
        </div>
        <div className="flex justify-center gap-2 mb-3">
          {[["47","H"],["23","M"],["11","S"]].map(([v,l]) => (
            <div key={l as string} className="text-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-black text-white" style={{background:"rgba(239,68,68,0.2)",border:"1px solid rgba(239,68,68,0.3)"}}>
                {v}
              </div>
              <div className="text-[7px] text-gray-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 mb-3">
          {[["Robes & Tops","-70%"],["Chaussures","-60%"],["Accessoires","-50%"]].map(([cat,disc]) => (
            <div key={cat as string} className="flex items-center justify-between px-3 py-1.5 rounded-lg" style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"}}>
              <span className="text-[9px] text-gray-300">{cat}</span>
              <span className="text-[9px] font-black" style={{color:"#EF4444"}}>{disc}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className="text-[9px] font-black py-2 rounded-lg text-white" style={{background:"linear-gradient(135deg,#EF4444,#B91C1C)"}}>
            SHOP NOW · luxstore.fr
          </div>
          <div className="text-[7px] text-gray-600 mt-1">Offre valable jusqu&apos;au 31/12 · Dans la limite des stocks</div>
        </div>
      </div>
    </div>
  );
}

function FlyerEventNight() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#04010a"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-transparent to-indigo-900/30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-600/20 blur-2xl" />
      {/* Stars */}
      {[[10,15],[80,20],[20,60],[85,55],[50,8],[65,80],[15,85]].map(([x,y],i) => (
        <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white/40" style={{left:`${x}%`,top:`${y}%`}} />
      ))}
      <div className="relative p-4 flex flex-col h-full text-center">
        <div className="mb-2">
          <div className="text-[7px] tracking-[0.5em] text-purple-400/60 uppercase">Soirée Exclusive</div>
          <div className="text-xl font-black text-white leading-tight">NUIT</div>
          <div className="text-xl font-black leading-tight" style={{color:"#A855F7"}}>ÉLECTRIQUE</div>
          <div className="text-[9px] text-gray-400">Paris · Club Étoile</div>
        </div>
        <div className="text-4xl my-2">🎵</div>
        <div className="mb-2">
          <div className="text-xs font-black text-white">SAMEDI 28 JUIN</div>
          <div className="text-[9px] text-purple-300">23h00 – 06h00</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          {[["DJ NEXUS","Main Stage"],["AURORA","Room 2"]].map(([dj,room]) => (
            <div key={dj} className="p-2 rounded-lg" style={{background:"rgba(168,85,247,0.1)",border:"1px solid rgba(168,85,247,0.2)"}}>
              <div className="text-[9px] font-black text-white">{dj}</div>
              <div className="text-[7px] text-purple-400">{room}</div>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className="flex justify-center gap-2 mb-2">
            <div className="text-center"><div className="text-xs font-black text-white">15€</div><div className="text-[7px] text-gray-500">Early Bird</div></div>
            <div className="text-center"><div className="text-xs font-black text-white">25€</div><div className="text-[7px] text-gray-500">Normal</div></div>
            <div className="text-center"><div className="text-xs font-black" style={{color:"#A855F7"}}>VIP</div><div className="text-[7px] text-gray-500">Sur invitation</div></div>
          </div>
          <div className="text-[9px] py-1.5 rounded-lg font-bold text-white" style={{background:"linear-gradient(135deg,#7c3aed,#a855f7)"}}>
            Réserver sur shotgun.live
          </div>
        </div>
      </div>
    </div>
  );
}

function FlyerImmobilier() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#060609"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[7px] tracking-[0.3em] text-amber-500/60 uppercase">Agence Prestige</div>
            <div className="text-sm font-black text-white">ÉLITE IMMOBILIER</div>
          </div>
          <div className="text-2xl">🏛️</div>
        </div>
        <div className="h-16 rounded-xl overflow-hidden mb-3 relative" style={{background:"linear-gradient(135deg,#1a1105,#2d1f0a)"}}>
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-30">🏠</div>
          <div className="absolute bottom-2 left-2">
            <div className="text-[8px] text-amber-500 font-semibold">Penthouse · 16ème · Paris</div>
          </div>
          <div className="absolute top-2 right-2 text-[8px] font-black py-0.5 px-2 rounded" style={{background:"rgba(245,158,11,0.3)",color:"#F59E0B"}}>
            EXCLUSIVITÉ
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mb-3">
          {[["180m²","Surface"],["4","Pièces"],["2","Terrasses"]].map(([v,l]) => (
            <div key={l} className="text-center p-1.5 rounded-lg" style={{background:"rgba(245,158,11,0.06)",border:"1px solid rgba(245,158,11,0.15)"}}>
              <div className="text-sm font-black" style={{color:"#F59E0B"}}>{v}</div>
              <div className="text-[7px] text-gray-500">{l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between mb-3">
          <div>
            <div className="text-[8px] text-gray-500">Prix de vente</div>
            <div className="text-xl font-black text-white">2 850 000€</div>
          </div>
          <div className="text-right">
            <div className="text-[7px] text-gray-600">Honoraires inclus</div>
          </div>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className="text-center py-1.5 rounded-lg text-[9px] font-bold border" style={{borderColor:"rgba(245,158,11,0.3)",color:"#F59E0B"}}>
            Visite privée
          </div>
          <div className="text-center py-1.5 rounded-lg text-[9px] font-bold text-black" style={{background:"linear-gradient(135deg,#F59E0B,#D97706)"}}>
            01 44 XX XX XX
          </div>
        </div>
      </div>
    </div>
  );
}

function FlyerBeauty() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#0f0209"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-transparent to-rose-900/15" />
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500" />
      <div className="relative p-4 flex flex-col h-full">
        <div className="text-center mb-2">
          <div className="text-[7px] tracking-[0.4em] text-pink-400/60 uppercase mb-0.5">Beauty Studio</div>
          <div className="text-lg font-black text-white leading-none">GLOW &</div>
          <div className="text-lg font-black leading-none" style={{color:"#EC4899"}}>GRACE</div>
        </div>
        <div className="flex justify-center gap-2 mb-2">
          {["💋","✨","💅","🌸"].map(e => <span key={e} className="text-base">{e}</span>)}
        </div>
        <div className="text-center mb-3 p-2 rounded-xl" style={{background:"rgba(236,72,153,0.08)",border:"1px solid rgba(236,72,153,0.15)"}}>
          <div className="text-[8px] text-pink-300/70 font-semibold mb-0.5">OFFRE DU MOIS</div>
          <div className="text-sm font-black text-white">Maquillage Mariée</div>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <span className="text-[8px] text-gray-500 line-through">280€</span>
            <span className="text-lg font-black" style={{color:"#EC4899"}}>199€</span>
          </div>
        </div>
        <div className="space-y-1 mb-3">
          {[["Essai maquillage","inclus"],["Maquillage Jour J","inclus"],["Retouches","incluses"],["Déplacement","sur devis"]].map(([s,v]) => (
            <div key={s} className="flex items-center justify-between px-2 py-1 rounded-lg" style={{background:"rgba(255,255,255,0.03)"}}>
              <span className="text-[8px] text-gray-400">✓ {s}</span>
              <span className="text-[8px] font-bold" style={{color:"#EC4899"}}>{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto text-center">
          <div className="text-[8px] py-1.5 px-4 rounded-full inline-block font-bold text-white" style={{background:"linear-gradient(135deg,#EC4899,#BE185D)"}}>
            Réserver · 06 XX XX XX XX
          </div>
          <div className="text-[7px] text-gray-600 mt-1">@glowandgrace · Instagram · Paris 75008</div>
        </div>
      </div>
    </div>
  );
}

function FlyerFormation() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#020818"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-indigo-900/15" />
      <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-blue-500/10 blur-xl" />
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-base">🎓</div>
          <div className="text-[7px] px-2 py-1 rounded-full font-bold text-blue-300" style={{background:"rgba(59,130,246,0.15)",border:"1px solid rgba(59,130,246,0.2)"}}>
            🔴 LIVE 14 FÉV
          </div>
        </div>
        <div className="mb-3">
          <div className="text-[8px] text-blue-400/70 font-semibold mb-1">MASTERCLASS GRATUITE</div>
          <div className="text-base font-black text-white leading-tight">Comment scaler son e-commerce</div>
          <div className="text-base font-black leading-tight" style={{color:"#60A5FA"}}>de 0 à 100K€/mois</div>
        </div>
        <div className="space-y-1.5 mb-3">
          {[["✓","Stratégie ads Meta + Google"],["✓","Automatiser sa logistique"],["✓","Construire sa marque"],["✓","Cas réels & chiffres concrets"]].map(([i,t]) => (
            <div key={t} className="flex items-center gap-2">
              <span className="text-blue-400 text-[10px] font-bold flex-shrink-0">{i}</span>
              <span className="text-[9px] text-gray-300">{t}</span>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-xl mb-3" style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)"}}>
          <div className="flex items-center gap-2">
            <div className="text-[8px] text-gray-400 line-through">Valeur : 497€</div>
            <div className="text-sm font-black text-white">GRATUIT</div>
          </div>
          <div className="text-[8px] text-blue-300 mt-0.5">🔥 847 inscrits · Places limitées</div>
        </div>
        <div className="mt-auto">
          <div className="text-[9px] py-2 rounded-xl font-black text-white text-center" style={{background:"linear-gradient(135deg,#3B82F6,#4F46E5)"}}>
            Je m&apos;inscris gratuitement →
          </div>
          <div className="text-[7px] text-gray-600 text-center mt-1">masterclass-ecom.fr</div>
        </div>
      </div>
    </div>
  );
}

function FlyerCoiffeur() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#080609"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-0.5" style={{background:"linear-gradient(90deg,transparent,#8B5CF6,#C4B5FD,#8B5CF6,transparent)"}} />
      <div className="relative p-4 flex flex-col h-full">
        <div className="text-center mb-2">
          <div className="text-[7px] tracking-[0.4em] text-violet-400/50 uppercase">Salon Premium</div>
          <div className="text-lg font-black text-white">COIFF</div>
          <div className="text-lg font-black" style={{color:"#8B5CF6"}}>&amp; STYLE</div>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          {["💇","✂️","🪭"].map(e => <span key={e} className="text-xl">{e}</span>)}
        </div>
        <div className="space-y-1.5 mb-3">
          {[["Coupe + Brushing","45€","→ 35€"],["Balayage Complet","95€","→ 75€"],["Couleur Globale","80€","→ 60€"],["Soin Kératine","120€","→ 90€"]].map(([s,a,b]) => (
            <div key={s} className="flex items-center justify-between px-2 py-1.5 rounded-lg" style={{background:"rgba(139,92,246,0.07)",border:"1px solid rgba(139,92,246,0.12)"}}>
              <span className="text-[9px] text-gray-300">{s}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-gray-600 line-through">{a}</span>
                <span className="text-[9px] font-black" style={{color:"#8B5CF6"}}>{b}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-xl mb-2 text-center" style={{background:"rgba(139,92,246,0.1)",border:"1px solid rgba(139,92,246,0.2)"}}>
          <div className="text-[8px] text-violet-300 font-bold">🎁 OFFRE NOUVEAU CLIENT</div>
          <div className="text-[8px] text-gray-400 mt-0.5">-20% sur votre 1ère visite</div>
        </div>
        <div className="mt-auto text-center">
          <div className="text-[9px] py-1.5 rounded-full inline-block px-4 font-bold text-white" style={{background:"linear-gradient(135deg,#7C3AED,#A855F7)"}}>
            RDV en ligne · 06 XX XX XX XX
          </div>
        </div>
      </div>
    </div>
  );
}

function FlyerBurger() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#080400"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-1" style={{background:"linear-gradient(90deg,#F59E0B,#EF4444,#F59E0B)"}} />
      <div className="relative p-4 flex flex-col h-full">
        <div className="text-center mb-1">
          <div className="text-[7px] tracking-widest text-amber-500/60 uppercase">Food Truck & Burger Bar</div>
          <div className="text-xl font-black leading-none text-white">UNDERGROUND</div>
          <div className="text-xl font-black leading-none" style={{color:"#F59E0B"}}>BURGER CO.</div>
        </div>
        <div className="text-center text-4xl my-2">🍔</div>
        <div className="text-center mb-2">
          <div className="text-[8px] text-amber-400/70 font-semibold">BURGER DU MOMENT</div>
          <div className="text-sm font-black text-white leading-tight">The Smokey Beast</div>
          <div className="text-[8px] text-gray-500">Bœuf 180g · Cheddar fumé · Bacon · Sauce BBQ maison</div>
        </div>
        <div className="grid grid-cols-3 gap-1 mb-2">
          {[["Menu","14€"],["Burger","9€"],["Offre Duo","22€"]].map(([n,p]) => (
            <div key={n} className="text-center p-1.5 rounded-lg" style={{background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.15)"}}>
              <div className="text-xs font-black" style={{color:"#F59E0B"}}>{p}</div>
              <div className="text-[7px] text-gray-500">{n}</div>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-xl mb-2 text-center" style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)"}}>
          <div className="text-[8px] text-red-400 font-bold">🔥 Livraison · Uber Eats · Deliveroo</div>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <div className="text-[8px] text-gray-500">📍 42 Rue du Commerce</div>
          <div className="text-[8px] text-gray-500">Lun-Dim 11h30–23h</div>
        </div>
      </div>
    </div>
  );
}

function FlyerSport() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{background:"#020d04"}}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/25 via-transparent to-green-900/15" />
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-400" />
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-sm">⚽</div>
          <div>
            <div className="text-[7px] text-emerald-400/60 uppercase tracking-widest">Club Sportif</div>
            <div className="text-xs font-black text-white">ACADÉMIE ELITE</div>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-base font-black text-white leading-tight">Rejoins la<br/>prochaine</div>
          <div className="text-base font-black leading-tight" style={{color:"#34D399"}}>génération.</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {[["⚽","Football U13-U18"],["🏃","Athlétisme"],["🥅","Gardiens"],["💪","Prépa physique"]].map(([i,t]) => (
            <div key={t} className="flex items-center gap-1.5 p-1.5 rounded-lg" style={{background:"rgba(52,211,153,0.07)",border:"1px solid rgba(52,211,153,0.12)"}}>
              <span className="text-sm">{i}</span>
              <span className="text-[8px] text-gray-300 font-medium">{t}</span>
            </div>
          ))}
        </div>
        <div className="p-2 rounded-xl mb-2 text-center" style={{background:"rgba(52,211,153,0.08)",border:"1px solid rgba(52,211,153,0.2)"}}>
          <div className="text-[8px] text-emerald-400 font-bold">📅 JOURNÉES PORTES OUVERTES</div>
          <div className="text-xs font-black text-white">15 & 16 MARS 2025</div>
          <div className="text-[8px] text-gray-500">10h–17h · Stade Municipal</div>
        </div>
        <div className="mt-auto text-center">
          <div className="text-[9px] py-1.5 rounded-full inline-block px-4 font-bold text-black" style={{background:"linear-gradient(135deg,#34D399,#059669)"}}>
            Inscription gratuite →
          </div>
        </div>
      </div>
    </div>
  );
}

const flyers = [
  { id: 1, name: "Restaurant Gastronomique", category: "Restauration", component: <FlyerRestaurant /> },
  { id: 2, name: "Coaching Fitness", category: "Sport & Santé", component: <FlyerFitness /> },
  { id: 3, name: "Vente Flash Mode", category: "E-commerce", component: <FlyerSoldes /> },
  { id: 4, name: "Soirée Événement", category: "Événementiel", component: <FlyerEventNight /> },
  { id: 5, name: "Agence Immobilière", category: "Immobilier", component: <FlyerImmobilier /> },
  { id: 6, name: "Studio Beauté & Maquillage", category: "Beauté", component: <FlyerBeauty /> },
  { id: 7, name: "Masterclass E-commerce", category: "Formation", component: <FlyerFormation /> },
  { id: 8, name: "Salon de Coiffure", category: "Beauté", component: <FlyerCoiffeur /> },
  { id: 9, name: "Burger Bar", category: "Restauration", component: <FlyerBurger /> },
  { id: 10, name: "Académie Sportive", category: "Sport & Santé", component: <FlyerSport /> },
];

export default function FlyerGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {flyers.map((flyer, i) => (
          <motion.div
            key={flyer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group cursor-pointer"
            onClick={() => setSelected(flyer.id)}
          >
            {/* Flyer card */}
            <div className="relative rounded-xl overflow-hidden border border-white/[0.07] group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl" style={{ aspectRatio: "2/3" }}>
              <div className="absolute inset-0">
                {flyer.component}
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  Agrandir ↗
                </span>
              </div>
            </div>
            {/* Info */}
            <div className="mt-2 px-0.5">
              <p className="text-white text-xs font-bold leading-tight truncate">{flyer.name}</p>
              <p className="text-gray-500 text-[10px] mt-0.5">{flyer.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ aspectRatio: "2/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            {flyers.find(f => f.id === selected)?.component}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white text-sm flex items-center justify-center backdrop-blur-sm border border-white/10"
            >
              ✕
            </button>
          </motion.div>
          <div className="absolute bottom-8 text-gray-400 text-sm">Cliquez en dehors pour fermer</div>
        </motion.div>
      )}
    </>
  );
}
