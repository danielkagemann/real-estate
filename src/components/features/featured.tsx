import { useGetFeaturedProperties } from "@/hooks/propertyEndpoints";
import { Property } from "@/models/schema";

export const Featured = () => {
   const $featured = useGetFeaturedProperties()

   const renderProperty = (property: Property) => {
      return (
         <div key={property.id} className="text-xs">
            <img src={property.images} alt="property:image" className="w-[100%] h-[80px]" />
            <p>{property.title}</p>
            <div className="flex justify-end">
               <span className="font-bold pl-0.5 pr-0.5 text-[0.7rem]">{property.price} EUR</span>
            </div>
         </div>
      );
   }

   return (
      <div className="pl-10 pr-1">
         <h2 className="text-xl font-bold pb-2">Top featured projects</h2>
         <div className="flex gap-40">
            {$featured.query.data?.map(renderProperty)}
         </div>
      </div>
   );
}