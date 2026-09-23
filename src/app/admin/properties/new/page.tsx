import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { PropertyForm } from "@/components/property-form";
import { createPropertyAction } from "@/app/actions/property";

export const metadata = { title: "New property" };

export default async function NewPropertyPage() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <h1 className="font-serif text-3xl">New listing</h1>
      <PropertyForm action={createPropertyAction} />
    </div>
  );
}
