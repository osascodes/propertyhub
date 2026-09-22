import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "PropertyHub is a Lagos real estate practice with a short list and long notes.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-mute">The practice</p>
      <h1 className="mt-3 font-serif text-5xl">About PropertyHub</h1>
      <div className="mt-10 space-y-5 text-base leading-relaxed text-ink/90">
        <p>PropertyHub started as a small desk on Victoria Island for people who were tired of listings that said nothing useful. We still work that way.</p>
        <p>The public site is a short catalogue: houses and apartments we have walked through, land we have stood on, and commercial bays we would let a relative take.</p>
        <p>If you are buying, we help you read the title and the street. If you are renting, we tell you how the generator actually behaves.</p>
        <p>Office hours are Monday to Friday, nine to five. Viewings are by appointment.</p>
      </div>
    </div>
  );
}
