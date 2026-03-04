import Image from "next/image";

export function PropertyCard({ property }: any) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="relative h-48">
        <Image src={property.image} alt="" fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        <div className="mt-3 font-bold text-blue-600">
          ${property.price}/month
        </div>
      </div>
    </div>
  );
}