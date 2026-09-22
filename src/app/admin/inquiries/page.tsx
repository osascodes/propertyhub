import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { listInquiries } from "@/lib/inquiries";

export default async function AdminInquiries() {
  if (!(await getAdmin())) redirect("/admin/login");
  const inquiries = await listInquiries();
  return (
    <div className="mx-auto max-w-site px-5 py-14 md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-4xl">Inquiries</h1>
        <Link href="/admin" className="text-sm text-mute">Back</Link>
      </div>
      {inquiries.length === 0 ? (
        <p className="mt-12 text-mute">No inquiries yet.</p>
      ) : (
        <ul className="mt-8 divide-y divide-line">
          {inquiries.map((i) => (
            <li key={i.id} className="py-5">
              <p className="font-medium">{i.fullName} <span className="font-normal text-mute">· {i.email} · {i.phone}</span></p>
              {i.propertyTitle && <p className="mt-1 text-sm text-accent">{i.propertyTitle}</p>}
              <p className="mt-2 text-sm leading-relaxed">{i.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
