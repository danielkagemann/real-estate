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

   if ($compare.isError) {
      throw new Error('Compare error');
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

   function renderFeatures() {
      const featureList = list.map((item: Property) => JSON.parse(item.features as string) as string[])

      if (featureList.length === 0) {
         return null
      }

      const globalOrder: string[] = [];
      const seen = new Set<string>();

      for (const row of featureList) {
         for (const item of row) {
            if (!seen.has(item)) {
               seen.add(item);
               globalOrder.push(item);
            }
         }
      }

      const sorted = featureList.map(row => {
         const unique = new Set(row);
         return globalOrder.map(key => (unique.has(key) ? key : "---"));
      });

      return (
         <tr key="features">
            <td className="font-bold border-b border-gray-200 p-2 text-xs">Features</td>
            {
               sorted.map((item: string[], index: number) => (<td className="border-b border-gray-200 p-2" key={`features-${index}`}>
                  {
                     item.map((feature: string, featureIndex: number) => (<div key={feature + featureIndex + index}>{feature}</div>))
                  }
               </td>))
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

   function _agent(item: Property) {
      return (<div className="flex justify-start items-center gap-2">
         <img src={item.agent_image} className="w-[32px] aspect-square rounded-xl" alt={item.agent_name} />
         {item.agent_name}
      </div>)
   }

   return (
      <table className="table-auto w-full border-collapse pb-4">
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
            {renderFeatures()}
            {renderRow('Your agent', _agent)}
            {renderRow('', _link)}
         </tbody>
      </table>

   )
}