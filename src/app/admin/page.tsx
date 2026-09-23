import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { getProperties } from "@/lib/properties";
import { listInquiries } from "@/lib/inquiries";
import { logoutAction } from "@/app/actions/auth";

export const metadata = { title: "Admin" };

export default async function AdminHome() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  const properties = await getProperties();
  const inquiries = await listInquiries();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-4xl">Dashboard</h1>
        <form action={logoutAction}>
          <button className="text-sm text-mute">Sign out</button>
        </form>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="border border-line p-6">
          <p className="text-xs uppercase tracking-wider text-mute">Properties</p>
          <p className="mt-2 font-serif text-3xl">{properties.length}</p>
        </div>
        <div className="border border-line p-6">
          <p className="text-xs uppercase tracking-wider text-mute">Featured</p>
          <p className="mt-2 font-serif text-3xl">{properties.filter((p) => p.featured).length}</p>
        </div>
        <div className="border border-line p-6">
          <p className="text-xs uppercase tracking-wider text-mute">Inquiries</p>
          <p className="mt-2 font-serif text-3xl">{inquiries.length}</p>
        </div>
      </div>
      <div className="mt-10 flex gap-4 text-sm">
        <Link href="/admin/properties" className="bg-ink px-4 py-2 text-paper">Listings</Link>
        <Link href="/admin/inquiries" className="border border-ink px-4 py-2">Inquiries</Link>
      </div>
    </div>
  );
}
