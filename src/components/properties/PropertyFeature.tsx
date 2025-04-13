import { Property } from "@/models/schema"
import { IconBath, IconBed, IconBuildingCommunity } from "@tabler/icons-react"
import { FC } from "react"
import { Price } from "../ui/Price"
import Link from "next/link"

type PropertyProps = {
   item: Property
}

export const PropertyFeature: FC<PropertyProps> = ({ item }) => {
   const image = JSON.parse(item?.images ?? "[]")
   return (
      <Link href={`/properties/details/${item.id}`}
         key={item.id}
         className="relative w-full hover-detail-cursor">

         <div className="bg-no-repeat w-full aspect-3/2 bg-cover rounded-xl"
            style={{
               backgroundImage: `url(${image[0]})`
            }} />

         <strong className="truncate">{item.title}</strong>

         <div className="flex flex-row justify-between">
            <div>{item.location}</div>
            <div className="text-nowrap text-xs">{item.price.toLocaleString('de-DE')} EUR</div>
         </div>
      </Link>
   );
}