"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  TrendingUp, Monitor, Palette, Plus, Trash2, Eye, EyeOff,
  LogOut, Lock, Loader2, X, Check, AlertCircle, ImagePlus,
} from "lucide-react";
import type { Realisation, RealisationCategory, AdsData, SiteData, FlyerData } from "@/types/realisation";
import OmbraieLogoSVG from "@/components/ui/OmbraieLogoSVG";

// ─── AUTH ──────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) {
      const { token } = await res.json();
      sessionStorage.setItem("admin_token", token);
      onLogin(token);
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FAFAF9" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <OmbraieLogoSVG size={36} showText light className="mx-auto mb-4" />
          <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <Lock size={20} className="text-purple-700" />
          </div>
          <h1 className="text-xl font-black text-gray-900">Panel Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Gérer les réalisations</p>
        </div>
        <a href="/" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors mb-4">
          ← Retour au site
        </a>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Mot de passe"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-purple-400 transition-colors"
            autoFocus
          />
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle size={14} />
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white disabled:opacity-60 transition-opacity"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── IMAGE UPLOAD ─────────────────────────────────────────────

function ImageUpload({ value, onChange, token }: { value?: string; onChange: (url: string) => void; token: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const upload = async (file: File) => {
    setUploading(true);
    setError("");
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    setUploading(false);
    if (!res.ok) {
      const j = await res.json();
      setError(j.error ?? "Erreur upload");
      return;
    }
    const { url } = await res.json();
    onChange(url);
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Image (optionnel)</label>
      <div
        className="relative border-2 border-dashed rounded-xl overflow-hidden cursor-pointer transition-all"
        style={{ borderColor: value ? "#7c3aed40" : "#e5e7eb", background: value ? "transparent" : "#f9fafb" }}
        onClick={() => ref.current?.click()}
      >
        {value ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="preview" className="w-full h-40 object-cover" />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={13} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 gap-2 text-gray-400">
            {uploading ? <Loader2 size={22} className="animate-spin text-purple-600" /> : <ImagePlus size={22} />}
            <span className="text-xs">{uploading ? "Upload en cours..." : "Cliquer pour ajouter une image"}</span>
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      {/* URL manuel comme fallback */}
      <input
        type="url"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ou coller une URL d'image..."
        className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all"
        onClick={(e) => e.stopPropagation()}
      />
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => {
        const f = e.target.files?.[0];
        if (f) upload(f);
      }} />
    </div>
  );
}

// ─── FORMS ────────────────────────────────────────────────────

const ACCENT_PRESETS = [
  { label: "Violet", value: "#7c3aed" },
  { label: "Bleu", value: "#0284c7" },
  { label: "Rose", value: "#be185d" },
  { label: "Vert", value: "#059669" },
  { label: "Ambre", value: "#d97706" },
  { label: "Indigo", value: "#4338ca" },
];

function ColorPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {ACCENT_PRESETS.map((c) => (
        <button
          key={c.value}
          type="button"
          onClick={() => onChange(c.value)}
          className="w-8 h-8 rounded-lg border-2 transition-all flex items-center justify-center"
          style={{
            background: c.value,
            borderColor: value === c.value ? "#111" : "transparent",
          }}
          title={c.label}
        >
          {value === c.value && <Check size={12} color="white" />}
        </button>
      ))}
    </div>
  );
}

function InputField({
  label, name, value, onChange, placeholder, type = "text", required,
}: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
      />
    </div>
  );
}

function SelectField({
  label, value, onChange, options, required,
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { label: string; value: string }[]; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

// Ads Form
function AdsForm({ initial, onSubmit, loading, token }: {
  initial?: AdsData; onSubmit: (d: AdsData) => void; loading: boolean; token: string;
}) {
  const [d, setD] = useState<AdsData>(initial ?? {
    client: "", platform: "Facebook & Instagram Ads", accent: "#7c3aed",
  });
  const set = (k: keyof AdsData) => (v: string) => setD((p) => ({ ...p, [k]: v }));
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(d); }} className="flex flex-col gap-4">
      <ImageUpload value={d.image_url} onChange={(url) => setD((p) => ({ ...p, image_url: url }))} token={token} />
      <InputField label="Client *" name="client" value={d.client} onChange={set("client")} placeholder="Boutique Mode" required />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Secteur" name="sector" value={d.sector ?? ""} onChange={set("sector")} placeholder="Vêtements · Toulouse" />
        <SelectField label="Plateforme" value={d.platform} onChange={set("platform")} options={[
          { label: "Facebook & Instagram Ads", value: "Facebook & Instagram Ads" },
          { label: "Google Ads", value: "Google Ads" },
          { label: "Meta + Google Ads", value: "Meta + Google Ads" },
          { label: "TikTok Ads", value: "TikTok Ads" },
        ]} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="ROAS (ex: 4.8)" name="roas" value={d.roas ?? ""} onChange={set("roas")} placeholder="4.8" />
        <InputField label="CA généré (€)" name="ca" value={d.ca ?? ""} onChange={set("ca")} placeholder="22400" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Durée & budget" name="duration" value={d.duration ?? ""} onChange={set("duration")} placeholder="3 mois · 800€/mois" />
        <InputField label="Impressions" name="impressions" value={d.impressions ?? ""} onChange={set("impressions")} placeholder="124 000" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Couleur accent</label>
        <ColorPicker value={d.accent} onChange={set("accent")} />
      </div>
      <SubmitBtn loading={loading} />
    </form>
  );
}

