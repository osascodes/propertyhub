import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
export const metadata = { title: "Contact" };
export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-28 md:grid-cols-2 md:px-8">
      <Reveal dir="left">
        <h1 className="font-serif text-5xl">Talk to us</h1>
        <p className="mt-6 leading-relaxed text-mist">Viewings, developments, or a short brief. We reply within one working day.</p>
        <div className="mt-8 space-y-1 text-sm no-underline">
          <p>12 Adeola Odeku Street</p>
          <p>Victoria Island, Lagos</p>
          <p>+234 809 441 2200</p>
          <p>hello@propertyhub.ng</p>
        </div>
        <a href="https://wa.me/2348094412200" className="mt-6 inline-block text-gold no-underline">WhatsApp the desk →</a>
      </Reveal>
      <Reveal dir="right"><EnquiryForm /></Reveal>
    </div>
  );
}
