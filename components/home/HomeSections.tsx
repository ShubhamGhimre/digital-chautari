import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardShell, DarkCardShell } from "@/components/ui/Card";
import { Check } from "@/components/ui/Check";
import { IconChip } from "@/components/ui/IconChip";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Star } from "lucide-react";
import { chipColor } from "@/lib/constants";
import {
  BLOG_POSTS,
  FEATURES,
  HOME_STATS,
  PROCESS_STEPS,
  PRODUCT_TEASERS,
  SECTORS,
  SERVICE_TEASERS,
  TESTIMONIALS,
  WHO_CHECKLIST,
} from "@/lib/data/home";

export function FeatureStrip() {
  return (
    <Section tight>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Card key={f.title} {...f} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4">
            <Pill>Who we are</Pill>
          </div>
          <h2 className="font-display text-[28px] font-bold leading-[1.15] md:text-[36px]">A Chautari where ideas meet execution</h2>
          <p className="mt-4 text-muted">
            In Nepal, a chautari is the resting place under a big tree where neighbours meet, share news, and start things together. We named our company after that spirit: an open space where good ideas get heard.
          </p>
          <p className="mt-3 text-muted">
            Today we turn those conversations into campaigns, content, and software. Our team of strategists, designers, and engineers works side by side with clients, so what you approve is what gets built.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHO_CHECKLIST.map((x) => (
              <li key={x} className="flex items-center gap-2.5 font-medium">
                <Check />
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about">Meet the Team →</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5">
          {SERVICE_TEASERS.map((t, i) => (
            <CardShell key={t.title} index={i}>
              <IconChip icon={t.icon} index={i} small />
              <h3 className="mt-3 font-display text-[16px] font-semibold">{t.title}</h3>
              <p className="mt-1 text-[13.5px] text-muted">{t.text}</p>
            </CardShell>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function StatsBanner() {
  return (
    <Section dark tight>
      <SectionHead eyebrow="Our track record" title="Work that speaks in numbers" dark />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {HOME_STATS.map((s, i) => (
          <DarkCardShell key={s.label} index={i} className="no-lift py-8 text-center">
            <div className="grad font-display text-[34px] font-extrabold leading-none md:text-[42px]">{s.value}</div>
            <div className="mt-2 text-[14px] text-soft">{s.label}</div>
          </DarkCardShell>
        ))}
      </div>
    </Section>
  );
}

export function ProductsTeaser() {
  return (
    <Section>
      <SectionHead
        eyebrow="Our products"
        title="Three ventures, one vision"
        sub="Each venture solves a different problem, and all of them share the same standard of craft."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {PRODUCT_TEASERS.map((p, i) => (
          <CardShell key={p.slug} index={i} className="flex flex-col">
            <IconChip icon={p.icon} index={i} />
            <span className="mt-4 text-[13px] font-semibold text-teal-dark">{p.category}</span>
            <h3 className="mt-1 font-display text-[18px] font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-[14.5px] text-muted">{p.text}</p>
            <Link href={`/products?tab=${p.slug}`} className="mt-5 font-semibold text-teal hover:text-teal-dark">
              Learn more →
            </Link>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}

export function Sectors() {
  return (
    <Section tight>
      <SectionHead eyebrow="Sectors we serve" title="Experience across industries" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SECTORS.map((s, i) => (
          <Card key={s.title} {...s} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function ProcessSteps() {
  return (
    <Section dark>
      <SectionHead eyebrow="How we work" title="Our 4‑step process" dark />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((s, i) => (
          <DarkCardShell key={s.title} index={i}>
            <div className="flex items-center justify-between">
              <IconChip icon={s.icon} onDark />
              <span className="font-display text-[22px] font-bold text-gold">{i + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-[18px] font-semibold text-white">{s.title}</h3>
            <p className="mt-1.5 text-[14.5px] text-soft">{s.text}</p>
          </DarkCardShell>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section tight>
      <SectionHead eyebrow="Testimonials" title="What clients say" />
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <CardShell key={t.name} as="figure" index={i} className="flex flex-col">
            <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-[15px]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full font-display font-bold text-teal-dark"
                style={{ background: chipColor(i) }}
                aria-hidden="true"
              >
                {t.name[0]}
              </span>
              <span>
                <span className="block text-[14.5px] font-semibold">{t.name}</span>
                <span className="block text-[13px] text-muted">{t.role}</span>
              </span>
            </figcaption>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}

export function BlogTeaser() {
  return (
    <Section>
      <SectionHead eyebrow="Blog" title="Latest from our blog" />
      <div className="grid gap-5 md:grid-cols-3">
        {BLOG_POSTS.map((p, i) => (
          <CardShell key={p.title} as="article" index={i} className="flex flex-col overflow-hidden p-0">
            <div className="h-[150px]" style={{ background: p.gradient }} role="img" aria-label="Article cover placeholder" />
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-block self-start rounded-2xl bg-[#E7F2F4] px-3 py-1 text-[12.5px] font-semibold text-teal-dark">
                {p.category}
              </span>
              <div className="mt-3 text-[13px] text-muted">
                {p.date} · {p.readTime}
              </div>
              <h3 className="mt-1.5 font-display text-[17px] font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] text-muted">{p.excerpt}</p>
              {/* TODO: link to real blog posts */}
              <span className="mt-4 cursor-default font-semibold text-teal">Read more →</span>
            </div>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}
