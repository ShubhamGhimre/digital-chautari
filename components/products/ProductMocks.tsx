import { Check } from "@/components/ui/Check";
import { buttonClass } from "@/components/ui/Button";
import { Stethoscope } from "lucide-react";
import type { ProductSlug } from "@/lib/types";

function EcoMock() {
  const bars = [38, 52, 46, 68, 74, 92];
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-[14px] font-semibold">Campaign reach</span>
        <span className="rounded-2xl bg-[#E7F5EA] px-2.5 py-1 text-[12.5px] font-semibold text-teal-dark">+32% this month</span>
      </div>
      <div className="mt-6 flex h-[150px] items-end gap-3">
        {bars.map((h, i) => (
          <div
            key={months[i]}
            className="flex-1 rounded-t-md"
            style={{ height: `${h}%`, background: i === bars.length - 1 ? "linear-gradient(180deg,#0F9488,#0B6F66)" : "#CFE7E4" }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[11.5px] text-muted">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function StudioMock() {
  return (
    <div className="rounded-xl bg-navy p-5 text-white">
      <div className="flex items-center justify-between text-[13px] text-soft">
        <span className="font-display font-semibold text-white">Edit timeline</span>
        <span>00:42 / 01:30</span>
      </div>
      <div className="mt-5 space-y-2.5">
        <div className="flex gap-1.5">
          <div className="h-8 w-[34%] rounded-md" style={{ background: "#0F9488" }} />
          <div className="h-8 w-[22%] rounded-md" style={{ background: "#E0A930" }} />
          <div className="h-8 flex-1 rounded-md" style={{ background: "#7FAE3A" }} />
        </div>
        <div className="flex gap-1.5">
          <div className="h-6 w-[12%] rounded-md bg-[#22314D]" />
          <div className="h-6 w-[40%] rounded-md bg-[#2C7F9B]" />
          <div className="h-6 flex-1 rounded-md bg-[#22314D]" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 w-[60%] rounded-md bg-[#F4E9F6]/80" />
          <div className="h-5 flex-1 rounded-md bg-[#FDEEF0]/70" />
        </div>
      </div>
      <div className="mt-5 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-[46%] rounded-full bg-gold" />
      </div>
    </div>
  );
}

function PhysioMock() {
  const tasks = ["Cat–camel stretch × 10", "Bridge hold × 8", "Walking, 15 minutes"];
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="chip" style={{ background: "#E7F5EA" }} aria-hidden="true">
          <Stethoscope className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-[15px] font-semibold">Home session</div>
          <div className="text-[13px] text-muted">Tomorrow, 7:30 AM · Lower back</div>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        {tasks.map((t, i) => (
          <div key={t} className={`flex items-center gap-2.5 text-[14px] ${i === 2 ? "text-muted" : ""}`}>
            <Check empty={i === 2} />
            {t}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <span className={buttonClass("primary", "py-2.5 text-[14px]")}>Confirm</span>
        <span className={buttonClass("ghost", "py-2.5 text-[14px]")}>Reschedule</span>
      </div>
    </div>
  );
}

export function ProductMock({ slug }: { slug: ProductSlug }) {
  if (slug === "studio") return <StudioMock />;
  if (slug === "physio") return <PhysioMock />;
  return <EcoMock />;
}
