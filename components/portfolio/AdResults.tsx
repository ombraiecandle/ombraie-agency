"use client";

import { motion } from "framer-motion";

const ads = [
  {
    platform: "Meta Ads",
    platformColor: "#1877F2",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    client: "Mode & Lifestyle",
    emoji: "👗",
    accentColor: "#1877F2",
    budget: "800€/mois",
    period: "3 mois",
    metrics: [
      { label: "ROAS", value: "4.8×", change: "+320%", up: true },
      { label: "Chiffre d'affaires", value: "+340%", change: "vs avant", up: true },
      { label: "CPC Moyen", value: "0.42€", change: "-55%", up: false },
      { label: "CTR", value: "3.2%", change: "+180%", up: true },
    ],
    chart: [18, 32, 28, 45, 52, 48, 70, 65, 82, 78, 95, 100],
    chartColor: "#1877F2",
    tags: ["Prospection", "Retargeting", "Dynamic Ads"],
    highlight: "340% de CA en 90 jours",
  },
  {
    platform: "Google Ads",
    platformColor: "#EA4335",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    client: "Formation en Ligne",
    emoji: "🎓",
    accentColor: "#34A853",
    budget: "1 200€/mois",
    period: "2 mois",
    metrics: [
      { label: "ROAS", value: "4.2×", change: "+260%", up: true },
      { label: "CPA", value: "18€", change: "-62%", up: false },
      { label: "Conversions", value: "+180/mois", change: "+245%", up: true },
      { label: "Taux conv.", value: "6.8%", change: "+3.2pts", up: true },
    ],
    chart: [22, 30, 38, 42, 55, 60, 68, 75, 80, 88, 94, 100],
    chartColor: "#34A853",
    tags: ["Search Ads", "Performance Max", "YouTube"],
    highlight: "CPA divisé par 2.6 en 60 jours",
  },
  {
    platform: "Meta Ads",
    platformColor: "#1877F2",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    client: "Coach Fitness",
    emoji: "💪",
    accentColor: "#a855f7",
    budget: "600€/mois",
    period: "2 mois",
    metrics: [
      { label: "ROAS", value: "3.6×", change: "+210%", up: true },
      { label: "Ventes", value: "+280%", change: "60 jours", up: true },
      { label: "CPM", value: "8.50€", change: "-40%", up: false },
      { label: "Reach", value: "145K", change: "+320%", up: true },
    ],
    chart: [15, 25, 22, 38, 45, 52, 60, 68, 72, 85, 92, 100],
    chartColor: "#a855f7",
    tags: ["Leads", "Retargeting", "Lookalike"],
    highlight: "+280% de ventes en 2 mois",
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 80}`).join(" ");
  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id={`grad-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color.replace("#","")})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Last dot */}
      <circle cx="100" cy={`${100 - (data[data.length-1] / max) * 80}`} r="3" fill={color} />
    </svg>
  );
}

export default function AdResults() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {ads.map((ad, i) => (
        <motion.div
          key={ad.client}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/15 transition-all duration-300"
        >
          {/* Top accent */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${ad.accentColor}, ${ad.accentColor}80)` }} />

          {/* Header */}
          <div className="p-5 border-b border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                  {ad.platformIcon}
                </div>
                <span className="text-xs font-bold text-gray-400">{ad.platform}</span>
              </div>
              <span className="text-xs text-gray-600 glass px-2 py-1 rounded-full">{ad.budget}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{ad.emoji}</span>
              <div>
                <h3 className="text-white font-black text-base">{ad.client}</h3>
                <p className="text-gray-500 text-xs">{ad.period} de campagne</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">Performance</span>
              <span className="text-xs font-bold" style={{ color: ad.accentColor }}>↑ Tendance</span>
            </div>
            <div className="h-20 w-full">
              <MiniChart data={ad.chart} color={ad.accentColor} />
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-2 px-5 pb-4">
            {ad.metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">{m.label}</p>
                <p className="text-white font-black text-lg leading-none">{m.value}</p>
                <p className={`text-[10px] font-bold mt-1 ${m.up ? "text-emerald-400" : "text-sky-400"}`}>
                  {m.up ? "▲" : "▼"} {m.change}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 px-5 pb-4">
            {ad.tags.map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full border font-semibold" style={{ color: ad.accentColor, borderColor: `${ad.accentColor}30`, background: `${ad.accentColor}10` }}>
                {t}
              </span>
            ))}
          </div>

          {/* Highlight */}
          <div className="mx-5 mb-5 rounded-xl p-3 text-center" style={{ background: `${ad.accentColor}12`, border: `1px solid ${ad.accentColor}25` }}>
            <p className="text-xs font-black" style={{ color: ad.accentColor }}>🏆 {ad.highlight}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
