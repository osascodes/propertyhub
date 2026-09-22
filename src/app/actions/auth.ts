"use server";

import { redirect } from "next/navigation";
import { checkAdmin, createSession, destroySession } from "@/lib/auth";
import { loginSchema } from "@/lib/validations";

export async function loginAction(_: unknown, formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: "Enter a valid email and password." };
  if (!checkAdmin(parsed.data.email, parsed.data.password)) {
    return { error: "Those details do not match an admin account." };
  }
  await createSession(parsed.data.email);
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}
