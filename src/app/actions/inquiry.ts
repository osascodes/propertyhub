"use server";

import { inquirySchema } from "@/lib/validations";
import { getPropertyBySlug } from "@/lib/properties";
import { saveInquiry } from "@/lib/inquiries";

export async function submitInquiry(input: unknown) {
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "Please check the form and try again." };
  }
  const data = parsed.data;
  const property = data.propertySlug ? await getPropertyBySlug(data.propertySlug) : undefined;

  await saveInquiry({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    message: data.message,
    propertyId: property?.id,
    propertyTitle: property?.title,
  });

  return { ok: true as const };
}
