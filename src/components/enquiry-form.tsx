"use client";
import { FormEvent, useState } from "react";

const field = "mt-1 w-full border border-line bg-transparent px-3 py-3 text-base";

export function EnquiryForm({ property }: { property?: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) {
    return <p className="border border-line p-6 text-sm text-mist">Thank you. A specialist will write back within a working day.</p>;
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {property && <input type="hidden" name="property" value={property} />}
      <label className="block text-sm">Name<input required name="name" className={field} /></label>
      <label className="block text-sm">Phone<input required name="phone" inputMode="tel" className={field} /></label>
      <label className="block text-sm">Email<input required type="email" name="email" className={field} /></label>
      <label className="block text-sm">Message<textarea required name="message" rows={4} className={field} /></label>
      <button className="bg-ivory px-5 py-3 text-sm text-night">Send enquiry</button>
    </form>
  );
}
