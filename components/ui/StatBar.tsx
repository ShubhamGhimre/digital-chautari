import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import type { Stat } from "@/lib/types";

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

export function StatBar({ items }: { items: Stat[] }) {
  return (
    <Reveal className={`mt-12 grid rounded-xl border border-line bg-white ${COLS[items.length] ?? "sm:grid-cols-3"}`}>
      {items.map((s, i) => (
        <div key={s.label} className={`flex items-center gap-4 p-5 ${i ? "border-t border-line sm:border-t-0 sm:border-l" : ""}`}>
          <IconChip icon={s.icon} index={i} />
          <div>
            <div className="font-display text-[24px] font-bold leading-none">{s.value}</div>
            <div className="mt-1 text-[13px] text-muted">{s.label}</div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
