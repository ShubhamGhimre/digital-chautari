import type { ContactInfoItem, Department } from "@/lib/types";

// TODO: replace these placeholder details with real contact information.
export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: "📍", title: "Address", text: "Kathmandu, Nepal" },
  { icon: "✉️", title: "Email", text: "hello@digitalchautari.com" },
  { icon: "📞", title: "Phone", text: "+977 01-0000000" },
  { icon: "🕘", title: "Business Hours", text: "Sun–Fri, 10:00–18:00" },
];

export const DEPARTMENTS: Department[] = [
  { icon: "📣", name: "Marketing", email: "marketing@digitalchautari.com" },
  { icon: "🎬", name: "Content Studio", email: "studio@digitalchautari.com" },
  { icon: "💻", name: "Software Dev", email: "dev@digitalchautari.com" },
  { icon: "🤝", name: "Business Dev", email: "business@digitalchautari.com" },
];

export const RESPONSE_TIMES: { channel: string; time: string }[] = [
  { channel: "Email", time: "24h" },
  { channel: "Proposals", time: "2–3 days" },
  { channel: "Urgent", time: "Same day" },
];
