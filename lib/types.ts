export interface IconItem {
  icon: string;
  title: string;
  text: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface Teaser {
  icon: string;
  title: string;
  text: string;
}

export type ProductSlug = "eco" | "studio" | "physio";

export interface ProductTeaser {
  slug: ProductSlug;
  icon: string;
  category: string;
  title: string;
  text: string;
}

export interface Sector {
  icon: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface BlogPost {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  gradient: string;
}

export interface ServiceCategory {
  icon: string;
  title: string;
  text: string;
  subServices: { title: string; text: string }[];
}

export interface PricingTier {
  name: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  category: string;
  title: string;
  description: string;
  stats?: { value: string; label: string }[];
  tags?: string[];
  cta: string;
}

export interface TeamRole {
  role: string;
  text: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  text: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  text: string;
}

export interface Department {
  icon: string;
  name: string;
  email: string;
}

export const PROJECT_TYPES = ["Website", "Marketing", "Content", "Health-Tech", "Other"] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  projectType?: ProjectType;
  message: string;
  website?: string; // honeypot
}
