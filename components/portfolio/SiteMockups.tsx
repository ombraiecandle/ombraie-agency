"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   macOS Browser Frame
───────────────────────────────────────── */
function BrowserFrame({ url, accent, children }: { url: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)", boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px ${accent}22` }}>
      {/* Title bar */}
      <div style={{ background: "#1c1c24", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        </div>
        {/* Tabs */}
        <div style={{ flex: 1, display: "flex", gap: "2px", marginLeft: "8px" }}>
          <div style={{ background: "#2a2a35", borderRadius: "8px 8px 0 0", padding: "5px 14px", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: accent + "40", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", color: "#c0c0cc", fontWeight: 500, whiteSpace: "nowrap" }}>{url}</span>
          </div>
        </div>
        {/* Controls */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 14, height: 14, borderRadius: "4px", background: "rgba(255,255,255,0.06)" }} />)}
        </div>
      </div>
      {/* Address bar */}
      <div style={{ background: "#14141c", padding: "6px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 18, height: 18, borderRadius: "4px", background: "rgba(255,255,255,0.05)" }} />)}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "5px 12px", display: "flex", alignItems: "center", gap: "6px", border: "1px solid rgba(255,255,255,0.07)" }}>
          <svg width="10" height="10" viewBox="0 0 12 16" fill={accent + "99"}><path d="M6 0a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11A5 5 0 0 0 6 0Zm0 7.5A2.5 2.5 0 1 1 6 2.5 2.5 2.5 0 0 1 6 7.5Z"/></svg>
          <span style={{ fontSize: "11px", color: "#888", fontFamily: "monospace" }}>https://</span>
          <span style={{ fontSize: "11px", color: "#bbb", fontWeight: 500 }}>{url}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
            {[0,1].map(i => <div key={i} style={{ width: 16, height: 16, borderRadius: "4px", background: "rgba(255,255,255,0.05)" }} />)}
          </div>
        </div>
      </div>
      {/* Page content */}
      <div style={{ maxHeight: "520px", overflow: "hidden" }}>{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────
   NOVA Paris — E-commerce Luxe
───────────────────────────────────────── */
function NovaPreview() {
  return (
    <div style={{ fontFamily: "system-ui,sans-serif", background: "#06040a" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Femme","Homme","Maison"].map(t => <span key={t} style={{ fontSize: "11px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>)}
        </div>
        <span style={{ fontSize: "18px", fontWeight: 900, color: "#fff", letterSpacing: "0.25em" }}>NOVA</span>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#888" }}>Recherche</span>
          <span style={{ fontSize: "11px", color: "#888" }}>Compte</span>
          <div style={{ position: "relative" }}>
            <span style={{ fontSize: "11px", color: "#c5a46c" }}>Panier</span>
            <div style={{ position: "absolute", top: -5, right: -6, width: 14, height: 14, borderRadius: "50%", background: "#c5a46c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: 700, color: "#000" }}>2</div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "linear-gradient(145deg,#0f0010 0%,#1a003a 30%,#0d0028 55%,#1a0010 80%,#060004 100%)" }}>
        {/* Photo-realistic fashion atmosphere */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 75% 40%, rgba(180,120,220,0.18) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 60% at 20% 70%, rgba(120,60,180,0.12) 0%, transparent 60%)" }} />
        {/* Grain */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
        {/* Model silhouette shape */}
        <div style={{ position: "absolute", right: "22%", top: "5%", width: "70px", height: "95%", background: "linear-gradient(180deg, rgba(200,170,255,0.07) 0%, rgba(200,170,255,0.03) 40%, transparent 100%)", borderRadius: "40% 40% 0 0", filter: "blur(8px)" }} />
        {/* Light flare */}
        <div style={{ position: "absolute", top: "10%", right: "30%", width: "80px", height: "80px", background: "radial-gradient(circle, rgba(255,240,200,0.08) 0%, transparent 70%)", filter: "blur(12px)" }} />
        {/* Text */}
        <div style={{ position: "absolute", left: "28px", top: "50%", transform: "translateY(-50%)" }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.35em", color: "#c5a46c", textTransform: "uppercase", marginBottom: "8px", opacity: 0.9 }}>Collection — Hiver 2025</div>
          <div style={{ fontSize: "36px", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "4px" }}>L&apos;ÉLÉGANCE</div>
          <div style={{ fontSize: "36px", fontWeight: 300, color: "#c5a46c", lineHeight: 1, letterSpacing: "0.08em", marginBottom: "16px", fontStyle: "italic" }}>Intemporelle</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ padding: "8px 18px", background: "#c5a46c", color: "#000", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "2px" }}>Découvrir</div>
            <div style={{ padding: "8px 18px", border: "1px solid rgba(197,164,108,0.4)", color: "#c5a46c", fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", borderRadius: "2px" }}>Lookbook</div>
          </div>
        </div>
      </div>

      {/* Category strip */}
      <div style={{ display: "flex", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
        {[["Robes","Nouveauté"],["Manteaux","−30%"],["Accessoires","Tendance"],["Soldes","Jusqu'à −50%"]].map(([label,tag], i) => (
          <div key={label} style={{ flex: 1, padding: "10px 12px", background: i === 3 ? "rgba(197,164,108,0.08)" : "#06040a", borderRight: "1px solid rgba(255,255,255,0.04)", cursor: "pointer" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: i === 3 ? "#c5a46c" : "#e8e8e8", marginBottom: "2px" }}>{label}</div>
            <div style={{ fontSize: "8px", color: i === 3 ? "#c5a46c88" : "#555", letterSpacing: "0.05em" }}>{tag}</div>
          </div>
        ))}
      </div>

      {/* Products */}
      <div style={{ padding: "16px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>Nos coups de cœur</span>
          <span style={{ fontSize: "9px", color: "#c5a46c", letterSpacing: "0.08em" }}>Voir tout →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
          {[
            { name: "Robe Velours Nuit", price: "349€", promo: null, bg: "linear-gradient(160deg,#1a0030 0%,#0d1a3a 50%,#0a0015 100%)", light: "rgba(180,100,255,0.2)" },
            { name: "Manteau Laine Crème", price: "589€", promo: "−20%", bg: "linear-gradient(160deg,#1a1510 0%,#2d2418 50%,#120f0a 100%)", light: "rgba(255,220,150,0.15)" },
            { name: "Sac Cuir Milano", price: "289€", promo: "Bestseller", bg: "linear-gradient(160deg,#0a0a14 0%,#1a1428 50%,#080810 100%)", light: "rgba(150,100,255,0.18)" },
            { name: "Escarpins Satin", price: "195€", promo: "Nouveau", bg: "linear-gradient(160deg,#150010 0%,#2a0020 50%,#0d000a 100%)", light: "rgba(255,100,200,0.12)" },
          ].map((p) => (
            <div key={p.name} style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Product image simulation */}
              <div style={{ height: "90px", position: "relative", background: p.bg }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${p.light} 0%, transparent 70%)` }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                {p.promo && (
                  <div style={{ position: "absolute", top: "6px", left: "6px", background: p.promo === "−20%" ? "#c5a46c" : p.promo === "Bestseller" ? "#7c3aed" : "#34d399", color: "#fff", fontSize: "7px", fontWeight: 700, padding: "2px 5px", borderRadius: "3px" }}>{p.promo}</div>
                )}
                {/* Wishlist */}
                <div style={{ position: "absolute", top: "6px", right: "6px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px" }}>♡</div>
              </div>
              <div style={{ padding: "7px 8px", background: "#0c0b12" }}>
                <div style={{ fontSize: "9px", color: "#ddd", fontWeight: 600, marginBottom: "3px", lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "10px", color: "#c5a46c", fontWeight: 800 }}>{p.price}</span>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(197,164,108,0.15)", border: "1px solid rgba(197,164,108,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#c5a46c" }}>+</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div style={{ margin: "0 18px 16px", padding: "12px 16px", background: "linear-gradient(90deg, rgba(197,164,108,0.12) 0%, rgba(197,164,108,0.05) 100%)", border: "1px solid rgba(197,164,108,0.2)", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "10px", color: "#c5a46c", fontWeight: 700, letterSpacing: "0.1em" }}>LIVRAISON OFFERTE</div>
          <div style={{ fontSize: "8px", color: "#666", marginTop: "2px" }}>Dès 150€ d&apos;achat · Retours gratuits 30 jours</div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["🚚 Express 24h","↩ Retours offerts","🔒 Paiement sécurisé"].map(t => (
            <span key={t} style={{ fontSize: "8px", color: "#888" }}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   SERENA — Spa & Beauté Premium
───────────────────────────────────────── */
function SerenaPreview() {
  return (
    <div style={{ fontFamily: "Georgia,serif", background: "#faf7f4" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 28px", background: "#faf7f4", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: "18px" }}>
          {["Soins","Rituels","Forfaits"].map(t => <span key={t} style={{ fontSize: "10px", color: "#6b5a4e", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "system-ui" }}>{t}</span>)}
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#2d2018", letterSpacing: "0.2em" }}>SERENA</div>
          <div style={{ fontSize: "7px", color: "#9c8070", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "1px" }}>Spa & Beauté</div>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "#6b5a4e", fontFamily: "system-ui" }}>Boutique</span>
          <div style={{ padding: "7px 16px", background: "#2d2018", color: "#f5ede8", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: "30px", fontFamily: "system-ui" }}>Réserver</div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "210px" }}>
        {/* Left text */}
        <div style={{ padding: "32px 32px 28px", background: "#faf7f4", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "8px", color: "#a0876e", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px", fontFamily: "system-ui" }}>Paris • Depuis 2018</div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#2d2018", lineHeight: 1.15, marginBottom: "10px" }}>
            L&apos;Art du<br /><em style={{ color: "#8b6553", fontStyle: "italic" }}>Bien-être</em>
          </h1>
          <p style={{ fontSize: "10px", color: "#7a6557", lineHeight: 1.6, marginBottom: "16px", fontFamily: "system-ui", maxWidth: "180px" }}>Rituels de beauté d&apos;exception. Un sanctuaire de sérénité au cœur de Paris.</p>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ padding: "8px 18px", background: "#2d2018", color: "#f5ede8", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "system-ui", borderRadius: "2px" }}>Prendre RDV</div>
            <div style={{ padding: "8px 18px", border: "1px solid rgba(45,32,24,0.25)", color: "#2d2018", fontSize: "9px", letterSpacing: "0.1em", fontFamily: "system-ui", borderRadius: "2px" }}>Découvrir</div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "14px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "2px" }}>{[...Array(5)].map((_,i) => <span key={i} style={{ fontSize: "9px", color: "#c5a46c" }}>★</span>)}</div>
            <span style={{ fontSize: "8px", color: "#9c8070", fontFamily: "system-ui" }}>4.9 · 284 avis Google</span>
          </div>
        </div>
        {/* Right image simulation */}
        <div style={{ position: "relative", background: "linear-gradient(145deg, #e8ddd4 0%, #d4c4b5 30%, #c4b0a0 60%, #b09080 100%)", overflow: "hidden" }}>
          {/* Atmospheric light */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 30% 20%, rgba(255,245,235,0.5) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 80% 80%, rgba(160,100,60,0.2) 0%, transparent 60%)" }} />
          {/* Candle flame simulation */}
          <div style={{ position: "absolute", top: "20%", left: "60%", width: "6px", height: "20px", background: "linear-gradient(to top, #f59e0b, #fde68a, #fff9c4)", borderRadius: "50% 50% 30% 30%", filter: "blur(2px)", opacity: 0.8 }} />
          <div style={{ position: "absolute", top: "35%", left: "59%", width: "14px", height: "30px", background: "radial-gradient(ellipse, rgba(255,200,50,0.3) 0%, transparent 70%)", filter: "blur(6px)" }} />
          {/* Stone/marble texture suggestion */}
          <div style={{ position: "absolute", bottom: "10%", left: "15%", right: "15%", height: "2px", background: "rgba(255,255,255,0.15)", borderRadius: "2px" }} />
          {/* Orchid suggestion */}
          <div style={{ position: "absolute", top: "15%", right: "12%", width: "25px", height: "40px", background: "radial-gradient(ellipse, rgba(200,100,150,0.3) 0%, transparent 70%)", filter: "blur(4px)" }} />
          {/* Overlay vignette */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,247,244,0.15) 0%, transparent 30%)" }} />
          {/* Tag */}
          <div style={{ position: "absolute", bottom: "16px", right: "16px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", padding: "6px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.6)" }}>
            <div style={{ fontSize: "8px", color: "#2d2018", fontWeight: 700, fontFamily: "system-ui" }}>Ritual Signature</div>
            <div style={{ fontSize: "8px", color: "#8b6553", fontFamily: "system-ui" }}>90 min · 140€</div>
          </div>
        </div>
      </div>

      {/* Services row */}
      <div style={{ background: "#f5ede8", padding: "16px 28px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <span style={{ fontSize: "10px", color: "#2d2018", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "system-ui" }}>Nos Soins Signature</span>
          <span style={{ fontSize: "9px", color: "#8b6553", fontFamily: "system-ui" }}>Voir tous les soins →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
          {[
            { name: "Massage Abhyanga", duration: "60 min", price: "95€", color: "#8b6553" },
            { name: "Soin Visage Lift", duration: "75 min", price: "110€", color: "#6b8a5e" },
            { name: "Gommage Corps", duration: "45 min", price: "75€", color: "#5e6e8a" },
            { name: "Ritual Duo", duration: "120 min", price: "180€", color: "#8a5e6e" },
          ].map((s) => (
            <div key={s.name} style={{ background: "#fff", borderRadius: "8px", padding: "10px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: s.color + "18", marginBottom: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color + "60" }} />
              </div>
              <div style={{ fontSize: "9px", fontWeight: 600, color: "#2d2018", marginBottom: "2px", fontFamily: "system-ui" }}>{s.name}</div>
              <div style={{ fontSize: "8px", color: "#9c8070", fontFamily: "system-ui" }}>{s.duration}</div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: s.color, marginTop: "4px", fontFamily: "system-ui" }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ padding: "14px 28px", background: "#faf7f4", borderTop: "1px solid rgba(0,0,0,0.04)", display: "flex", gap: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1px" }}>{[...Array(5)].map((_,i) => <span key={i} style={{ color: "#c5a46c", fontSize: "10px" }}>★</span>)}</div>
        <p style={{ fontSize: "9px", color: "#6b5a4e", fontStyle: "italic", flex: 1 }}>&quot;Un vrai moment de grâce. Le massage signature est incroyable, je reviens chaque mois.&quot;</p>
        <span style={{ fontSize: "8px", color: "#9c8070", whiteSpace: "nowrap", fontFamily: "system-ui" }}>— Sophie M.</span>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   PRISMA — SaaS B2B Dashboard
───────────────────────────────────────── */
function PrismaPreview() {
  const barData = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100];
  return (
    <div style={{ fontFamily: "system-ui,sans-serif", background: "#080c18" }}>

      {/* Top nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderBottom: "1px solid rgba(79,110,247,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "linear-gradient(135deg,#4f6ef7,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "10px", height: "10px", background: "#fff", clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
          </div>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Prisma</span>
          <div style={{ marginLeft: "16px", display: "flex", gap: "2px" }}>
            {["Produit","Solutions","Tarifs","Blog"].map(t => <span key={t} style={{ fontSize: "10px", color: "#4a5568", padding: "4px 8px" }}>{t}</span>)}
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "#4a5568" }}>Connexion</span>
          <div style={{ padding: "7px 14px", background: "linear-gradient(135deg,#4f6ef7,#7c3aed)", borderRadius: "8px", fontSize: "9px", fontWeight: 700, color: "#fff" }}>Essai gratuit →</div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "28px 24px 20px", position: "relative", overflow: "hidden" }}>
        {/* Grid background */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(79,110,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(79,110,247,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "400px", height: "200px", background: "radial-gradient(ellipse, rgba(79,110,247,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", background: "rgba(79,110,247,0.1)", border: "1px solid rgba(79,110,247,0.25)", borderRadius: "20px", marginBottom: "14px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4f6ef7" }} />
            <span style={{ fontSize: "9px", color: "#6b8af7", fontWeight: 600 }}>v3.0 — Maintenant disponible</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "10px", letterSpacing: "-0.03em" }}>
            Vos ventes B2B sur<br />
            <span style={{ background: "linear-gradient(90deg,#4f6ef7,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>pilote automatique.</span>
          </h1>
          <p style={{ fontSize: "10px", color: "#64748b", lineHeight: 1.6, marginBottom: "16px", maxWidth: "320px" }}>Générez des leads, closez plus vite et pilotez votre pipeline avec l&apos;IA. Rejoignez 1 200+ équipes commerciales.</p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px" }}>
            <div style={{ padding: "9px 20px", background: "linear-gradient(135deg,#4f6ef7,#7c3aed)", borderRadius: "10px", fontSize: "10px", fontWeight: 700, color: "#fff", boxShadow: "0 4px 20px rgba(79,110,247,0.4)" }}>Démarrer gratuitement</div>
            <div style={{ padding: "9px 16px", border: "1px solid rgba(79,110,247,0.25)", borderRadius: "10px", fontSize: "10px", color: "#6b8af7" }}>Voir la démo ▶</div>
          </div>
          {/* Logos clients */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <span style={{ fontSize: "8px", color: "#374151" }}>Fait confiance par :</span>
            {["Scaleway","Doctolib","Swile","Payfit"].map(l => (
              <span key={l} style={{ fontSize: "9px", color: "#4b5563", fontWeight: 700, padding: "3px 8px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.06)" }}>{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard preview */}
      <div style={{ margin: "0 16px 16px", borderRadius: "10px", border: "1px solid rgba(79,110,247,0.15)", overflow: "hidden", background: "#0e1220" }}>
        {/* Dashboard nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0f1c" }}>
          <div style={{ display: "flex", gap: "1px" }}>
            {["w-2 h-2 bg-red-500/60","w-2 h-2 bg-yellow-400/60","w-2 h-2 bg-green-400/60"].map((c,i) => <div key={i} className={c} style={{ width: 8, height: 8, borderRadius: "50%" }} />)}
          </div>
          <span style={{ fontSize: "9px", color: "#4b5563", fontFamily: "monospace" }}>app.prisma.io/dashboard</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", height: "120px" }}>
          {/* Sidebar */}
          <div style={{ width: "36px", background: "#070b16", borderRight: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "8px", gap: "6px" }}>
            {["#4f6ef7","rgba(255,255,255,0.15)","rgba(255,255,255,0.1)","rgba(255,255,255,0.1)"].map((bg,i) => (
              <div key={i} style={{ width: "22px", height: "22px", borderRadius: "6px", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "8px", height: "8px", background: i === 0 ? "#fff" : "rgba(255,255,255,0.3)", borderRadius: "2px" }} />
              </div>
            ))}
          </div>
          {/* Dashboard content */}
          <div style={{ padding: "10px 12px" }}>
            {/* KPI row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "6px", marginBottom: "8px" }}>
              {[
                { label: "Leads ce mois", val: "1 284", trend: "+23%", color: "#4f6ef7" },
                { label: "Taux de close", val: "18.4%", trend: "+4.2pt", color: "#a855f7" },
                { label: "CA pipeline", val: "284K€", trend: "+67%", color: "#34d399" },
                { label: "Score IA", val: "9.2/10", trend: "+0.8", color: "#f59e0b" },
              ].map((k) => (
                <div key={k.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: "6px", padding: "7px 8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: "7px", color: "#4b5563", marginBottom: "3px" }}>{k.label}</div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{k.val}</div>
                  <div style={{ fontSize: "7px", color: k.color, marginTop: "2px" }}>▲ {k.trend}</div>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "6px", padding: "7px 8px", border: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "flex-end", gap: "3px", height: "45px" }}>
              {barData.map((v, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                  <div style={{ width: "100%", borderRadius: "2px 2px 0 0", background: i === barData.length - 1 ? "#4f6ef7" : `rgba(79,110,247,${0.25 + (v/100)*0.5})`, height: `${(v/100)*80}%`, transition: "height 0.3s" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
const sites = [
  {
    name: "NOVA Paris",
    type: "E-commerce Mode Luxe",
    url: "nova-paris.fr",
    accent: "#c5a46c",
    status: "En ligne",
    stack: ["Shopify Plus", "Custom Theme", "Meta Pixel"],
    preview: <NovaPreview />,
    result: "+340% de CA en 3 mois",
    resultColor: "#c5a46c",
  },
  {
    name: "Serena Spa",
    type: "Spa & Institut de Beauté",
    url: "serena-spa.paris",
    accent: "#a0876e",
    status: "En ligne",
    stack: ["Next.js", "Calendly API", "SEO Local"],
    preview: <SerenaPreview />,
    result: "+180% de réservations",
    resultColor: "#8b6553",
  },
  {
    name: "Prisma SaaS",
    type: "Startup B2B — Landing & App",
    url: "prisma.io",
    accent: "#4f6ef7",
    status: "En ligne",
    stack: ["Next.js", "Framer Motion", "Stripe"],
    preview: <PrismaPreview />,
    result: "500 leads/mois générés",
    resultColor: "#4f6ef7",
  },
];

export default function SiteMockups() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {sites.map((site, i) => (
        <motion.div
          key={site.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "start" }}
          className="flex-col lg:grid"
        >
          {/* Mockup */}
          <div style={{ position: "relative" }}>
            {/* Glow */}
            <div style={{ position: "absolute", inset: "-20px", background: `radial-gradient(ellipse 60% 40% at 50% 60%, ${site.accent}18 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
            {/* Reflection */}
            <div style={{ position: "absolute", bottom: "-20px", left: "5%", right: "5%", height: "30px", background: `radial-gradient(ellipse 80% 100% at 50% 0%, ${site.accent}20, transparent)`, filter: "blur(12px)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <BrowserFrame url={site.url} accent={site.accent}>
                {site.preview}
              </BrowserFrame>
            </div>
          </div>

          {/* Info */}
          <div style={{ width: "220px", display: "flex", flexDirection: "column", gap: "12px", paddingTop: "8px" }} className="hidden lg:flex">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399" }} />
                <span style={{ fontSize: "10px", color: "#34d399", fontWeight: 600 }}>{site.status}</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "2px" }}>{site.name}</h3>
              <p style={{ fontSize: "11px", color: "#6b7280" }}>{site.type}</p>
            </div>

            <div style={{ padding: "10px 12px", borderRadius: "10px", background: `${site.accent}12`, border: `1px solid ${site.accent}30` }}>
              <div style={{ fontSize: "8px", color: site.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>Résultat</div>
              <p style={{ fontSize: "12px", fontWeight: 800, color: site.resultColor }}>🏆 {site.result}</p>
            </div>

            <div>
              <div style={{ fontSize: "9px", color: "#4b5563", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>Stack technique</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {site.stack.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: site.accent + "80", flexShrink: 0 }} />
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#9ca3af", fontSize: "11px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
              Projet similaire →
            </a>
          </div>

        </motion.div>
      ))}
    </div>
  );
}
