import type { ReactNode } from "react";

export function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={dark ? "pill-dark" : "pill"}>{children}</span>;
}
