import { Property } from "@/models/schema"
import Link from "next/link";
import { FC } from "react";
import { Tag, TagSize } from "../ui/Tag";
import { Price, PriceSize } from "../ui/Price";

type PropertyResultItemProps = {
   item: Property
};

// FIXME: detail-cursor does not work :-(
export const PropertyResultItem: FC<PropertyResultItemProps> = ({ item }) => {
   const image = JSON.parse(item.images ?? "[]")[0]
   return (
      <div key={item.id}
         className="relative hover:detail-cursor">
         <Link href={`/properties/details/${item.id}`}
            className="flex w-full h-[150px] gap-2 bg-gray-100 mb-1 overflow-clip">

            <img src={image} alt="property:image" className="min-w-[250px] max-w-[250px] h-full opacity-80 object-cover overflow-clip" />
            <div className="flex flex-col p-4">
               <div className="flex justify-start">
                  <Price size={PriceSize.small}>{item.price}</Price>
               </div>
               <h3 className="text-base font-bold">{item.title}</h3>
               <p className="text-xs">{item.description}</p>
               <div className="flex justify-start">
                  <Tag filled size={TagSize.small}>{item.type}</Tag>
               </div>
            </div>
         </Link>
      </div>
   )
}