import type { ContactInfoItem, Department } from "@/lib/types";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Megaphone,
  Clapperboard,
  Monitor,
  Handshake,
} from "lucide-react";

// TODO: replace these placeholder details with real contact information.
export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: MapPin, title: "Address", text: "Kathmandu, Nepal" },
  { icon: Mail, title: "Email", text: "hello@digitalchautari.com" },
  { icon: Phone, title: "Phone", text: "+977 01-0000000" },
  { icon: Clock, title: "Business Hours", text: "Sun–Fri, 10:00–18:00" },
];

export const DEPARTMENTS: Department[] = [
  { icon: Megaphone, name: "Marketing", email: "marketing@digitalchautari.com" },
  { icon: Clapperboard, name: "Content Studio", email: "studio@digitalchautari.com" },
  { icon: Monitor, name: "Software Dev", email: "dev@digitalchautari.com" },
  { icon: Handshake, name: "Business Dev", email: "business@digitalchautari.com" },
];

export const RESPONSE_TIMES: { channel: string; time: string }[] = [
  { channel: "Email", time: "24h" },
  { channel: "Proposals", time: "2–3 days" },
  { channel: "Urgent", time: "Same day" },
];
