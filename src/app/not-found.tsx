import Link from "next/link";
export default function NotFound() {
  return (
    <div className="px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <Link href="/" className="mt-6 inline-block text-gold">Back home</Link>
    </div>
  );
}
