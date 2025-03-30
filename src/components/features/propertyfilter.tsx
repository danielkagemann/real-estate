import { Filters, filterSchema, TypeEnum } from "@/models/schema";
import { FormEvent, useState } from "react";
import { Tag } from "../ui/Tag";
import { IconSearch } from "@tabler/icons-react";
import { useGetDistinctFilter } from "@/hooks/propertyEndpoints";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

// FIXME: user can select locations from menu
export const PropertyFilter = () => {
   const searchParams = useSearchParams()

   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))

   const router = useRouter()
   const [filter, setFilter] = useState<Filters>(filterSchema.parse({ locations, types, maxPrice }));

   const $distinct = useGetDistinctFilter()

   const renderLocations = () => (
      <div className="flex flex-col gap-1">
         <strong>Location</strong>
         <p className="text-ellipsis">
            {filter.locations.join(', ') || 'All'}
         </p>
      </div>
   );

   const handleSearch = (event: FormEvent) => {
      event.preventDefault()
      const params = new URLSearchParams()
      filter.locations.forEach(loc => params.append('locations', loc))
      filter.types.forEach(type => params.append('types', type))
      params.set('maxPrice', String(filter.maxPrice))
      router.push(`/search?${params.toString()}`)
   }

   const toggleType = (value: string) => () => {
      const list = [...filter.types]
      const id = list.indexOf(value as TypeEnum)
      if (id === -1) {
         list.push(value as TypeEnum)
      } else {
         list.splice(id, 1)
      }

      setFilter({ ...filter, types: list })
   }

   const renderTypes = () => (
      <div className="flex flex-col gap-1">
         <strong>Property type</strong>
         <div className="flex flex-row gap-1 items-center">
            {
               $distinct.query.data?.types.map((type) => (
                  <Tag key={type}
                     onClick={toggleType(type)}
                     filled={filter.types.includes(type as TypeEnum)}>{type}</Tag>
               ))
            }
         </div>
      </div>
   );

   const handlePrice = (event: any) => {
      const { value } = event.target
      setFilter({ ...filter, maxPrice: Number(value) })
   }

   const renderPrice = () => (
      <div className="flex flex-col gap-1">
         <strong>Max. price</strong>
         <input type="text"
            className="border-0 bg-transparent ring-0"
            placeholder="no limit"
            value={filter.maxPrice === 0 ? '' : filter.maxPrice.toString()}
            onChange={handlePrice} />
      </div>
   );

   return (
      <form className="shadow-2xl rounded-4xl bg-white mt-2 text-xs" onSubmit={handleSearch}>
         <div className="flex justify-evenly p-4 gap-2 ">
            {renderLocations()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            {renderTypes()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            {renderPrice()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            <button type="submit"
               className="cursor-pointer rounded-4xl bg-red-700 text-white p-4"
            >
               <IconSearch stroke={1} size={16} />
            </button>
         </div>
      </form>
   );
}