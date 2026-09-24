"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/properties", label: "Properties" },
  { href: "/developments", label: "Developments" },
  { href: "/locations", label: "Locations" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-night/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl">PropertyHub</Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm ${active(l.href) ? "text-ivory" : "text-mist hover:text-ivory"}`}>{l.label}</Link>
          ))}
          <a href="https://wa.me/2348094412200" className="border border-gold px-3 py-2 text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-night">WhatsApp</a>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="space-y-3 border-t border-line px-5 py-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-lg">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
