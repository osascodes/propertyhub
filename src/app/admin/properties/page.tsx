import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { getProperties } from "@/lib/properties";
import { formatNaira } from "@/lib/utils";

export const metadata = { title: "Listings" };

export default async function AdminProperties() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  const list = await getProperties();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <h1 className="font-serif text-3xl">Listings</h1>
      <p className="mt-2 text-sm text-mute">Demo catalogue. This version does not edit a database.</p>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {list.map((p) => (
          <div key={p.id} className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-mute">{p.location} · {formatNaira(p.price)}</p>
            </div>
            <Link href={`/properties/${p.slug}`} className="text-sm text-mute">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
