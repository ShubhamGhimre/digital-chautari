import type { PricingTier, ServiceCategory } from "@/lib/types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: "📣",
    title: "Digital Marketing",
    text: "Campaigns built around what your customers search for, scroll past, and click on.",
    subServices: [
      { title: "SEO & SEM", text: "Be found on search, in Nepali and English." },
      { title: "Social Media Marketing", text: "Consistent content and community management." },
      { title: "Paid Advertising", text: "Google, Meta, and YouTube with clear budgets." },
      { title: "Analytics & Reporting", text: "Plain-language reports every month." },
    ],
  },
  {
    icon: "🎬",
    title: "Content Creation",
    text: "Stories told in video, photo, and words that fit your brand voice.",
    subServices: [
      { title: "Video Production", text: "From short reels to brand films." },
      { title: "Photography", text: "Product, team, and event shoots." },
      { title: "Copywriting", text: "Website, ad, and campaign copy." },
      { title: "Graphic Design", text: "Social kits, decks, and print material." },
    ],
  },
  {
    icon: "💻",
    title: "Software Development",
    text: "Web and mobile products built to be maintained, not just launched.",
    subServices: [
      { title: "Web Applications", text: "Fast, accessible sites and portals." },
      { title: "Mobile Apps", text: "iOS and Android from one codebase." },
      { title: "Health‑Tech Platforms", text: "Booking, records, and follow-up tools." },
      { title: "API & Integrations", text: "Connect payments, CRMs, and more." },
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  { name: "Starter", price: "Rs 15,000", per: "/mo", blurb: "For small businesses getting started online.", features: ["Social media management (2 platforms)", "8 designed posts per month", "Basic SEO setup", "Monthly performance report"], cta: "Get Started" },
  { name: "Professional", price: "Rs 45,000", per: "/mo", blurb: "For growing teams that need steady results.", features: ["Everything in Starter", "Paid advertising management", "2 short videos per month", "Website updates and support", "Dedicated project manager"], cta: "Choose Professional", popular: true },
  { name: "Enterprise", price: "Custom", per: "", blurb: "For organizations with larger or specialised needs.", features: ["Custom software development", "Full content production team", "Priority support and SLA", "Quarterly strategy workshops"], cta: "Talk to Sales" },
];

export const INDUSTRIES: { icon: string; label: string }[] = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🛒", label: "E‑Commerce" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "🎓", label: "Education" },
  { icon: "🏔️", label: "Tourism" },
  { icon: "📰", label: "Media" },
];

export const WHY_US: string[] = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post‑launch support",
  "Scalable architecture",
  "Cross‑platform expertise",
];
