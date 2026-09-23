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
  return mem();
}
