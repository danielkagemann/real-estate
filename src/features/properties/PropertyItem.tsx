import { Property } from "@/shared/models/schema";
import { IconBath, IconBed, IconBuilding } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
   property: Property,
   columns?: number
}

export const PropertyItem = ({ property, columns = 3 }: Props) => {
   const image = JSON.parse(property?.images ?? "[]");
   const padding = (0.5 * columns) - 0.25;
   const size = Math.floor(100 / columns);

   return (
      <Link href={`/properties/details/${property.id}`} className={`w-[calc(${size}%-${padding}rem)]`}>
         <div className="hover-detail-cursor">
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