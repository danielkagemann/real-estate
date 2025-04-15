"use client"

import { AgentFormular } from "@/features/agents/AgentFormular";
import { PropertyAttribute } from "@/features/ui/PropertyAttribute";
import { ImageSelector } from "@/features/ui/ImageSelector";
import { useGetProperty } from "@/shared/hooks/propertyEndpoints"
import { IconBath, IconBed, IconBuilding, IconCalendar, IconDimensions, IconParking } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { Headline } from "@/features/ui/Headline";
import { CheckItem } from "@/features/ui/Checkitem";

export default function Page() {
   const params = useParams();
   const propertyId = params.propertyId as string;

   const $property = useGetProperty(propertyId)

   if ($property.isLoading) {
      // FIXME: loading
      return <div>Loading...</div>
   }

   if ($property.isError) {
      return <div>Error: {$property.error.message}</div>
   }
   const { data } = $property

   const featureList = JSON.parse(data?.features as string) as string[]

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
            <div className="w-1/2">
               <h3 className="text-lg">Overview</h3>
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
               <h3 className="text-lg">Features</h3>
               {featureList.map((item) => (<CheckItem key={item}>{item}</CheckItem>))}
            </div>
            <div className="w-1/2">
               <AgentFormular agent={data?.agent_name ?? ''} id={data?.id ?? 0} image={data?.agent_image} />
            </div>
         </div>
         <div className="pt-4" />
      </>
   )
}