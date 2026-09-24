import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";

interface SectionHeadProps {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionHead({ eyebrow, title, sub, dark = false, center = false }: SectionHeadProps) {
  return (
    <div className={`mb-10 max-w-[720px] ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-4">
          <Pill dark={dark}>{eyebrow}</Pill>
        </div>
      )}
      <h2 className={`font-display text-[28px] font-bold leading-[1.15] md:text-[36px] ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-3 ${dark ? "text-soft" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}
