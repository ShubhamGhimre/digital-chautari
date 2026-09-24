import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";

interface CardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  index?: number;
  className?: string;
}

export function Card({ icon, title, text, index = 0, className = "" }: CardProps) {
  return (
    <Reveal index={index} className={`card ${className}`}>
      <IconChip icon={icon} index={index} />
      <h3 className="mt-4 font-display text-[17px] font-semibold">{title}</h3>
      <p className="mt-1.5 text-[14.5px] text-muted">{text}</p>
    </Reveal>
  );
}

export function DarkCard({ icon, title, text, index = 0, className = "" }: CardProps) {
  return (
    <Reveal index={index} className={`card-dark ${className}`}>
      <IconChip icon={icon} onDark />
      <h3 className="mt-4 font-display text-[17px] font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-[14.5px] text-soft">{text}</p>
    </Reveal>
  );
}

/** Plain white card shell with reveal, for custom content. */
export function CardShell({
  children,
  index = 0,
  className = "",
  as,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "article" | "figure";
}) {
  return (
    <Reveal index={index} as={as} className={`card ${className}`}>
      {children}
    </Reveal>
  );
}

export function DarkCardShell({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <Reveal index={index} className={`card-dark ${className}`}>
      {children}
    </Reveal>
  );
}
