import { useGetProperties } from "@/hooks/propertyEndpoints";
import { filterSchema, Property } from "@/models/schema";
import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tag } from "../ui/Tag";

export const PropertyResultList = () => {
   const searchParams = useSearchParams()
   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))

   const $properties = useGetProperties(filterSchema.parse({ locations, types, maxPrice }))

   const renderProperty = (item: Property, index: number) => {
      const image = JSON.parse(item.images ?? "[]")[0]
      return (
         <motion.div key={item.id}
            initial={{ opacity: 0 }}
            animate={{
               opacity: 1,
               transition: { duration: 1, ease: "easeInOut", delay: 0.2 * index }
            }}
            className="group">
            <Link href={`/details/${item.id}`}
               className="cursor-pointer flex w-full h-[150px] gap-2 bg-gray-100 mb-1 overflow-clip">

               <img src={image} alt="property:image" className="min-w-[250px] max-w-[250px] h-full opacity-80 object-cover overflow-clip group-hover:opacity-100 transition-all duration-300" />
               <div className="flex flex-col p-4">
                  <div className="flex justify-start">
                     <div className="p-1 text-right text-xs opacity-70 bg-black text-white">{item.price.toLocaleString('de-DE')} EUR</div>
                  </div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-xs">{item.description}</p>
                  <div className="flex justify-start text-xs">
                     <Tag filled>{item.type}</Tag>
                  </div>
               </div>
            </Link>
         </motion.div>
      )
   }

   return (
      <div className="p-10">
         <h2 className="text-xl font-bold pb-2">{$properties.data?.length} dream properties found</h2>
         <div className="flex flex-col gap-4">
            {$properties.data?.map(renderProperty)}
         </div>
      </div>
   );
}