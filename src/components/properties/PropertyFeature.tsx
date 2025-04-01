import { Property } from "@/models/schema"
import { IconBath, IconBed, IconBuildingCommunity } from "@tabler/icons-react"
import { FC } from "react"
import { Price } from "../ui/Price"

type PropertyProps = {
   item: Property
}

export const PropertyFeature: FC<PropertyProps> = ({ item }) => {
   const image = JSON.parse(item?.images ?? "[]")
   return (
      <div key={item.id} className="relative text-xs w-full shadow bg-white rounded-md">
         <div className="bg-no-repeat w-full h-[120px] bg-cover rounded-md" style={{
            backgroundImage: `url(${image[0]})`
         }} />
         <div className="p-2">
            <p>{item.title}</p>

            <div className="flex justify-between pt-1">
               <div className="flex justify-start gap-2">
                  <IconBed stroke={1} size={16} />
                  {item.bedrooms}
               </div>
               <div className="flex justify-start gap-2">
                  <IconBath stroke={1} size={16} />
                  {item.bathrooms}
               </div>
               {
                  item.plot ?
                     <div className="flex justify-start gap-2">
                        <IconBuildingCommunity stroke={1} size={16} />
                        {item.plot}
                     </div>
                     : <span>&nbsp;</span>
               }
            </div>
            <Price>{item.price}</Price>
         </div>
      </div>
   );
}