// Sites Form
function SitesForm({ initial, onSubmit, loading, token }: {
  initial?: SiteData; onSubmit: (d: SiteData) => void; loading: boolean; token: string;
}) {
  const [d, setD] = useState<SiteData>(initial ?? {
    name: "", type: "Site Vitrine", accent: "#0284c7",
  });
  const [screenshotLoading, setScreenshotLoading] = useState(false);
  const set = (k: keyof SiteData) => (v: string) => setD((p) => ({ ...p, [k]: v }));

  const captureScreenshot = async () => {
    const raw = d.url?.trim();
    if (!raw) return;
    const full = raw.startsWith("http") ? raw : `https://${raw}`;
    setScreenshotLoading(true);
    // Force le service à régénérer la capture (évite le cache)
    const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(full)}?w=1200&h=800&vp=1440x900`;
    // Préchargement pour vérifier que l'image est disponible
    const img = new Image();
    img.onload = () => {
      setD((p) => ({ ...p, image_url: screenshotUrl }));
      setScreenshotLoading(false);
    };
    img.onerror = () => {
      // mShots peut retourner une image grise lors de la première requête — on l'utilise quand même
      setD((p) => ({ ...p, image_url: screenshotUrl }));
      setScreenshotLoading(false);
    };
    img.src = screenshotUrl;
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(d); }} className="flex flex-col gap-4">
      <ImageUpload value={d.image_url} onChange={(url) => setD((p) => ({ ...p, image_url: url }))} token={token} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Nom du client *" name="name" value={d.name} onChange={set("name")} placeholder="Art & Maison Rénovation" required />
        <SelectField label="Type" value={d.type} onChange={set("type")} options={[
          { label: "Site Vitrine", value: "Site Vitrine" },
          { label: "E-commerce", value: "E-commerce" },
        ]} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">URL du site</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={d.url ?? ""}
              onChange={(e) => set("url")(e.target.value)}
              placeholder="monsite.fr"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
            />
            <button
              type="button"
              onClick={captureScreenshot}
              disabled={!d.url?.trim() || screenshotLoading}
              title="Générer une capture d'écran automatique"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white disabled:opacity-40 transition-opacity flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
            >
              {screenshotLoading ? <Loader2 size={13} className="animate-spin" /> : "📸"}
            </button>
          </div>
          {d.url?.trim() && !d.image_url && (
            <p className="text-xs text-purple-500 mt-1">Clique sur 📸 pour capturer le site automatiquement</p>
          )}
        </div>
        <InputField label="Secteur" name="sector" value={d.sector ?? ""} onChange={set("sector")} placeholder="Artisan bâtiment" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Délai livraison" name="delivery_time" value={d.delivery_time ?? ""} onChange={set("delivery_time")} placeholder="3 semaines" />
        <InputField label="Prix (€)" name="price" value={d.price ?? ""} onChange={set("price")} placeholder="1200" />
      </div>
      <InputField label="Témoignage client" name="testimonial" value={d.testimonial ?? ""} onChange={set("testimonial")} placeholder="Travail impeccable, très professionnel..." />
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Couleur accent</label>
        <ColorPicker value={d.accent} onChange={set("accent")} />
      </div>
      <SubmitBtn loading={loading} />
    </form>
  );
}

// Flyers Form
function FlyersForm({ initial, onSubmit, loading, token }: {
  initial?: FlyerData; onSubmit: (d: FlyerData) => void; loading: boolean; token: string;
}) {
  const [d, setD] = useState<FlyerData>(initial ?? {
    brand: "", type: "Flyer A5 Recto/Verso", color1: "#7c3aed", color2: "#a855f7",
  });
  const set = (k: keyof FlyerData) => (v: string) => setD((p) => ({ ...p, [k]: v }));
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(d); }} className="flex flex-col gap-4">
      <ImageUpload value={d.image_url} onChange={(url) => setD((p) => ({ ...p, image_url: url }))} token={token} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Marque / Client *" name="brand" value={d.brand} onChange={set("brand")} placeholder="Restaurant Le Gaulois" required />
        <SelectField label="Type" value={d.type} onChange={set("type")} options={[
          { label: "Flyer A5 Recto", value: "Flyer A5 Recto" },
          { label: "Flyer A5 Recto/Verso", value: "Flyer A5 Recto/Verso" },
          { label: "Flyer A4 Recto", value: "Flyer A4 Recto" },
          { label: "Affiche A3", value: "Affiche A3" },
          { label: "Pack Complet", value: "Pack Complet" },
          { label: "Format Réseaux Sociaux", value: "Format Réseaux Sociaux" },
        ]} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Délai livraison" name="delivery_time" value={d.delivery_time ?? ""} onChange={set("delivery_time")} placeholder="4 jours" />
        <InputField label="Prix (€)" name="price" value={d.price ?? ""} onChange={set("price")} placeholder="220" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Tag / Accroche" name="tag" value={d.tag ?? ""} onChange={set("tag")} placeholder="–20% ce weekend" />
        <InputField label="Exemplaires" name="prints" value={d.prints ?? ""} onChange={set("prints")} placeholder="500 ex." />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Couleur principale</label>
          <ColorPicker value={d.color1} onChange={set("color1")} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Couleur secondaire</label>
          <ColorPicker value={d.color2} onChange={set("color2")} />
        </div>
      </div>
      <SubmitBtn loading={loading} />
    </form>
  );
}

function SubmitBtn({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white disabled:opacity-60 transition-opacity"
      style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
    >
      {loading ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
      {loading ? "Enregistrement..." : "Enregistrer la réalisation"}
    </button>
  );
}

// ─── MODAL ────────────────────────────────────────────────────

function Modal({
  category, onClose, onSaved, token, editing,
}: {
  category: RealisationCategory;
  onClose: () => void;
  onSaved: () => void;
  token: string;
  editing?: Realisation;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const save = async (data: AdsData | SiteData | FlyerData) => {
    setLoading(true);
    setError("");
    try {
      const url = editing ? `/api/realisations/${editing.id}` : "/api/realisations";
      const method = editing ? "PUT" : "POST";
      const body = editing ? { data } : { category, data };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Erreur serveur");
      }
      onSaved();
      onClose();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  const cat = category;
  const labels: Record<RealisationCategory, string> = {
    ads: "Publicité", sites: "Site Web", flyers: "Flyer & Visuel",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}>
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl" style={{ marginBottom: "2rem" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-black text-gray-900">
            {editing ? "Modifier" : "Ajouter"} — {labels[cat]}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-5">
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-xl">
              <AlertCircle size={14} />
              {error}
            </div>
          )}
          {cat === "ads" && <AdsForm initial={editing?.data as AdsData} onSubmit={save} loading={loading} token={token} />}
          {cat === "sites" && <SitesForm initial={editing?.data as SiteData} onSubmit={save} loading={loading} token={token} />}
          {cat === "flyers" && <FlyersForm initial={editing?.data as FlyerData} onSubmit={save} loading={loading} token={token} />}
        </div>
      </div>
    </div>
  );
}

// ─── ENTRY CARD ───────────────────────────────────────────────

function EntryCard({
  entry, token, onDelete, onToggle, onEdit,
}: {
  entry: Realisation;
  token: string;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: () => void;
}) {
  const [delLoading, setDelLoading] = useState(false);
  const [togLoading, setTogLoading] = useState(false);

  const d = entry.data as unknown as Record<string, string>;
  const title = d.client || d.name || d.brand || "Sans titre";
  const sub =
    entry.category === "ads"
      ? `ROAS ${d.roas}× · +${Number(d.ca).toLocaleString("fr-FR")}€ CA`
      : entry.category === "sites"
      ? `${d.type} · ${d.price}€ · ${d.delivery_time}`
      : `${d.type} · ${d.price}€ · ${d.delivery_time}`;

  const accentMap: Record<RealisationCategory, string> = {
    ads: "#7c3aed", sites: "#0284c7", flyers: "#be185d",
  };
  const accent = d.accent || d.color1 || accentMap[entry.category];

  const handleDelete = async () => {
    if (!confirm(`Supprimer "${title}" ?`)) return;
    setDelLoading(true);
    await fetch(`/api/realisations/${entry.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setDelLoading(false);
    onDelete();
  };

  const handleToggle = async () => {
    setTogLoading(true);
    await fetch(`/api/realisations/${entry.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ visible: !entry.visible }),
    });
    setTogLoading(false);
    onToggle();
  };

  return (
    <div
      className="flex items-center gap-3 p-4 rounded-xl border transition-all"
      style={{
        background: entry.visible ? "white" : "#f9fafb",
        borderColor: entry.visible ? "rgba(0,0,0,0.08)" : "#e5e7eb",
        opacity: entry.visible ? 1 : 0.6,
      }}
    >
      <div
        className="w-2 h-10 rounded-full flex-shrink-0"
        style={{ background: accent }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 text-sm truncate">{title}</p>
        <p className="text-gray-400 text-xs mt-0.5 truncate">{sub}</p>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={onEdit}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-700 hover:bg-purple-50 transition-all"
          title="Modifier"
        >
          <Monitor size={14} />
        </button>
        <button
          onClick={handleToggle}
          disabled={togLoading}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-50"
          title={entry.visible ? "Masquer" : "Afficher"}
        >
          {togLoading ? <Loader2 size={14} className="animate-spin" /> : entry.visible ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
        <button
          onClick={handleDelete}
          disabled={delLoading}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all disabled:opacity-50"
          title="Supprimer"
        >
          {delLoading ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
        </button>
      </div>
    </div>
  );
}

// ─── CATEGORY TAB ─────────────────────────────────────────────

const categoryConfig = [
  { id: "ads" as RealisationCategory, label: "Publicités", Icon: TrendingUp, accent: "#7c3aed" },
  { id: "sites" as RealisationCategory, label: "Sites Web", Icon: Monitor, accent: "#0284c7" },
  { id: "flyers" as RealisationCategory, label: "Flyers & Visuels", Icon: Palette, accent: "#be185d" },
];

// ─── DASHBOARD ────────────────────────────────────────────────

function Dashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [reals, setReals] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<RealisationCategory>("ads");
  const [modal, setModal] = useState<{
    open: boolean;
    category: RealisationCategory;
    editing?: Realisation;
  }>({ open: false, category: "ads" });

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/realisations", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) setReals(await res.json());
    setLoading(false);
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const filtered = reals.filter((r) => r.category === activeTab);
  const activeConf = categoryConfig.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF9" }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OmbraieLogoSVG size={26} showText light />
            <span className="text-xs text-gray-400 font-medium px-2 py-0.5 bg-gray-100 rounded-full">Admin</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <LogOut size={14} />
            Déconnexion
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900">Réalisations</h1>
          <p className="text-gray-500 text-sm mt-1">
            {reals.length} réalisation{reals.length !== 1 ? "s" : ""} au total
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6">
          {categoryConfig.map((c) => {
            const count = reals.filter((r) => r.category === c.id).length;
            const isActive = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border"
                style={
                  isActive
                    ? { background: c.accent, color: "white", border: `1px solid ${c.accent}` }
                    : { background: "white", color: "#6b7280", borderColor: "rgba(0,0,0,0.08)" }
                }
              >
                <c.Icon size={14} />
                {c.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "#f3f4f6",
                    color: isActive ? "white" : "#6b7280",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* List */}
        <div className="flex flex-col gap-3 mb-4">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={24} className="animate-spin text-gray-400" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <activeConf.Icon size={32} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Aucune réalisation dans cette catégorie</p>
            </div>
          ) : (
            filtered.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                token={token}
                onDelete={load}
                onToggle={load}
                onEdit={() => setModal({ open: true, category: activeTab, editing: entry })}
              />
            ))
          )}
        </div>

        {/* Add button */}
        <button
          onClick={() => setModal({ open: true, category: activeTab })}
          className="flex items-center gap-2 w-full py-3.5 rounded-xl border-2 border-dashed text-sm font-bold transition-all hover:bg-white"
          style={{ borderColor: `${activeConf.accent}30`, color: activeConf.accent }}
        >
          <Plus size={16} className="ml-auto" />
          <span className="mr-auto">Ajouter une réalisation — {activeConf.label}</span>
        </button>
      </div>

      {/* Modal */}
      {modal.open && (
        <Modal
          category={modal.category}
          editing={modal.editing}
          token={token}
          onClose={() => setModal({ open: false, category: activeTab })}
          onSaved={load}
        />
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) setToken(saved);
  }, []);

  const logout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  };

  if (!token) return <LoginScreen onLogin={setToken} />;
  return <Dashboard token={token} onLogout={logout} />;
}
