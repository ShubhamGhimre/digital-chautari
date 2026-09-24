import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo, DirectLines, SidePanel } from "@/components/contact/ContactSections";
import { GradientText } from "@/components/ui/GradientText";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact — Digital Chautari",
  description: "Get in touch with Digital Chautari. Send a message or reach the right team directly.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="💬 Contact"
        title={
          <>
            Let’s start a <GradientText>conversation</GradientText>
          </>
        }
        lede="Tell us what you are working on. We reply to every message, usually within a day."
      />
      <ContactInfo />
      <DirectLines />
      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <SidePanel />
        </div>
      </Section>
    </>
  );
}
