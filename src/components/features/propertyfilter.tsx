import { Filters, filterSchema, TypeEnum, typeEnumSchema } from "@/models/property";
import { FC, useState } from "react";
import { Tag } from "../ui/Tag";

type FilterProps = {
   onApply: () => void
};

export const PropertyFilter: FC<FilterProps> = ({ onApply }) => {
   const [filter, setFilter] = useState<Filters>(filterSchema.parse({}));

   const renderLocations = () => (
      <div className="flex flex-col gap-1">
         <strong>Location</strong>
         <p className="text-ellipsis">
            {filter.locations.join(', ') || 'All'}
         </p>
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
      <div className="flex flex-col gap-1">
         <strong>Property type</strong>
         <div className="flex flex-row gap-1 items-center">
            <Tag onClick={toggleType('villa')} filled={filter.types.includes('villa')}>Villa</Tag>
            <Tag onClick={toggleType('apartment')} filled={filter.types.includes('apartment')}>Apartment</Tag>
            <Tag onClick={toggleType('finca')} filled={filter.types.includes('finca')}>Finca</Tag>
         </div>
      </div>
   );

   const handlePrice = (event: InputEvent) => {
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
      <div className="shadow-2xl rounded-4xl bg-white mt-2 text-xs">
         <div className="flex justify-evenly p-4 gap-2 ">
            {renderLocations()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            {renderTypes()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            {renderPrice()}
            <div className="h-auto w-[1px] bg-gray-400"></div>
            <button type="button"
               className="cursor-pointer rounded-4xl bg-red-700 text-white p-4"
               onClick={onApply}>
               <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </button>
         </div>
      </div>
   );
}