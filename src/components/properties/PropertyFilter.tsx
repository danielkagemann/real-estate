"use client"

import { Filters, filterSchema, TypeEnum } from "@/models/schema";
import { FormEvent, useState } from "react";
import { Tag } from "../ui/Tag";
import { IconSearch } from "@tabler/icons-react";
import { useGetDistinctFilter } from "@/hooks/propertyEndpoints";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { Menu } from "../ui/Menu";

export const PropertyFilter = () => {
   const searchParams = useSearchParams()

   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const page = Number(searchParams.get('page')) || 1
   const size = Number(searchParams.get('size')) || 10

   const router = useRouter()
   const [filter, setFilter] = useState<Filters>(filterSchema.parse({ locations, types, maxPrice, page, size }));

   const $distinct = useGetDistinctFilter()

   const handleLocation = (name: string) => () => {
      const list = [...filter.locations];
      const id = list.indexOf(name);
      if (id === -1) {
         list.push(name);
      } else {
         list.splice(id, 1);
      }
      setFilter({ ...filter, locations: list })
   }

   const renderLocations = () => (
      <div className="flex flex-col gap-1">
         <Menu title="Locations">
            <div className="h-32 overflow-y-auto flex flex-col gap-1">
               <button type="button" className="bg-gray-700 cursor-pointer text-white p-1 mb-2" onClick={() => setFilter({ ...filter, locations: [] })}>clear all</button>
               {
                  $distinct.data?.locations.map((name) => (
                     <button type="button"
                        className={`text-left bg-transparent cursor-pointer text-nowrap hover:font-bold ${filter.locations.includes(name) ? 'font-bold' : ''}`}
                        key={name}
                        onClick={handleLocation(name)}>{name}</button>
                  ))
               }
            </div>
         </Menu>
         <p className="text-ellipsis text-nowrap">
            {filter.locations.length === 0 && 'ALL'}
            {filter.locations.length >= 1 && filter.locations[0]}
            {filter.locations.length > 1 && `, +${filter.locations.length - 1}`}
         </p>
      </div>
   );

   const handleSearch = (event: FormEvent) => {
      event.preventDefault()
      const params = new URLSearchParams()
      filter.locations.forEach(loc => params.append('locations', loc))
      filter.types.forEach(type => params.append('types', type))
      params.set('maxPrice', String(filter.maxPrice))
      params.set('page', '1') // set back to page 1
      params.set('size', String(filter.size))
      router.push(`/properties?${params.toString()}`)
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
               $distinct.data?.types.map((type) => (
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
            className="border-0 bg-transparent ring-0 focus:outline-none"
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