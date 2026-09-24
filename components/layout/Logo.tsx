import Link from "next/link";
import { SITE } from "@/lib/constants";

export function LogoMark() {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-[10px] font-display text-[15px] font-extrabold text-white"
      style={{ background: "linear-gradient(135deg,#0F9488,#0B6F66)" }}
      aria-hidden="true"
    >
      DC
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
      <LogoMark />
      <span className="leading-tight">
        <span className="block font-display text-[16px] font-bold">{SITE.name}</span>
        <span className="block text-[11.5px] text-muted">{SITE.tagline}</span>
      </span>
    </Link>
  );
}
