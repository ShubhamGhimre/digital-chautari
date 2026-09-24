import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  dark?: boolean;
  tight?: boolean;
  className?: string;
  id?: string;
}

export function Section({ children, dark = false, tight = false, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`${dark ? "bg-navy text-white" : ""} ${tight ? "py-12" : "py-16"} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}
