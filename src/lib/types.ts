export type Property = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  location: string;
  address: string;
  propertyType: string;
  listingType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  amenities: string[];
  features: string[];
  featured: boolean;
  status: string;
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  createdAt: string;
  images: { id: string; url: string; alt: string; isPrimary: boolean }[];
};

export type Inquiry = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  propertyId?: string | null;
  propertyTitle?: string;
  createdAt: string;
};
