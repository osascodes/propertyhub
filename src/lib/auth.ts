import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE = "ph_admin";

function secret() {
  return new TextEncoder().encode(
    process.env.AUTH_SECRET || "propertyhub-change-this-secret"
  );
}

export async function createSession(email: string) {
  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret());
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  cookies().delete(COOKIE);
}

export async function getAdmin() {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return { email: String(payload.email) };
  } catch {
    return null;
  }
}

export function checkAdmin(email: string, password: string) {
  return (
    email === (process.env.ADMIN_EMAIL || "xavier.y@example.org") &&
    password === (process.env.ADMIN_PASSWORD || "admin1234")
  );
}
