"use client"

import { AgentFormular } from "@/features/agents/AgentFormular";
import { PropertyAttribute } from "@/features/ui/PropertyAttribute";
import { ImageSelector } from "@/features/ui/ImageSelector";
import { useGetProperty, useGetRelatedProperties } from "@/shared/hooks/propertyEndpoints"
import { IconBath, IconBed, IconBuilding, IconCalendar, IconDimensions, IconParking } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { Headline } from "@/features/ui/Headline";
import { CheckItem } from "@/features/ui/Checkitem";
import { PropertyItem } from "@/features/properties/PropertyItem";
import SlideIn from "@/features/motion/SlideIn";
import Map from "@/features/ui/Map";
import { SkeletonLoader } from "@/features/ui/SkeletonLoader";

export default function Page() {
   const params = useParams();
   const propertyId = params.propertyId as string;

   const $property = useGetProperty(propertyId)
   const $related = useGetRelatedProperties(propertyId, $property.data?.price, $property.data?.area)

   if ($property.isLoading) {
      return (
         <>
            <div className="flex w-full justify-between mb-8">
               <div>
                  <SkeletonLoader className="w-60 h-8 mb-4" />
                  <SkeletonLoader className="w-32 h-3" />
               </div>
               <div>
                  <SkeletonLoader className="w-10 h-4 mb-4" />
                  <SkeletonLoader className="w-4 h-2" />
               </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-2">
               <div className="col-span-2 row-span-2"><SkeletonLoader className="w-full h-[400px]" /></div>
               <div className="col-start-3">
                  <SkeletonLoader className="w-full h-[calc(200px-0.25rem)]" />
               </div>
               <div className="col-start-3 row-start-2">
                  <SkeletonLoader className="w-full h-[calc(200px-0.25rem)]" />
               </div>
            </div>
         </>
      )
   }

   if ($property.isError) {
      return <div>Error: {$property.error.message}</div>
   }
   const { data } = $property

   const featureList = JSON.parse(data?.features as string) as string[]

   function renderRelated() {
      if ($related?.isError) {
         return null;
      }

      const relatedList = $related?.data || []
      return (
         <>
            <div className="pt-8" />
            <h3 className="text-lg font-bold">Related properties</h3>
            <div className="flex gap-4">
               {relatedList.map((p: any) => <PropertyItem key={p.id} property={p} className="w-[calc(50%-0.75rem)]" />)}
            </div>
         </>
      )
   }

   return (
      <>
         <div className="flex justify-between w-full items-center pb-4">
            <div>
               <Headline>{data?.title}</Headline>
               <div className="text-gray-700">in {data?.location}</div>
            </div>
            <div>
               <div className="text-lg text-orange-600 font-bold text-right">{data?.price.toLocaleString('de-DE')} EUR</div>
               <div className="text-xs text-right">ref: {data?.id}</div>
            </div>
         </div>

         <ImageSelector images={data?.images as string} />

         <div className="pt-4" />
         <div className="flex w-full gap-4">
            <div className="w-2/3">
               <h3 className="text-lg font-bold">Overview</h3>
               <p className="text-gray-700">{data?.description}</p>

               <div className="pt-4" />
               <div className="flex justify-start flex-wrap w-full text-xs gap-2">
                  {data?.bedrooms && <PropertyAttribute icon={<IconBed size={14} />} amount={data.bedrooms} label="bedrooms" />}
                  {data?.bathrooms && <PropertyAttribute icon={<IconBath size={14} />} amount={data.bathrooms} label="bathrooms" />}
                  {data?.plot && <PropertyAttribute icon={<IconDimensions size={14} />} amount={data.plot} label="sqm plot" />}
                  {data?.area && <PropertyAttribute icon={<IconBuilding size={14} />} amount={data.area} label="sqm build" />}
                  {data?.parking && <PropertyAttribute icon={<IconParking size={14} />} amount={data.parking} label="parking" />}
                  {data?.year && <PropertyAttribute icon={<IconCalendar size={14} />} amount={data.year} label="year" />}
               </div>

               <div className="pt-4" />
               <h3 className="text-lg font-bold">Features</h3>
               {featureList.map((item, index) => (
                  <SlideIn direction="top" delay={index * 0.2} key={item}>
                     <CheckItem>{item}</CheckItem>
                  </SlideIn>
               ))}

               {renderRelated()}

               <div className="pt-4" />
               <h3 className="text-lg font-bold">Location</h3>
               <Map location={data?.location ?? ''} />

            </div>
            <div className="w-1/3">
               <AgentFormular agent={data?.agent_name ?? ''} id={data?.id ?? 0} image={data?.agent_image} />
            </div>
         </div>
         <div className="pt-4" />
      </>
   )
}