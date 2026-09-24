import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Compass } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = { title: "Page not found — Digital Chautari" };

export default function NotFound() {
  return (
    <Hero
      eyebrow={
        <>
          <Compass className="inline-block h-4 w-4 mr-1" aria-hidden="true" />
          404
        </>
      }
      title={
        <>
          This page took a <GradientText>wrong turn</GradientText>
        </>
      }
      lede="We couldn't find the page you were looking for. It may have moved, or the link may be mistyped."
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