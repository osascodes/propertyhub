import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { listInquiries } from "@/lib/inquiries";

export const metadata = { title: "Inquiries" };

export default async function InquiriesPage() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  const inquiries = await listInquiries();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <h1 className="font-serif text-3xl">Inquiries</h1>
      {inquiries.length === 0 ? (
        <p className="mt-8 text-mute">None yet. Submit the contact form, then refresh this page.</p>
      ) : (
        <div className="mt-8 divide-y divide-line border-y border-line">
          {inquiries.map((i) => (
            <div key={i.id} className="py-5">
              <p className="font-medium">{i.fullName}</p>
              <p className="text-sm text-mute">{i.email} · {i.phone}</p>
              {i.propertyTitle && <p className="mt-1 text-sm">{i.propertyTitle}</p>}
              <p className="mt-2 text-sm">{i.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
