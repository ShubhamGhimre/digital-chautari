import { PROJECT_TYPES, type ContactPayload, type ProjectType } from "@/lib/types";

export type ContactErrors = Partial<Record<"name" | "email" | "subject" | "message" | "projectType" | "form", string>>;

export type ValidationResult =
  | { ok: true; data: ContactPayload; spam: boolean }
  | { ok: false; errors: ContactErrors };

const EMAIL_RE = /^\S+@\S+\.\S+$/;

const LIMITS = { name: 100, email: 200, subject: 150, message: 3000 } as const;

const asString = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

export function validateContact(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, errors: { form: "Invalid request." } };
  }
  const raw = input as Record<string, unknown>;
  const errors: ContactErrors = {};

  const name = asString(raw.name);
  const email = asString(raw.email);
  const subject = asString(raw.subject);
  const message = asString(raw.message);
  const projectType = asString(raw.projectType);
  const website = asString(raw.website);

  if (!name) errors.name = "Enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(email) || email.length > LIMITS.email) errors.email = "Enter a valid email address, like name@example.com.";

  if (subject.length > LIMITS.subject) errors.subject = `Keep the subject under ${LIMITS.subject} characters.`;

  if (!message) errors.message = "Write a short message.";
  else if (message.length > LIMITS.message) errors.message = `Keep your message under ${LIMITS.message} characters.`;

  if (projectType && !(PROJECT_TYPES as readonly string[]).includes(projectType)) {
    errors.projectType = "Choose one of the listed project types.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    spam: website.length > 0,
    data: {
      name,
      email,
      subject: subject || undefined,
      projectType: (projectType || undefined) as ProjectType | undefined,
      message,
    },
  };
}
