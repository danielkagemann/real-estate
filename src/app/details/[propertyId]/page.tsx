"use client"

import { AgentFormular } from "@/components/agents/AgentFormular";
import { Footer } from "@/components/layout/Footer";
import { Hero, HeroSize } from "@/components/layout/Hero"
import { ImageSelector } from "@/components/ui/ImageSelector";
import { Price, PriceSize } from "@/components/ui/Price";
import { Tag, TagSize } from "@/components/ui/Tag";
import { useGetProperty } from "@/hooks/propertyEndpoints"
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

         <div className="pl-10 pr-10 flex gap-4">

            <div className="w-1/2">
               <ImageSelector images={data?.images as string} />

               <AgentFormular agent={data?.agent_name ?? ''} id={data?.id ?? 0} image={data?.agent_image} />

            </div>
            <div className="w-1/2">
               <Tag filled size={TagSize.small}>{data?.type}</Tag>
               <h2 className="text-lg font-bold">{data?.title}</h2>
               <div className="text-xs pb-4">propertyId: <strong>{data?.id}</strong></div>
               <p className="text-xs">{data?.description}</p>

               <div className="pt-2 pb-2">
                  <Price relativePosition size={PriceSize.big}>{data?.price}</Price>
               </div>

               <div className="flex justify-start">
                  fixme: attributes
                  fixme: map
               </div>
            </div>
         </div>

         <Footer />
      </>
   )
}