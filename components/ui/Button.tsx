import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonKind = "primary" | "ghost" | "white" | "outline" | "gold";

export const buttonClass = (kind: ButtonKind = "primary", extra = ""): string =>
  `btn btn-${kind} ${extra}`.trim();

interface ButtonProps {
  href: string;
  kind?: ButtonKind;
  children: ReactNode;
  className?: string;
}

export function Button({ href, kind = "primary", children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={buttonClass(kind, className)}>
      {children}
    </Link>
  );
}
