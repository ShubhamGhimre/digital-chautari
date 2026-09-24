import type { Metadata } from "next";
import { MissionVision, Roadmap, StoryBlock, TeamGrid, TrustCards, Values } from "@/components/about/AboutSections";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "About — Digital Chautari",
  description: "Meet the team behind Digital Chautari: our story, mission, values, and roadmap.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="👋 About us"
        title={
          <>
            The people behind <GradientText>Digital Chautari</GradientText>
          </>
        }
        lede="We are a small, growing team in Kathmandu that believes good ideas deserve good execution."
      />
      <StoryBlock />
      <MissionVision />
      <Values />
      <TrustCards />
      <TeamGrid />
      <Roadmap />
      <CtaBanner title="Want to join our journey?">
        <Button href="/contact" kind="white">
          Get in Touch →
        </Button>
      </CtaBanner>
    </>
  );
}
