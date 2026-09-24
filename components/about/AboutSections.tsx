import { Card, CardShell, DarkCard } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { chipColor } from "@/lib/constants";
import { ABOUT_TILES, ROADMAP, TEAM, TRUST, VALUES } from "@/lib/data/about";

const TILE_STYLES: Record<string, { box: string; label: string }> = {
  teal: { box: "bg-teal text-white", label: "text-white/80" },
  navy: { box: "bg-navy text-white", label: "text-white/70" },
  white: { box: "border border-line bg-white", label: "text-muted" },
  gold: { box: "bg-gold text-navy", label: "text-navy/75" },
};

export function StoryBlock() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-[28px] font-bold leading-[1.15] md:text-[36px]">From a chautari to a digital powerhouse</h2>
          <p className="mt-4 text-muted">
            Digital Chautari started in 2025 as a simple idea: give Nepali businesses the same quality of marketing, content, and technology that larger companies take for granted.
          </p>
          <p className="mt-3 text-muted">
            We began with two ventures, added a health-tech product in 2026, and kept the same habit throughout: listen first, then build. Every project still starts with a conversation.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-5">
          {ABOUT_TILES.map((t, i) => (
            <Reveal key={t.label} index={i} className={`flex min-h-[130px] flex-col justify-end rounded-xl p-6 ${TILE_STYLES[t.tone].box}`}>
              <div className="font-display text-[26px] font-extrabold leading-none md:text-[30px]">{t.value}</div>
              <div className={`mt-1.5 text-[14px] ${TILE_STYLES[t.tone].label}`}>{t.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function MissionVision() {
  return (
    <Section tight>
      <div className="grid gap-5 md:grid-cols-2">
        <CardShell index={0} className="p-8">
          <IconChip icon="🎯" index={0} />
          <h3 className="mt-4 font-display text-[22px] font-bold">Our mission</h3>
          <p className="mt-2 text-muted">To help organizations grow through creative strategy, honest reporting, and technology that is simple to use.</p>
        </CardShell>
        <CardShell index={1} className="p-8">
          <IconChip icon="🔭" index={2} />
          <h3 className="mt-4 font-display text-[22px] font-bold">Our vision</h3>
          <p className="mt-2 text-muted">To be the creative technology partner Nepal’s businesses and health providers turn to first.</p>
        </CardShell>
      </div>
    </Section>
  );
}

export function Values() {
  return (
    <Section tight>
      <SectionHead eyebrow="Our values" title="What we stand for" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v, i) => (
          <Card key={v.title} {...v} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function TrustCards() {
  return (
    <Section dark>
      <SectionHead eyebrow="Trust" title="Committed to quality & trust" dark />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((t, i) => (
          <DarkCard key={t.title} {...t} index={i} />
        ))}
      </div>
    </Section>
  );
}

const initials = (role: string): string =>
  role
    .split(/[\s‑]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

export function TeamGrid() {
  return (
    <Section>
      <SectionHead eyebrow="The team" title="Roles that make it work" sub="A compact team where everyone owns their part." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((t, i) => (
          <CardShell key={t.role} index={i}>
            <span className="chip" style={{ background: chipColor(i) }} aria-hidden="true">
              <span className="font-display text-[15px] font-bold text-teal-dark">{initials(t.role)}</span>
            </span>
            <h3 className="mt-4 font-display text-[16px] font-semibold">{t.role}</h3>
            <p className="mt-1.5 text-[14px] text-muted">{t.text}</p>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}

export function Roadmap() {
  return (
    <Section dark>
      <SectionHead eyebrow="Roadmap" title="Where we’ve been and where we’re headed" dark />
      <div className="relative mx-auto max-w-[900px]">
        <div className="absolute top-0 bottom-0 left-[9px] w-px bg-navy-border md:left-1/2" aria-hidden="true" />
        <ol>
        {ROADMAP.map((r, i) => {
          const right = i % 2 === 1;
          return (
            <Reveal
              as="li"
              key={r.title}
              index={i}
              className={`relative list-none pb-10 pl-10 last:pb-0 md:w-1/2 ${
                right ? "md:ml-auto md:pl-12" : "md:pr-12 md:pl-0 md:text-right"
              }`}
            >
              <span
                className={`absolute top-1.5 left-[3px] h-[13px] w-[13px] rounded-full bg-leaf ring-4 ring-navy ${
                  right ? "md:left-[-7px]" : "md:right-[-7px] md:left-auto"
                }`}
                aria-hidden="true"
              />
              <span className="inline-block rounded-2xl bg-gold px-3 py-1 text-[13px] font-bold text-navy">{r.year}</span>
              <h3 className="mt-2.5 font-display text-[18px] font-semibold text-white">{r.title}</h3>
              <p className="mt-1 text-[14.5px] text-soft">{r.text}</p>
            </Reveal>
          );
        })}
        </ol>
      </div>
    </Section>
  );
}
