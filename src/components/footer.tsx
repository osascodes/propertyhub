import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">PropertyHub</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">A Lagos practice for homes, lettings, and a small number of developments.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/developments">Developments</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="no-detect text-sm text-mist">
          <p>12 Adeola Odeku Street</p>
          <p>Victoria Island, Lagos</p>
          <p>+234 809 441 2200</p>
        </div>
      </div>
    </footer>
  );
}
