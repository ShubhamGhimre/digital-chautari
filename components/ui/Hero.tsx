import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";

interface HeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function Hero({ eyebrow, title, lede, actions, children }: HeroProps) {
  return (
    <section className="hero-bg pt-[84px] pb-12">
      <div className="wrap">
        <div className="max-w-[720px]">
          <div className="mb-5">
            <Pill>{eyebrow}</Pill>
          </div>
          <h1 className="font-display text-[36px] font-extrabold leading-[1.08] sm:text-[44px] md:text-[54px]">{title}</h1>
          <p className="mt-5 max-w-[660px] text-[17px] text-muted">{lede}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
