import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = { title: "Page not found — Digital Chautari" };

export default function NotFound() {
  return (
    <Hero
      eyebrow="🧭 404"
      title={
        <>
          This page took a <GradientText>wrong turn</GradientText>
        </>
      }
      lede="We couldn’t find the page you were looking for. It may have moved, or the link may be mistyped."
      actions={
        <>
          <Button href="/">Back to Home</Button>
          <Button href="/contact" kind="ghost">
            Contact Us
          </Button>
        </>
      }
    />
  );
}
