import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { getProperties } from "@/lib/properties";
import { listInquiries } from "@/lib/inquiries";
import { logoutAction } from "@/app/actions/auth";

export default async function AdminHome() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  const properties = await getProperties();
  const inquiries = await listInquiries();
  const stats = [
    ["Properties", properties.length],
    ["Available", properties.filter((p) => p.status === "Available").length],
    ["Featured", properties.filter((p) => p.featured).length],
    ["Inquiries", inquiries.length],
  ];
  return (
    <div className="mx-auto max-w-site px-5 py-14 md:px-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mute">Dashboard</p>
          <h1 className="mt-2 font-serif text-4xl">Office</h1>
        </div>
        <form action={logoutAction}><button className="text-sm text-mute">Sign out</button></form>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([l, n]) => (
          <div key={String(l)} className="border border-line p-5">
            <p className="text-xs uppercase tracking-wider text-mute">{l}</p>
            <p className="mt-2 font-serif text-4xl">{n}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex gap-4 text-sm">
        <Link href="/admin/properties" className="bg-ink px-4 py-2 text-paper">Manage properties</Link>
        <Link href="/admin/inquiries" className="border border-ink px-4 py-2">View inquiries</Link>
      </div>
    </div>
  );
}
