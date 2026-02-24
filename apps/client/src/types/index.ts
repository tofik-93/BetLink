export interface Property {
  id: string;
  title: string;
  price: number;
  city: string;
  bedrooms: number;
  description: string;
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "renter" | "landlord";
}