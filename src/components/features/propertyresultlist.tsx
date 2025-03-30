import { useGetProperties } from "@/hooks/propertyEndpoints";
import { filterSchema, Property } from "@/models/schema";
import { useSearchParams } from "next/navigation";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice }))

   const renderProperty = (item: Property) => {
      const image = JSON.parse(item.images ?? "[]")[0]
      return (
         <div key={item.id}
            className="flex w-full gap-2 bg-white pb-3 not-last:border-b">

            <img src={image} alt="property:image"
               className="min-w-[250px] h-[150px] object-cover" />

            <div className="flex flex-col p-4">
               <h3 className="text-base font-bold">{item.title}</h3>
               <p className="text-xs">{item.description}</p>
            </div>
         </div>
      )
   }

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">{$properties.data?.length} dream properties found</h2>
         <div className="flex flex-col gap-4">
            {$properties.data?.map(renderProperty)}
         </div>
      </div>
   );
}