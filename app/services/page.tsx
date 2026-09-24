import type { Metadata } from "next";
import { Industries, Pricing, ServiceCategories, WhyUs } from "@/components/services/ServicesSections";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "Services — Digital Chautari",
  description: "Digital marketing, content creation, and software development from one team, with clear monthly pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="💼 Our services"
        title={
          <>
            Services that <GradientText>drive growth</GradientText>
          </>
        }
        lede="Marketing, content, and software from one team that shares the same goals as you. Pick one service or combine all three."
      />
      <ServiceCategories />
      <Pricing />
      <Industries />
      <WhyUs />
      <CtaBanner title="Let’s find the right service for you">
        <Button href="/contact" kind="white">
          Book a Consultation →
        </Button>
      </CtaBanner>
    </>
  );
}
