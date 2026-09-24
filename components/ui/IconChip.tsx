import { chipColor } from "@/lib/constants";

interface IconChipProps {
  icon: string;
  index?: number;
  small?: boolean;
  /** Use a translucent white background (for navy sections). */
  onDark?: boolean;
}

export function IconChip({ icon, index = 0, small = false, onDark = false }: IconChipProps) {
  return (
    <span
      className={`chip ${small ? "chip-sm" : ""}`}
      style={{ background: onDark ? "rgba(255,255,255,.08)" : chipColor(index) }}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}
