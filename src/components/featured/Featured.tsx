import { useGetFeaturedProperties } from "@/hooks/propertyEndpoints";
import { SkeletonLoader } from "../ui/SkeletonLoader";
import { PropertyFeature } from "../properties/PropertyFeature";

export const Featured = () => {
   const $featured = useGetFeaturedProperties()

   if ($featured.isLoading) {
      return (<div className="p-10">
         <SkeletonLoader className="w-1/6 h-4 mb-2" />
         <div className="flex gap-8 w-full justify-between">
            <SkeletonLoader className="w-2/6 h-20 mb-2" />
         </div>
      </div>)
   }

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">Top featured projects</h2>
         <div className="flex gap-8 w-full justify-between">
            {$featured.data?.map((p) => <PropertyFeature key={p.id} item={p} />)}
         </div>
      </div>
   );
}