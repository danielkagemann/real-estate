import { useGetFeaturedProperties } from "@/shared/hooks/propertyEndpoints";
import { SkeletonLoader } from "../ui/SkeletonLoader";
import { PropertyFeature } from "../properties/PropertyFeature";
import { PropertyItem } from "../properties/PropertyItem";
import { Headline } from "../ui/Headline";

export const Featured = () => {
   const $featured = useGetFeaturedProperties()

   if ($featured.isLoading) {
      return (
         <>
            <SkeletonLoader className="w-1/6 h-8 mb-2" />
            <div className="flex gap-8 w-full justify-between">
               <SkeletonLoader className="w-2/6 h-20 mb-2" />
               <SkeletonLoader className="w-2/6 h-20 mb-2" />
               <SkeletonLoader className="w-2/6 h-20 mb-2" />
            </div>
         </>
      )
   }

   return (
      <>
         <Headline>Featured projects</Headline>
         <div className="flex gap-8 w-full justify-between">
            {$featured.data?.map((p) => <PropertyItem key={p.id} property={p} />)}
         </div>
      </>
   );
}