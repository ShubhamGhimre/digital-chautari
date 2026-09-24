import { Card, CardShell, DarkCardShell } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { MapPin } from "lucide-react";
import { CONTACT_INFO, DEPARTMENTS, RESPONSE_TIMES } from "@/lib/data/contact";

export function ContactInfo() {
  return (
    <Section tight>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_INFO.map((x, i) => (
          <Card key={x.title} {...x} index={i} />
        ))}
      </div>
    </Section>
  );
}

export function DirectLines() {
  return (
    <Section tight>
      <SectionHead eyebrow="Direct lines" title="Reach the right team" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((d, i) => (
          <CardShell key={d.name} index={i}>
            <IconChip icon={d.icon} index={i} small />
            <h3 className="mt-3 font-display text-[16px] font-semibold">{d.name}</h3>
            <a href={`mailto:${d.email}`} className="text-[13.5px] break-all text-teal-dark hover:text-teal">
              {d.email}
            </a>
          </CardShell>
        ))}
      </div>
    </Section>
  );
}

export function SidePanel() {
  return (
    <div className="space-y-5">
      <Reveal className="mapbox relative flex h-[220px] items-center justify-center overflow-hidden rounded-xl border border-line">
        <div className="text-center">
          <MapPin className="mx-auto h-[34px] w-[34px] text-gold" aria-hidden="true" />
          <div className="font-display font-semibold">Kathmandu, Nepal</div>
          <div className="text-[13px] text-muted">Map coming soon</div>
        </div>
      </Reveal>

      <DarkCardShell className="no-lift p-6">
        <h3 className="font-display text-[18px] font-semibold text-white">Need quick answers?</h3>
        <p className="mt-1.5 text-[14.5px] text-soft">Most questions about pricing, timelines, and process are answered in our FAQ.</p>
        {/* TODO: link to a real FAQ page */}
        <span className="mt-4 inline-block cursor-default font-semibold text-gold">Visit FAQ page →</span>
      </DarkCardShell>

      <CardShell className="no-lift">
        <h3 className="font-display text-[17px] font-semibold">Response time</h3>
        <ul className="mt-3 divide-y divide-line text-[14.5px]">
          {RESPONSE_TIMES.map((r) => (
            <li key={r.channel} className="flex justify-between py-2.5">
              <span className="text-muted">{r.channel}</span>
              <span className="font-semibold">{r.time}</span>
            </li>
          ))}
        </ul>
      </CardShell>
    </div>
  );
}
