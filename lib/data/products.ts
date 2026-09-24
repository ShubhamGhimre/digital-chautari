import type { Product, ProductSlug } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    slug: "eco",
    name: "Eco Creative Marketing Agency",
    category: "Digital Marketing",
    title: "Marketing that grows with your brand",
    description: "A full-service marketing agency for brands that want clear goals, honest reporting, and campaigns that improve month after month.",
    stats: [
      { value: "120+", label: "Campaigns run" },
      { value: "3.2×", label: "Average return on ad spend" },
      { value: "14", label: "Industries served" },
    ],
    cta: "Visit the agency",
  },
  {
    slug: "studio",
    name: "One Content Creation Studio",
    category: "Content Creation",
    title: "A studio for every kind of story",
    description: "Video, photography, and social content produced by one team, so your brand looks and sounds the same everywhere.",
    tags: ["Brand films", "Reels & shorts", "Product photography", "Podcasts", "Event coverage", "Motion graphics"],
    cta: "Visit the studio",
  },
  {
    slug: "physio",
    name: "Physio@Home",
    category: "Health‑Tech",
    title: "Physiotherapy that comes to you",
    description: "A booking and care platform that connects patients with qualified physiotherapists at home, and keeps exercise plans and progress in one place.",
    stats: [
      { value: "1", label: "App for patients and therapists" },
      { value: "24h", label: "Typical booking time" },
    ],
    tags: ["Home visits", "Exercise plans", "Progress tracking"],
    cta: "Learn about Physio@Home",
  },
];

export const PRODUCT_SLUGS: ProductSlug[] = PRODUCTS.map((p) => p.slug);

export const SPOTLIGHT_POINTS: string[] = [
  "Verified, qualified therapists",
  "Bookings confirmed within 24 hours",
  "Exercise plans and progress in one app",
];

export function parseProductTab(value: string | undefined): ProductSlug {
  return PRODUCT_SLUGS.find((s) => s === value) ?? "eco";
}
