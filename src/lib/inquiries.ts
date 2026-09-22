import type { Inquiry } from "@/lib/types";

declare global {
  // eslint-disable-next-line no-var
  var __phInquiries: Inquiry[] | undefined;
}

function mem() {
  if (!globalThis.__phInquiries) globalThis.__phInquiries = [];
  return globalThis.__phInquiries;
}

export async function saveInquiry(data: Omit<Inquiry, "id" | "createdAt" | "status">) {
  if (process.env.DATABASE_URL) {
    try {
      const { prisma } = await import("@/lib/prisma");
      const row = await prisma.inquiry.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          propertyId: data.propertyId || undefined,
        },
      });
      return { id: row.id };
    } catch {
      /* fall through */
    }
  }
  const item: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  mem().unshift(item);
  return { id: item.id };
}

export async function listInquiries(): Promise<Inquiry[]> {
  if (process.env.DATABASE_URL) {
    try {
      const { prisma } = await import("@/lib/prisma");
      const rows = await prisma.inquiry.findMany({
        include: { property: { select: { title: true } } },
        orderBy: { createdAt: "desc" },
      });
      return rows.map((r) => ({
        id: r.id,
        fullName: r.fullName,
        email: r.email,
        phone: r.phone,
        message: r.message,
        status: r.status,
        propertyId: r.propertyId,
        propertyTitle: r.property?.title,
        createdAt: r.createdAt.toISOString(),
      }));
    } catch {
      /* fall through */
    }
  }
  return mem();
}
