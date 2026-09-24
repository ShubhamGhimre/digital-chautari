import { chipColor } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

interface IconChipProps {
  icon: LucideIcon;
  index?: number;
  small?: boolean;
  /** Use a translucent white background (for navy sections). */
  onDark?: boolean;
}

export function IconChip({ icon: Icon, index = 0, small = false, onDark = false }: IconChipProps) {
  return (
    <span
      className={`chip ${small ? "chip-sm" : ""}`}
      style={{ background: onDark ? "rgba(255,255,255,.08)" : chipColor(index) }}
      aria-hidden="true"
    >
      <Icon className={small ? "h-4 w-4" : "h-5 w-5"} />
    </span>
  );
}
