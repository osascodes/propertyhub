import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">PropertyHub</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            A Lagos practice for people looking for a home, a rental, or a measured investment.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/50">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/properties">Properties</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin/login">Agents</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/50">Office</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            12 Adeola Odeku Street
            <br />
            Victoria Island, Lagos
            <br />
            +234 809 441 2200
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-xs text-paper/50 md:px-8">
        <div className="mx-auto flex max-w-site justify-between">
          <span>© {new Date().getFullYear()} PropertyHub</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
