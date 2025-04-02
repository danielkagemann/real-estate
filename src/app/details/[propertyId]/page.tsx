"use client"

import { AgentFormular } from "@/components/agents/AgentFormular";
import { Footer } from "@/components/layout/Footer";
import { Hero, HeroSize } from "@/components/layout/Hero"
import { PropertyAttribute } from "@/components/ui/PropertyAttribute";
import { ImageSelector } from "@/components/ui/ImageSelector";
import { Price, PriceSize } from "@/components/ui/Price";
import { Tag, TagSize } from "@/components/ui/Tag";
import { useGetProperty } from "@/hooks/propertyEndpoints"
import { IconBath, IconBed, IconBuilding, IconCalendar, IconDimensions, IconParking } from "@tabler/icons-react";
import { useParams } from "next/navigation";

export default function Page() {
   const params = useParams();
   const propertyId = params.propertyId as string;

   const $property = useGetProperty(propertyId)

   if ($property.isLoading) {
      return <div>Loading...</div>
   }

   if ($property.isError) {
      return <div>Error: {$property.error.message}</div>
   }
   const { data } = $property

   return (
      <>
         <Hero size={HeroSize.mini} />

         <div className="pl-10 pr-10 flex gap-4 mb-4">

            <div className="w-1/2">
               <ImageSelector images={data?.images as string} />
               <div className="pb-4" />
               <AgentFormular agent={data?.agent_name ?? ''} id={data?.id ?? 0} image={data?.agent_image} />

            </div>
            <div className="w-1/2">
               <Tag filled size={TagSize.small}>{data?.type}</Tag>
               <h2 className="text-xl font-bold">{data?.title}</h2>
               <div className="text-xs pb-4">propertyId: <strong>{data?.id}</strong></div>

               <div className="flex justify-start flex-wrap w-full text-xs gap-2">
                  {data?.bedrooms && <PropertyAttribute icon={<IconBed size={14} />} amount={data.bedrooms} label="bedrooms" />}
                  {data?.bathrooms && <PropertyAttribute icon={<IconBath size={14} />} amount={data.bathrooms} label="bathrooms" />}
                  {data?.plot && <PropertyAttribute icon={<IconDimensions size={14} />} amount={data.plot} label="sqm plot" />}
                  {data?.area && <PropertyAttribute icon={<IconBuilding size={14} />} amount={data.area} label="sqm build" />}
                  {data?.parking && <PropertyAttribute icon={<IconParking size={14} />} amount={data.parking} label="parking" />}
                  {data?.build && <PropertyAttribute icon={<IconCalendar size={14} />} amount={data.build} label="build" />}
               </div>
               <div className="pt-4 pb-4">
                  <Price relativePosition size={PriceSize.big}>{data?.price}</Price>
               </div>
               <p className="pt-4 pb-4">{data?.description}</p>
            </div>
         </div>

         <Footer />
      </>
   )
}