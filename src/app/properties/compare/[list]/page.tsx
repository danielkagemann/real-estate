"use client";

import { useGetCompareProperties, useGetProperty } from "@/shared/hooks/propertyEndpoints";
import { Property } from "@/shared/models/schema";
import { table } from "console";
import { useParams } from "next/navigation";
import { StringifyOptions } from "querystring";
import { ReactNode } from "react";

export default function Page() {

   const params = useParams();
   const ids: string[] = (params.list as string).split('-')

   console.log(ids)

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

   function renderRow(label: string, attribute: string, render: (value: any) => ReactNode) {
      return (
         <tr key={attribute}>
            <td className="font-bold border-b border-gray-400 p-2 text-xs">{label}</td>
            {
               list.map((item: Property, index: number) => (<td className="border-b border-gray-400 p-2" key={`${attribute}-${index}`}>{render(item[attribute])}</td>))
            }
         </tr>
      )
   }

   function renderString(add: string = '') {
      return function (v: string) {
         if (!v || v.length === 0) {
            return '---'
         }
         return (<>{v} {add}</>)
      }
   }

   function renderImage() {
      return function (v: string) {
         const image = JSON.parse(v)
         return (<img src={image[0]} alt="compare:image" className="w-[120px] aspect-3/2 object-cover rounded-xl" />)
      }
   }

   console.log('list', list)

   return (
      <table className="table-auto w-full border-collapse">
         <tbody>
            {renderRow('', 'images', renderImage())}
            {renderRow('', 'title', renderString())}
            {renderRow('Location', 'location', renderString())}
            {renderRow('Type', 'type', renderString())}
            {renderRow('Build', 'year', renderString())}
            {renderRow('Price', 'price', renderString('EUR'))}
            {renderRow('Area', 'area', renderString('sqm'))}
            {renderRow('Plot', 'plot', renderString('sqm'))}
            {renderRow('Bedrooms', 'bedrooms', renderString())}
            {renderRow('Bathrooms', 'bathrooms', renderString())}
            {renderRow('Parking', 'parking', renderString())}
            {renderRow('Your contact', 'agent_name', renderString())}
         </tbody>
      </table>
   )
}