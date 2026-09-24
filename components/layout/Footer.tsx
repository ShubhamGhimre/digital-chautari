import Link from "next/link";
import { LogoMark } from "@/components/layout/Logo";
import { FOOTER_COMPANY, FOOTER_LEGAL, FOOTER_SERVICES, type NavLink } from "@/lib/data/nav";
import { SITE } from "@/lib/constants";

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-[15px] font-semibold">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link className="footer-link" href={l.href}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="wrap pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <LogoMark />
              <span className="font-display font-bold">{SITE.name}</span>
            </div>
            <p className="max-w-[280px] text-[14px] text-soft">
              A creative technology company in Kathmandu, building marketing, content, and health-tech that people actually use.
            </p>
          </div>
          <LinkColumn title="Company" links={FOOTER_COMPANY} />
          <LinkColumn title="Services" links={FOOTER_SERVICES} />
          <div>
            <h4 className="mb-4 font-display text-[15px] font-semibold">Legal</h4>
            <ul className="space-y-2.5">
              {FOOTER_LEGAL.map((label) => (
                <li key={label}>
                  {/* TODO: link to real legal pages */}
                  <span className="footer-link cursor-default">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-border pt-6 text-center text-[13px] text-soft">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
