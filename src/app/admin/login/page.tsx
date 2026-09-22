"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "@/app/actions/auth";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="w-full bg-ink py-3 text-sm text-paper disabled:opacity-60">
      {pending ? "Checking…" : "Sign in"}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, action] = useFormState(loginAction, { error: "" });
  return (
    <div className="mx-auto max-w-md px-5 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-mute">Agents</p>
      <h1 className="mt-2 font-serif text-4xl">Sign in</h1>
      <form action={action} className="mt-8 space-y-4">
        <label className="block text-xs uppercase tracking-wider text-mute">Email<input name="email" type="email" required className="mt-1 w-full border border-line px-3 py-2.5 text-sm" /></label>
        <label className="block text-xs uppercase tracking-wider text-mute">Password<input name="password" type="password" required className="mt-1 w-full border border-line px-3 py-2.5 text-sm" /></label>
        {state?.error && <p className="text-sm text-red-700">{state.error}</p>}
        <Submit />
      </form>
    </div>
  );
}
