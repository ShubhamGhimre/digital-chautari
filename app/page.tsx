import type { Metadata } from "next";
import {
  BlogTeaser,
  FeatureStrip,
  ProcessSteps,
  ProductsTeaser,
  Sectors,
  StatsBanner,
  Testimonials,
  WhoWeAre,
} from "@/components/home/HomeSections";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";
import { StatBar } from "@/components/ui/StatBar";
import { HOME_HERO_STATS } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "Digital Chautari — Digital bridges between ideas and impact",
  description:
    "A creative technology company in Kathmandu offering digital marketing, content creation, and health-tech software.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="🚀 Welcome to Digital Chautari"
        title={
          <>
            We build <GradientText>digital bridges</GradientText> between ideas and impact
          </>
        }
        lede="Digital Chautari is a creative technology company in Kathmandu. We combine digital marketing, content creation, and health-tech software to help organizations grow and reach the people who matter to them."
        actions={
          <>
            <Button href="/services">Explore Services →</Button>
            <Button href="/products" kind="ghost">
              View Products
            </Button>
          </>
        }
      >
        <StatBar items={HOME_HERO_STATS} />
      </Hero>

      <FeatureStrip />
      <WhoWeAre />
      <StatsBanner />
      <ProductsTeaser />
      <Sectors />
      <ProcessSteps />
      <Testimonials />
      <BlogTeaser />

      <CtaBanner title="Ready to build something extraordinary together?">
        <Button href="/contact" kind="white">
          Start a Project →
        </Button>
        <Button href="/services" kind="outline">
          View Services
        </Button>
      </CtaBanner>
    </>
  );
}
