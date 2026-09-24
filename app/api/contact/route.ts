import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Invalid request." } }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  // Honeypot filled in: pretend success so bots learn nothing.
  if (result.spam) {
    return NextResponse.json({ ok: true });
  }

  try {
    // TODO: send email here (e.g. Resend, Nodemailer). Read keys from process.env
    // and document them in .env.example.
    console.log("[contact] new submission", {
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      projectType: result.data.projectType,
      messageLength: result.data.message.length,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] failed to process submission", error);
    return NextResponse.json({ ok: false, errors: { form: "Something went wrong on our side. Please try again." } }, { status: 500 });
  }
}
