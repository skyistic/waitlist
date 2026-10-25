"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot: bots fill every field they find, people never see this one.
  if (formData.get("company")) {
    return { status: "success", message: "You're on the list." };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (email.length > 254 || !EMAIL.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    // TODO: swap for a real store (Postgres, Resend audience, …) before deploying.
    // The filesystem is ephemeral or read-only on most serverless hosts.
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "waitlist.jsonl"),
      `${JSON.stringify({ email, at: new Date().toISOString() })}\n`,
      "utf8",
    );
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Try again in a moment.",
    };
  }

  return { status: "success", message: "You're on the list." };
}
