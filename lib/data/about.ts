import type { IconItem, RoadmapItem, TeamRole } from "@/lib/types";

export const ABOUT_TILES: { value: string; label: string; tone: "teal" | "navy" | "white" | "gold" }[] = [
  { value: "2025", label: "Founded", tone: "teal" },
  { value: "3", label: "Products", tone: "navy" },
  { value: "Kathmandu", label: "HQ", tone: "white" },
  { value: "7+", label: "Team Members", tone: "gold" },
];

export const VALUES: IconItem[] = [
  { icon: "🔥", title: "Passion", text: "We care about the outcome as much as you do." },
  { icon: "💡", title: "Creativity", text: "We look for the fresh angle before the familiar one." },
  { icon: "🏅", title: "Excellence", text: "We check our work twice and ship it once." },
  { icon: "🤝", title: "Collaboration", text: "Clients sit in our team, not outside it." },
];

export const TRUST: IconItem[] = [
  { icon: "📋", title: "ISO 9001 Ready", text: "Our processes are documented and built to meet quality-management standards." },
  { icon: "🔒", title: "Data Protection", text: "Client data is access-controlled, backed up, and never reused." },
  { icon: "🌍", title: "Global Delivery", text: "We work with clients and collaborators across time zones." },
  { icon: "🇳🇵", title: "Pan‑Nepal Network", text: "Partners and creators in cities and districts across Nepal." },
];

export const TEAM: TeamRole[] = [
  { role: "Founder & CEO", text: "Sets direction and leads client relationships." },
  { role: "Co‑Founder & COO", text: "Keeps projects, people, and budgets on track." },
  { role: "Front‑End Developer", text: "Builds fast, accessible interfaces." },
  { role: "Back‑End Developer", text: "Designs APIs, data, and integrations." },
  { role: "Marketing Lead", text: "Plans and measures campaigns." },
  { role: "Sales Executive", text: "Helps clients choose the right service." },
  { role: "Business Development Officer", text: "Builds partnerships and new ventures." },
];

export const ROADMAP: RoadmapItem[] = [
  { year: "2025", title: "The Idea", text: "A conversation among friends turns into a plan for a creative technology company." },
  { year: "2025", title: "First Products", text: "Eco Creative Marketing Agency and One Content Creation Studio open their doors." },
  { year: "2026", title: "Health‑Tech Entry", text: "Physio@Home extends our work into healthcare software." },
  { year: "2026", title: "Company Registration", text: "Digital Chautari becomes a formally registered company." },
];
