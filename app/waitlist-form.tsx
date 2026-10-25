"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "./actions";

const initialState: WaitlistState = { status: "idle" };

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-full border border-emerald-600/20 bg-emerald-50/80 py-4 pr-6 pl-5 dark:border-emerald-400/20 dark:bg-emerald-400/10">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400"
        >
          <path
            d="M5 10.5 8.5 14 15 7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[15px] text-emerald-900 dark:text-emerald-200">
          You&rsquo;re on the list. We&rsquo;ll write before we open the doors.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      <div className="hidden" aria-hidden="true">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 pl-5 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] transition-colors focus-within:border-black/35">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@studio.com"
          aria-invalid={state.status === "error"}
          aria-describedby={state.status === "error" ? "email-error" : undefined}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-50 dark:placeholder:text-zinc-500"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {pending ? "Joining…" : "Join waitlist"}
        </button>
      </div>

      {state.status === "error" ? (
        <p
          id="email-error"
          role="alert"
          className="mt-3 pl-5 text-sm text-red-600 dark:text-red-400"
        >
          {state.message}
        </p>
      ) : (
        <p className="mt-3 pl-5 text-sm text-zinc-500 dark:text-zinc-500">
          No newsletter, no sharing. One email when the beta opens.
        </p>
      )}
    </form>
  );
}
