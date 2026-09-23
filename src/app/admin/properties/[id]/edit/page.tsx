import { notFound, redirect } from "next/navigation";
import { getAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PropertyForm } from "@/components/property-form";
import { updatePropertyAction } from "@/app/actions/property";

export default async function EditPropertyPage({ params }: { params: { id: string } }) {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  if (!process.env.DATABASE_URL) notFound();
  const p = await prisma.property.findUnique({ where: { id: params.id } });
  if (!p) notFound();
  const action = updatePropertyAction.bind(null, p.id);
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <h1 className="font-serif text-3xl">Edit listing</h1>
      <PropertyForm action={action} values={p} />
    </div>
  );
}
