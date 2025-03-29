import { SearchFilter, initSearchFilter } from "@/models/searchtype";
import React from "react";
import { useState } from "react";
import { Menu } from "./ui/Menu";
import { useQuery } from "@tanstack/react-query";

type FilterData = {
   types: string[]
   locations: string[]
}

async function fetchFilterData() {
   const res = await fetch('/api/properties/filter')
   if (!res.ok) {
      throw new Error('Fehler beim Laden der Filterdaten')
   }
   return res.json()
}

export const ActionSearch = () => {
   /// states
   const [filter, setFilter] = useState<SearchFilter>(initSearchFilter())

   /// query
   const { data, error, isLoading } = useQuery<FilterData>({
      queryKey: ['filters'],
      queryFn: fetchFilterData,
   })
   const fetchFilters = async () => {
      const res = await fetch('/api/properties/filter')
      return await res.json()
   }

   // FIXME handle click on checkbox
   function renderLocation() {
      return (
         <div className='flex flex-col'>
            <Menu title="Locations">
               {data?.locations.map((loc: string) => <div className="flex items-center gap-1">
                  <input type="checkbox" value={loc} onChange={() => null} checked={filter.location.includes(loc)} />{loc}
               </div>)}
            </Menu>
            <p className="text-gray-400">{filter.location.join(',') || 'All'}</p>
         </div>
      );
   }

   function renderType() {
      return (
         <div className='flex flex-col'>
            <Menu title="Property types">
               {data?.types.map((type: string) => <div className="flex items-center gap-1">
                  <input type="checkbox" value={type} onChange={() => null} checked={filter.type.includes(type)} />{type}
               </div>)}
            </Menu>
            <p className="text-gray-400">{filter.location.join(',') || 'All'}</p>
         </div>
      );
   }

   return (
      <div className="flex justify-center p-2 w-full">
         <div className="flex justify-between items-center bg-white w-[80%] p-4 text-xs">
            {renderLocation()}
            {renderType()}
            <button type="button" className="bg-black text-white p-3 border-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </button>
         </div>
      </div>
   );
};