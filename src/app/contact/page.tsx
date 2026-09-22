import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to PropertyHub about a home, a rental, or a search.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-site gap-14 px-5 py-20 md:grid-cols-2 md:px-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-mute">Office</p>
        <h1 className="mt-3 font-serif text-5xl">Contact</h1>
        <p className="mt-6 max-w-sm text-mute leading-relaxed">
          12 Adeola Odeku Street, Victoria Island, Lagos. We answer the phone during office hours.
        </p>
        <p className="mt-6 text-sm">+234 809 441 2200<br />hello@propertyhub.ng</p>
      </div>
      <InquiryForm />
    </div>
  );
}
