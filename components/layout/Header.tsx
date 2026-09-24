"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { buttonClass } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data/nav";

const isActive = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={buttonClass("primary", "hidden px-5 py-2.5 md:inline-flex")}>
          Contact Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M4 4l12 12M16 4L4 16" : "M3 6h14M3 10h14M3 14h14"} />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`${open ? "block" : "hidden"} border-t border-line bg-white md:hidden`}>
        <div className="wrap flex flex-col py-3">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
              className={`py-3 font-medium ${i < NAV_LINKS.length - 1 ? "border-b border-line" : ""} ${
                isActive(pathname, l.href) ? "text-teal" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={buttonClass("primary", "mt-3")}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
