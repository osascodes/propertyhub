import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Write a short message"),
  propertyId: z.string().optional(),
  propertySlug: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const propertySchema = z.object({
  title: z.string().min(4),
  description: z.string().min(20),
  price: z.coerce.number().positive(),
  location: z.string().min(2),
  address: z.string().min(4),
  propertyType: z.enum(["Apartment", "House", "Duplex", "Land", "Commercial"]),
  listingType: z.enum(["SALE", "RENT"]),
  bedrooms: z.coerce.number().min(0),
  bathrooms: z.coerce.number().min(0),
  squareFeet: z.coerce.number().min(0),
  amenities: z.string().optional(),
  features: z.string().optional(),
  featured: z.coerce.boolean().optional(),
  status: z.enum(["AVAILABLE", "PENDING", "SOLD", "RENTED"]).optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
});
