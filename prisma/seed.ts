import { PrismaClient } from "@prisma/client";
import { seedProperties } from "../src/lib/seed-properties";

const prisma = new PrismaClient();

async function main() {
  await prisma.inquiry.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();

  for (const item of seedProperties) {
    const { images, ...data } = item as any;
    await prisma.property.create({
      data: {
        ...data,
        images: images ? { create: images } : undefined,
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
