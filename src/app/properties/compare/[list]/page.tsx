"use client";

import { useGetCompareProperties } from "@/shared/hooks/propertyEndpoints";
import { Property } from "@/shared/models/schema";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export default function Page() {

   const params = useParams();
   const ids: string[] = (params.list as string).split('-')

   const $compare = useGetCompareProperties(ids)

   // FIXME: loading
   if ($compare.isLoading) {
      return <span>loading</span>
   }

   // FIXME error
   if ($compare.isError) {
      return <span>error</span>
   }

   const list: Property[] = $compare.data ?? []

   function renderRow(label: string, render: (item: Property) => ReactNode) {
      return (
         <tr key={label}>
            <td className="font-bold border-b border-gray-200 p-2 text-xs">{label}</td>
            {
               list.map((item: Property, index: number) => (<td className="border-b border-gray-200 p-2" key={`${label}-${index}`}>{render(item)}</td>))
            }
         </tr>
      )
   }

   function _text(attr: string, suffix: string = '') {
      return function (item: Property) {
         const v = item[attr] || ''
         if (!v || v.length === 0) {
            return '---'
         }
         return (<>{v} {suffix}</>)
      }
   }

   function _title(item: Property) {
      return (<strong>{item.title}</strong>)
   }

   function _image(item: Property) {
      const image = JSON.parse(item.images ?? '')
      return (<img src={image[0]} alt="compare:image" className="w-[120px] aspect-3/2 object-cover rounded-xl" />)
   }

   function _sqmPrice(item: Property) {
      const price = item.price / item.area
      return (<>{price.toFixed(2)} EUR</>)
   }

   function _link(item: Property) {
      return (<Link className="bg-orange-600 text-white p-2 rounded-md" href={`/properties/details/${item.id}`}>Details</Link>)
   }

   return (
      <table className="table-auto w-full border-collapse">
         <tbody>
            {renderRow('', _image)}
            {renderRow('', _title)}
            {renderRow('Location', _text('location'))}
            {renderRow('Type', _text('type'))}
            {renderRow('Build', _text('year'))}
            {renderRow('Price', _text('price', 'EUR'))}
            {renderRow('sqm price', _sqmPrice)}
            {renderRow('Area', _text('area', 'sqm'))}
            {renderRow('Plot', _text('plot', 'sqm'))}
            {renderRow('Bedrooms', _text('bedrooms'))}
            {renderRow('Bathrooms', _text('bathrooms'))}
            {renderRow('Parking', _text('parking'))}
            {renderRow('Your agent', _text('agent_name'))}
            {renderRow('', _link)}
         </tbody>
      </table>
   )
}