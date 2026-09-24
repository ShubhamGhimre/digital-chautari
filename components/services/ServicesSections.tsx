import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { CardShell, DarkCardShell } from "@/components/ui/Card";
import { Check } from "@/components/ui/Check";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { INDUSTRIES, PRICING_TIERS, SERVICE_CATEGORIES, WHY_US } from "@/lib/data/services";

export function ServiceCategories() {
  return (
    <Section>
      <div className="space-y-12">
        {SERVICE_CATEGORIES.map((c, ci) => (
          <div key={c.title} className="grid items-start gap-6 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <IconChip icon={c.icon} index={ci} />
              <h2 className="mt-4 font-display text-[24px] font-bold md:text-[28px]">{c.title}</h2>
              <p className="mt-2 max-w-[420px] text-muted">{c.text}</p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {c.subServices.map((s, i) => (
                <CardShell key={s.title} index={i}>
                  <h3 className="font-display text-[16px] font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] text-muted">{s.text}</p>
                </CardShell>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section>
      <SectionHead
        eyebrow="Pricing"
        title="Simple plans, clear prices"
        sub="Monthly plans for marketing and content. Software projects are quoted after a discovery call."
        center
      />
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {PRICING_TIERS.map((t, i) =>
          t.popular ? (
            <DarkCardShell key={t.name} index={i} className="relative flex flex-col p-7">
              <span className="absolute -top-3 left-7 rounded-2xl bg-gold px-3.5 py-1 text-[12.5px] font-bold text-navy">Most Popular</span>
              <h3 className="font-display text-[20px] font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-[14px] text-soft">{t.blurb}</p>
              <div className="mt-5">
                <span className="font-display text-[34px] font-extrabold text-white">{t.price}</span>
                <span className="text-soft">{t.per}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[14.5px] text-softer">
                    <Check dark />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={buttonClass("gold", "mt-7")}>
                {t.cta}
              </Link>
            </DarkCardShell>
          ) : (
            <CardShell key={t.name} index={i} className="flex flex-col p-7">
              <h3 className="font-display text-[20px] font-semibold">{t.name}</h3>
              <p className="mt-1 text-[14px] text-muted">{t.blurb}</p>
              <div className="mt-5">
                <span className="font-display text-[34px] font-extrabold">{t.price}</span>
                <span className="text-muted">{t.per}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[14.5px]">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={buttonClass("ghost", "mt-7")}>
                {t.cta}
              </Link>
            </CardShell>
          ),
        )}
      </div>
    </Section>
  );
}

export function Industries() {
  return (
    <Section tight>
      <SectionHead eyebrow="Industries" title="Who we work with" />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map((x, i) => (
          <CardShell key={x.label} index={i} className="py-6 text-center">
            <div className="flex justify-center">
              <IconChip icon={x.icon} index={i} />
            </div>
            <div className="mt-3 font-display text-[15px] font-semibold">{x.label}</div>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}

export function WhyUs() {
  return (
    <Section dark>
      <SectionHead eyebrow="Why work with us" title="What you get on every project" dark />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w, i) => (
          <DarkCardShell key={w} index={i} className="no-lift flex items-center gap-3 py-5">
            <Check dark />
            <span className="font-medium text-white">{w}</span>
          </DarkCardShell>
        ))}
      </div>
    </Section>
  );
}
