import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Check";
import { DarkCardShell } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SPOTLIGHT_POINTS } from "@/lib/data/products";

export function SpotlightBanner() {
  return (
    <Section dark>
      <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="mb-4">
            <Pill dark>Spotlight</Pill>
          </div>
          <h2 className="font-display text-[28px] font-bold leading-[1.15] text-white md:text-[38px]">Physio@Home — healthcare reimagined</h2>
          <p className="mt-4 max-w-[560px] text-soft">
            Recovery works best when it fits into daily life. Physio@Home brings qualified therapists to the patient’s door and keeps every exercise, note, and appointment in one place.
          </p>
          <div className="mt-7">
            <Button href="/contact" kind="gold">
              Talk to us about Physio@Home →
            </Button>
          </div>
        </Reveal>
        <DarkCardShell className="no-lift p-7">
          <ul className="space-y-4">
            {SPOTLIGHT_POINTS.map((x) => (
              <li key={x} className="flex gap-3 text-softer">
                <Check dark />
                {x}
              </li>
            ))}
          </ul>
        </DarkCardShell>
      </div>
    </Section>
  );
}
