import type { BlogPost, IconItem, ProcessStep, ProductTeaser, Sector, Stat, Teaser, Testimonial } from "@/lib/types";

export const HOME_HERO_STATS: Stat[] = [
  { icon: "📦", value: "3", label: "Products" },
  { icon: "👥", value: "6+", label: "Team Members" },
  { icon: "💯", value: "100%", label: "Commitment" },
];

export const FEATURES: IconItem[] = [
  { icon: "📈", title: "Growth‑Driven", text: "Every campaign and build is tied to numbers that matter to your business." },
  { icon: "🎨", title: "Creative‑First", text: "Ideas that get noticed, shaped by storytellers and designers." },
  { icon: "⚙️", title: "Tech‑Powered", text: "Modern engineering behind every website, app, and workflow." },
  { icon: "🤝", title: "Client‑Centric", text: "One point of contact from the first call to launch and beyond." },
];

export const WHO_CHECKLIST: string[] = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full‑Stack Engineering",
  "Health‑Tech Expertise",
];

export const SERVICE_TEASERS: Teaser[] = [
  { icon: "📣", title: "Digital Marketing", text: "Search, social, and paid campaigns." },
  { icon: "🎬", title: "Content Creation", text: "Video, photo, and written stories." },
  { icon: "💻", title: "Software Development", text: "Web, mobile, and health-tech platforms." },
  { icon: "✏️", title: "Branding & Design", text: "Identities that people remember." },
];

export const HOME_STATS: { value: string; label: string }[] = [
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "1M+", label: "Content Views" },
  { value: "98%", label: "Client Retention" },
];

export const PRODUCT_TEASERS: ProductTeaser[] = [
  { slug: "eco", icon: "🌿", category: "Digital Marketing", title: "Eco Creative Marketing Agency", text: "Performance-minded marketing for brands that want sustainable, measurable growth." },
  { slug: "studio", icon: "🎥", category: "Content Creation", title: "One Content Creation Studio", text: "A production studio for video, photography, and social content under one roof." },
  { slug: "physio", icon: "🩺", category: "Health‑Tech", title: "Physio@Home", text: "Physiotherapy that comes to the patient, with booking and follow-up built in." },
];

export const SECTORS: Sector[] = [
  { icon: "🏥", title: "Healthcare", text: "Clinics, care providers, and health startups." },
  { icon: "🛒", title: "E‑Commerce", text: "Online stores and marketplaces." },
  { icon: "🏠", title: "Real Estate", text: "Developers, agents, and property portals." },
  { icon: "🎓", title: "Education", text: "Schools, colleges, and learning platforms." },
  { icon: "🏔️", title: "Tourism & Hospitality", text: "Hotels, treks, and travel brands." },
  { icon: "📰", title: "Media & Publishing", text: "Publishers, channels, and creators." },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: "🔍", title: "Discover", text: "We learn your goals, audience, and constraints before writing a single line or script." },
  { icon: "✏️", title: "Design", text: "Strategy, wireframes, and creative direction you can react to early." },
  { icon: "🛠️", title: "Develop", text: "Agile sprints with regular demos, so nothing arrives as a surprise." },
  { icon: "🚀", title: "Deliver", text: "Launch, hand-over, and support once you are live." },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "They turned a vague idea into a launch plan in two weeks. Our bookings doubled within the quarter.", name: "Sunita Rai", role: "Director, Himalayan Stay" },
  { quote: "The content team understood our tone right away. Our videos now bring in more inquiries than our ads.", name: "Prakash Shrestha", role: "Founder, Urban Cart Nepal" },
  { quote: "Clear updates, fair pricing, and a website our staff can actually manage themselves.", name: "Dr. Anjali Sharma", role: "Owner, CareFirst Clinic" },
];

export const BLOG_POSTS: BlogPost[] = [
  { category: "Marketing", date: "Sep 12, 2026", readTime: "5 min read", title: "How small Nepali brands can win on search", excerpt: "A practical checklist for showing up when customers look for you in Nepali and English.", gradient: "linear-gradient(135deg,#0F9488,#7FAE3A)" },
  { category: "Content", date: "Aug 28, 2026", readTime: "4 min read", title: "Shooting better video on a small budget", excerpt: "Lighting, sound, and planning tricks our studio uses on every shoot.", gradient: "linear-gradient(135deg,#E0A930,#FDF1DE)" },
  { category: "Health‑Tech", date: "Aug 10, 2026", readTime: "6 min read", title: "Why home physiotherapy needs better software", excerpt: "What we learned building booking and follow-up tools for patients and therapists.", gradient: "linear-gradient(135deg,#1E6FB0,#0F9488)" },
];
