import { useGetProperties } from "@/hooks/propertyEndpoints";
import { filterSchema } from "@/models/schema";
import { useSearchParams } from "next/navigation";
import { PropertyResultItem } from "./PropertyResultItem";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice }))

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">{$properties.data?.length} dream properties found</h2>
         <div className="flex flex-col gap-4">
            {$properties.data?.map((p) => <PropertyResultItem key={p.id} item={p} />)}
         </div>
      </div>
   );
}