"use client";

import { useState, type FormEvent } from "react";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { validateContact, type ContactErrors } from "@/lib/validation";
import { PROJECT_TYPES, type ProjectType } from "@/lib/types";

type Status = "idle" | "sending" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

const EMPTY: FormValues = { name: "", email: "", subject: "", message: "", website: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [projectType, setProjectType] = useState<ProjectType>(PROJECT_TYPES[0]);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState<{ name: string; email: string } | null>(null);

  const set = (key: keyof FormValues) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const payload = { ...values, projectType };
    const local = validateContact(payload);
    if (!local.ok) {
      setErrors(local.errors);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; errors?: ContactErrors };
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? { form: "Your message could not be sent. Try again in a moment." });
        setStatus("error");
        return;
      }
      setSentTo({ name: values.name.trim(), email: values.email.trim() });
      setValues(EMPTY);
      setProjectType(PROJECT_TYPES[0]);
      setStatus("success");
    } catch {
      setErrors({ form: "We couldn’t reach the server. Check your connection and try again." });
      setStatus("error");
    }
  }

  const fieldError = (key: keyof ContactErrors) =>
    errors[key] ? (
      <p id={`err-${key}`} className="mt-1.5 text-[13px] text-[#B4232C]">
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: keyof ContactErrors) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `err-${key}` : undefined,
  });

  return (
    <Reveal className="card no-lift p-6 md:p-8">
      <form onSubmit={onSubmit} noValidate>
        <h2 className="font-display text-[24px] font-bold">Send us a message</h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block text-[14px] font-medium">Name</label>
            <input id="cf-name" className="field" autoComplete="name" required value={values.name} onChange={set("name")} {...aria("name")} />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block text-[14px] font-medium">Email</label>
            <input id="cf-email" type="email" className="field" autoComplete="email" required value={values.email} onChange={set("email")} {...aria("email")} />
            {fieldError("email")}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="cf-subject" className="mb-1.5 block text-[14px] font-medium">Subject</label>
          <input id="cf-subject" className="field" value={values.subject} onChange={set("subject")} {...aria("subject")} />
          {fieldError("subject")}
        </div>

        <div className="mt-5">
          <span id="cf-type-label" className="mb-2 block text-[14px] font-medium">Project type</span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cf-type-label">
            {PROJECT_TYPES.map((t) => (
              <button key={t} type="button" className="tag" aria-pressed={projectType === t} onClick={() => setProjectType(t)}>
                {t}
              </button>
            ))}
          </div>
          {fieldError("projectType")}
        </div>

        <div className="mt-5">
          <label htmlFor="cf-message" className="mb-1.5 block text-[14px] font-medium">Message</label>
          <textarea id="cf-message" rows={5} className="field resize-y" required value={values.message} onChange={set("message")} {...aria("message")} />
          {fieldError("message")}
        </div>

        {/* Honeypot: hidden from people, tempting to bots. */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="cf-website">Website</label>
          <input id="cf-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
        </div>

        {errors.form && (
          <p className="mt-4 text-[14px] text-[#B4232C]" role="alert">
            {errors.form}
          </p>
        )}

        <button type="submit" className={buttonClass("primary", "mt-6 w-full sm:w-auto")} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <div aria-live="polite">
          {status === "success" && sentTo && (
            <div className="mt-5 rounded-xl bg-[#E7F5EA] p-4 text-[14.5px] font-medium text-teal-dark" role="status">
              Thanks, {sentTo.name}. Your message was sent. We will reply to {sentTo.email} within 24 hours.
            </div>
          )}
        </div>
      </form>
    </Reveal>
  );
}
