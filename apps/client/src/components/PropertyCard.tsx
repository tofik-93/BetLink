import { Property } from "@/types";
import Link from "next/link";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={property.images[0] || "/placeholder.png"}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{property.title}</h2>
      <p>{property.city} - {property.bedrooms} bedrooms</p>
      <p className="text-green-600 font-semibold">UGX {property.price.toLocaleString()}</p>
      <Link href={`/property/${property.id}`} className="text-blue-500 mt-2 block">
        View Details
      </Link>
    </div>
  );
}