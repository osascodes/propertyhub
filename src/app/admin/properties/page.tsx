import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { getProperties } from "@/lib/properties";
import { formatNaira } from "@/lib/utils";

export default async function AdminProperties() {
  if (!(await getAdmin())) redirect("/admin/login");
  const properties = await getProperties();
  return (
    <div className="mx-auto max-w-site px-5 py-14 md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-4xl">Properties</h1>
        <Link href="/admin" className="text-sm text-mute">Back</Link>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-line text-xs uppercase tracking-wider text-mute">
            <tr><th className="py-3 font-normal">Title</th><th className="py-3 font-normal">Location</th><th className="py-3 font-normal">Price</th><th className="py-3 font-normal">Status</th></tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p.id} className="border-b border-line/70">
                <td className="py-3"><Link href={`/properties/${p.slug}`} className="hover:underline">{p.title}</Link></td>
                <td className="py-3 text-mute">{p.location}</td>
                <td className="py-3">{formatNaira(p.price)}</td>
                <td className="py-3">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
