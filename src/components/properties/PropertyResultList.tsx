import { useGetProperties } from "@/hooks/propertyEndpoints";
import { filterSchema } from "@/models/schema";
import { useSearchParams } from "next/navigation";
import { PropertyResultItem } from "./PropertyResultItem";
import Pagination from "./Pagination";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const page = Number(searchParams.get('page')) || 1
   const size = Number(searchParams.get('size')) || 10

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice, page, size }))

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">{$properties.data?.total} dream properties found</h2>
         <div className="flex flex-col gap-4">
            {$properties.data?.properties.map((p) => <PropertyResultItem key={p.id} item={p} />)}
         </div>
         <Pagination limit={size} page={page} total={$properties.data?.total ?? 0} />
         <div className="pt-4" />
      </div>
   );
}