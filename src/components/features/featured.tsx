import { useGetFeaturedProperties } from "@/hooks/propertyEndpoints";
import { Property } from "@/models/schema";
import { IconBuildingCommunity, IconBath, IconBed } from "@tabler/icons-react";

export const Featured = () => {
   const $featured = useGetFeaturedProperties()

   const renderProperty = (property: Property) => {
      const image = JSON.parse(property?.images ?? "[]")
      return (
         <div key={property.id} className="relative text-xs w-full shadow bg-white rounded-md">
            <div className="bg-no-repeat w-full h-[120px] bg-cover rounded-md" style={{
               backgroundImage: `url(${image[0]})`
            }} />
            <div className="p-2">
               <p>{property.title}</p>

               <div className="flex justify-between pt-1">
                  <div className="flex justify-start gap-2">
                     <IconBed stroke={1} size={16} />
                     {property.bedrooms}
                  </div>
                  <div className="flex justify-start gap-2">
                     <IconBath stroke={1} size={16} />
                     {property.bathrooms}
                  </div>
                  {
                     property.plot ?
                        <div className="flex justify-start gap-2">
                           <IconBuildingCommunity stroke={1} size={16} />
                           {property.plot}
                        </div>
                        : <span>&nbsp;</span>
                  }
               </div>
               <div className="font-bold pl-1 pr-1 text-[0.7rem] bg-black text-white p-1 absolute right-0 top-0">
                  {property.price} EUR
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">Top featured projects</h2>
         <div className="flex gap-8 w-full justify-between">
            {$featured.query.data?.map(renderProperty)}
         </div>
      </div>
   );
}