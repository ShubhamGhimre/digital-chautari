import type { Metadata } from "next";
import { ProductTabs } from "@/components/products/ProductTabs";
import { SpotlightBanner } from "@/components/products/SpotlightBanner";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { parseProductTab } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products — Digital Chautari",
  description: "Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home: three ventures, one vision.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const { tab } = await searchParams;
  const initialTab = parseProductTab(Array.isArray(tab) ? tab[0] : tab);

  return (
    <>
      <Hero
        eyebrow="📦 Our products"
        title={
          <>
            Three ventures, <GradientText>one vision</GradientText>
          </>
        }
        lede="Each venture serves a different need. Together they show how we work: start with a real problem, then build the simplest thing that solves it well."
      />
      <Section tight>
        <ProductTabs initialTab={initialTab} />
      </Section>
      <SpotlightBanner />
    </>
  );
}
