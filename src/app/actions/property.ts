"use server";

import { getAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { propertySchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export async function createPropertyAction(formData: FormData) {
  const admin = await getAdmin();
  if (!admin) return { error: "Unauthorized" };
  if (!process.env.DATABASE_URL) return { error: "DATABASE_URL is not set." };

  const parsed = propertySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Check the form and try again." };

  const data = parsed.data;
  const property = await prisma.property.create({
    data: {
      title: data.title,
      slug: slugify(data.title),
      description: data.description,
      price: data.price,
      location: data.location,
      address: data.address,
      propertyType: data.propertyType,
      listingType: data.listingType,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      squareFeet: data.squareFeet,
      amenities: data.amenities ? data.amenities.split(",").map((s) => s.trim()).filter(Boolean) : [],
      features: data.features ? data.features.split(",").map((s) => s.trim()).filter(Boolean) : [],
      featured: Boolean(data.featured),
      status: data.status || "AVAILABLE",
    },
  });

  if (data.imageUrl) {
    await prisma.propertyImage.create({
      data: {
        url: data.imageUrl,
        alt: data.title,
        isPrimary: true,
        propertyId: property.id,
      },
    });
  }

  revalidatePath("/");
  revalidatePath("/properties");
  redirect("/admin/properties");
}

export async function updatePropertyAction(id: string, formData: FormData) {
  const admin = await getAdmin();
  if (!admin) return { error: "Unauthorized" };
  if (!process.env.DATABASE_URL) return { error: "DATABASE_URL is not set." };

  const parsed = propertySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Check the form and try again." };
  const data = parsed.data;

  await prisma.property.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      location: data.location,
      address: data.address,
      propertyType: data.propertyType,
      listingType: data.listingType,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      squareFeet: data.squareFeet,
      amenities: data.amenities ? data.amenities.split(",").map((s) => s.trim()).filter(Boolean) : [],
      features: data.features ? data.features.split(",").map((s) => s.trim()).filter(Boolean) : [],
      featured: Boolean(formData.get("featured")),
      status: data.status || "AVAILABLE",
    },
  });

  if (data.imageUrl) {
    await prisma.propertyImage.create({
      data: { url: data.imageUrl, alt: data.title, isPrimary: false, propertyId: id },
    });
  }

  revalidatePath("/");
  revalidatePath("/properties");
  redirect("/admin/properties");
}

export async function deletePropertyAction(id: string) {
  const admin = await getAdmin();
  if (!admin) return;
  if (!process.env.DATABASE_URL) return;
  await prisma.property.delete({ where: { id } });
  revalidatePath("/admin/properties");
  revalidatePath("/properties");
}
