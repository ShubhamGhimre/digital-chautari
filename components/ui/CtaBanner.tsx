import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-16">
      <div className="wrap">
        <Reveal
          className="rounded-[20px] px-7 py-14 text-center text-white md:px-14"
          style={{ background: "linear-gradient(120deg,#0F9488 0%,#1E6FB0 100%)" }}
        >
          <h2 className="mx-auto max-w-[680px] font-display text-[28px] font-bold leading-[1.15] md:text-[38px]">{title}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
