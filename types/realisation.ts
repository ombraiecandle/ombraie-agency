export type RealisationCategory = "ads" | "sites" | "flyers";

export interface AdsData {
  client: string;
  sector?: string;
  platform: string;
  duration?: string;
  roas?: string;
  ca?: string;
  impressions?: string;
  clicks?: string;
  ctr?: string;
  cpc?: string;
  accent: string;
  image_url?: string;
}

export interface SiteData {
  name: string;
  url?: string;
  type: "Site Vitrine" | "E-commerce";
  sector?: string;
  delivery_time?: string;
  price?: string;
  testimonial?: string;
  accent: string;
  image_url?: string;
}

export interface FlyerData {
  brand: string;
  type: string;
  prints?: string;
  delivery_time?: string;
  price?: string;
  color1: string;
  color2: string;
  tag?: string;
  offers?: { label: string; price: string }[];
  promo?: string;
  address?: string;
  phone?: string;
  image_url?: string;
}

export type RealisationData = AdsData | SiteData | FlyerData;

export interface Realisation {
  id: string;
  category: RealisationCategory;
  data: RealisationData;
  visible: boolean;
  order_index: number;
  created_at: string;
}
