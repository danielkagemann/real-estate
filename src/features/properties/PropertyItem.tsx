import { Property } from "@/shared/models/schema";
import { IconBat, IconBath, IconBed, IconBuilding } from "@tabler/icons-react";
import Link from "next/link";

export const PropertyItem = ({ property }: { property: Property }) => {
   const image = JSON.parse(property?.images ?? "[]");
   return (
      <Link href={`/properties/details/${property.id}`}>
         <div className="w-[280px] hover-detail-cursor">
            <div
               className="bg-no-repeat w-full aspect-3/2 bg-cover rounded-xl relative"
               style={{
                  backgroundImage: `url(${image[0]})`,
               }}
            >
               <div className="absolute right-2 top-2 rounded-md bg-orange-600 text-white pt-1 pb-1 pl-2 pr-2 text-sm">{property.price.toLocaleString('de-DE')} EUR</div>
            </div>

            <div className="truncate text-lg">{property.title}</div>
            <div className="text-gray-500 text-md">{property.description}</div>

            <div className="flex justify-start gap-4 items-center text-gray-500 text-sm">
               <div className="flex flex-row gap-2 items-center">
                  <IconBed size={18} />{property.bedrooms}
               </div>
               <div className="flex flex-row gap-2 items-center">
                  <IconBath size={18} />{property.bathrooms}
               </div>
               <div className="flex flex-row gap-2 items-center">
                  <IconBuilding size={18} />{property.area} m²
               </div>
            </div>
         </div>
      </Link>
   );
}