import { useGetProperties } from "@/shared/hooks/propertyEndpoints";
import { filterSchema } from "@/shared/models/schema";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { Headline } from "../ui/Headline";
import { PropertyItem } from "./PropertyItem";
import { EmptyState } from "../layout/EmptyState";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const page = Number(searchParams.get('page')) || 1
   const size = Number(searchParams.get('size')) || 10

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice, page, size }))

   const hasData = $properties.data?.properties?.length > 0 ?? false

   return (
      <>
         <Headline>Results ({$properties.data?.total})</Headline>
         <div className="flex gap-8 w-full flex-wrap">
            {$properties.data?.properties.map((p) => <PropertyItem key={p.id} property={p} />)}
            {!hasData && <EmptyState>No properties found</EmptyState>}
         </div>
         {hasData && <Pagination limit={size} page={page} total={$properties.data?.total ?? 0} />}
         <div className="pt-4" />
      </>
   );
}