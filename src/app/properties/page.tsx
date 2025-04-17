"use client";

import { CompareSelection } from "@/features/properties/CompareSelection";
import { PropertyFilter } from "@/features/properties/PropertyFilter";
import { PropertyResultList } from "@/features/properties/PropertyResultList";

export default function Page() {
   return (
      <>
         <PropertyFilter />
         <div className="pb-4" />
         <PropertyResultList />

         <CompareSelection />
      </>
   );
}