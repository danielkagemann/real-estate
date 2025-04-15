"use client";

import { Footer } from "@/features/layout/Footer";
import { Hero } from "@/features/layout/Hero";
import { PropertyFilter } from "@/features/properties/PropertyFilter";
import { PropertyResultList } from "@/features/properties/PropertyResultList";

export default function Page() {
   return (
      <>
         <PropertyFilter />
         <div className="pb-4" />
         <PropertyResultList />
      </>
   );
}