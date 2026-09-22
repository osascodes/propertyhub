"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema } from "@/lib/validations";
import { submitInquiry } from "@/app/actions/inquiry";

type Values = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  propertySlug?: string;
};

export function InquiryForm({ propertySlug }: { propertySlug?: string }) {
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { propertySlug, message: "" },
  });

  async function onSubmit(values: Values) {
    setServerError("");
    const res = await submitInquiry(values);
    if (!res.ok) {
      setServerError(res.error);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="border border-line bg-sand px-4 py-5 text-sm leading-relaxed">
        Thank you. An agent will call or write within one working day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="hidden" {...register("propertySlug")} />
      <label className="block text-xs uppercase tracking-wider text-mute">
        Full name
        <input {...register("fullName")} className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
        {errors.fullName && <p className="mt-1 normal-case text-red-700">{errors.fullName.message}</p>}
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Email
        <input type="email" {...register("email")} className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
        {errors.email && <p className="mt-1 normal-case text-red-700">{errors.email.message}</p>}
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Phone
        <input {...register("phone")} className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
        {errors.phone && <p className="mt-1 normal-case text-red-700">{errors.phone.message}</p>}
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Message
        <textarea rows={4} {...register("message")} className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
        {errors.message && <p className="mt-1 normal-case text-red-700">{errors.message.message}</p>}
      </label>
      {serverError && <p className="text-sm text-red-700">{serverError}</p>}
      <button disabled={isSubmitting} className="w-full bg-ink px-4 py-3 text-sm text-paper disabled:opacity-60">
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
