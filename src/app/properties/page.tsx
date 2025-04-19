"use client";

import { COMPARE_MAX, CompareContext } from "@/features/compare/context";
import { CompareSelection } from "@/features/compare/CompareSelection";
import { PropertyFilter } from "@/features/properties/PropertyFilter";
import { PropertyResultList } from "@/features/properties/PropertyResultList";
import { Property } from "@/shared/models/schema";
import { useState } from "react";

export default function Page() {
   const [selected, setSelected] = useState<Property[]>([])

   const toggleSelection = (item: Property) => {
      const tmp = [...selected]
      const index = tmp.findIndex((obj) => item.id === obj.id)
      if (index !== -1) {
         tmp.splice(index, 1)
      } else {
         if (tmp.length === COMPARE_MAX) {
            return;
         }
         tmp.push(item)
      }
      setSelected(tmp);
   };

   return (
      <>
         <PropertyFilter />
         <div className="pb-4" />
         <CompareContext.Provider value={{ selected, toggleSelection }}>
            <PropertyResultList />
            <CompareSelection />
         </CompareContext.Provider >
      </>
   );
}