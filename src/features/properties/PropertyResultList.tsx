import { useGetProperties } from "@/shared/hooks/propertyEndpoints";
import { filterSchema, Property } from "@/shared/models/schema";
import { useSearchParams } from "next/navigation";
import { Headline } from "../ui/Headline";
import { PropertyItem } from "./PropertyItem";
import { EmptyState } from "../layout/EmptyState";
import { SkeletonLoader } from "../ui/SkeletonLoader";
import { useEffect, useState } from "react";
import { $Config } from "@/shared/config";

export const PropertyResultList = () => {
   const [items, setItems] = useState<Property[]>([])
   const [page, setPage] = useState<number>(1)

   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const sort = searchParams.get('sort') || 'latest'

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice, page, size: $Config.defaultPageSize, sort }))

   useEffect(() => {
      if ($properties.data?.properties && $properties.data.properties.length > 0) {

         setItems((prev) => {
            const newItems = [...prev, ...$properties.data!.properties]
            return newItems
         })
      }
   }, [$properties.data?.properties?.map((p) => p.id).join('-')])

   // all property changes shouldl reset the items
   useEffect(() => {
      setItems($properties.data?.properties ?? [])
   }, [searchParams]);


   function renderLoading() {
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
      return null
   }

   function nextPage() {
      setPage((prev) => prev + 1)
   }

   function renderLoadMore() {
      const totalPages = Math.ceil($properties.data?.total / $Config.defaultPageSize);
      if (page < totalPages) {
         return (
            <div className="flex justify-center">
               <button type="button"
                  className="bg-black text-white py-2 px-4 rounded-xl cursor-pointer"
                  onClick={nextPage}
               >Load more properties...</button>
            </div>)
      }

      return null
   }

   return (
      <>
         <Headline>Results ({items.length} of {$properties.data?.total})</Headline>
         <div className="flex gap-8 w-full flex-wrap pt-2">
            {items.map((p) => <PropertyItem key={p.id} property={p} withCompare />)}
            {items.length === 0 && <EmptyState>No properties found</EmptyState>}
         </div>

         {renderLoadMore()}
         {renderLoading()}

         <div className="pt-4" />
      </>
   );
}
