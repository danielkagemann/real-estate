"use client"

import { Filters, filterSchema, TypeEnum } from "@/shared/models/schema";
import { FormEvent, useEffect, useState } from "react";
import { Tag } from "../ui/Tag";
import { IconSearch } from "@tabler/icons-react";
import { useGetDistinctFilter } from "@/shared/hooks/propertyEndpoints";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { Menu } from "../ui/Menu";
import { Headline } from "../ui/Headline";

export const PropertyFilter = () => {
   const searchParams = useSearchParams()

   const locations = searchParams.getAll('locations')
   const types = searchParams.getAll('types')
   const maxPrice = Number(searchParams.get('maxPrice'))
   const page = Number(searchParams.get('page')) || 1
   const size = Number(searchParams.get('size')) || 12
   const sort = searchParams.get('sort') || "latest"

   const router = useRouter()
   const [filter, setFilter] = useState<Filters>(filterSchema.parse({ locations, types, maxPrice, page, size, sort }));

   const $distinct = useGetDistinctFilter()

   const handleSearch = () => {
      const params = new URLSearchParams()
      filter.locations.forEach(loc => params.append('locations', loc))
      filter.types.forEach(type => params.append('types', type))
      params.set('maxPrice', String(filter.maxPrice))
      params.set('page', '1') // set back to page 1
      params.set('size', String(filter.size))
      params.set('sort', String(filter.sort))
      router.push(`/properties?${params.toString()}`)
   }

   // listen to changes on filter and force direct update
   useEffect(handleSearch, [filter])

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

   const handleSort = (name: "latest" | "price") => () => {
      setFilter({ ...filter, sort: name })
   }

   const renderLocations = () => (
      <div className="w-1/3">
         <Menu title="Locations"
            value={(<p className="text-ellipsis text-nowrap">
               {filter.locations.length === 0 && 'ALL'}
               {filter.locations.length >= 1 && filter.locations[0]}
               {filter.locations.length > 1 && `, +${filter.locations.length - 1}`}
            </p>)}>
            <div className="h-60 overflow-y-auto flex flex-col gap-1">
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
      </div>
   );

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
      <div className="flex flex-col w-1/3">
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
      <div className="flex flex-col gap-1 w-1/3">
         <strong>Max. price</strong>
         <input type="text"
            className="border-0 bg-transparent ring-0 focus:outline-none"
            placeholder="no limit"
            value={filter.maxPrice === 0 ? '' : filter.maxPrice.toString()}
            onChange={handlePrice} />
      </div>
   );

   const sortActive = "bg-orange-600 text-white p-1 pl-2 pr-2 text-base rounded-lg cursor-pointer"
   const sortDefault = "border border-orange-600 text-orange-600 p-1 pl-2 pr-2 text-base rounded-lg cursor-pointer"
   return (
      <>
         <Headline>Find your property</Headline>
         <form className="rounded-2xl bg-gray-100 p-4">
            <div className="flex w-full pt-2">
               {renderLocations()}
               {renderTypes()}
               {renderPrice()}
            </div>
         </form>

         <div className="flex justify-end gap-1 items-center pt-2">
            <span>Sort by</span>
            <button className={sort === 'latest' ? sortActive : sortDefault}
               onClick={handleSort('latest')}>latest</button>
            <button className={sort === 'price' ? sortActive : sortDefault}
               onClick={handleSort('price')}>price</button>
         </div>
      </>
   );
}