import { useGetProperties } from "@/shared/hooks/propertyEndpoints";
import { filterSchema } from "@/shared/models/schema";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { Headline } from "../ui/Headline";
import { PropertyItem } from "./PropertyItem";
import { EmptyState } from "../layout/EmptyState";
import { SkeletonLoader } from "../ui/SkeletonLoader";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const page = Number(searchParams.get('page')) || 1
   const size = Number(searchParams.get('size')) || 10
   const sort = searchParams.get('sort') || 'latest'

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice, page, size, sort }))

   if ($properties.isLoading) {
      return (
         <>
            <SkeletonLoader className="w-40 h-5 mb-4" />
            <div className="flex gap-8 w-full flex-wrap">
               <SkeletonLoader className="w-[calc(33%-1.25rem)] h-40" />
               <SkeletonLoader className="w-[calc(33%-1.25rem)] h-40" />
               <SkeletonLoader className="w-[calc(33%-1.25rem)] h-40" />
            </div>
         </>
      )
   }

   const hasData = $properties.data?.properties?.length > 0 ?? false

   return (
      <>
         <Headline>Results ({$properties.data?.total})</Headline>
         <div className="flex gap-8 w-full flex-wrap pt-2">
            {$properties.data?.properties.map((p) => <PropertyItem key={p.id} property={p} withCompare />)}
            {!hasData && <EmptyState>No properties found</EmptyState>}
         </div>
         {hasData && <Pagination limit={size} page={page} total={$properties.data?.total ?? 0} />}
         <div className="pt-4" />
      </>
   );
}