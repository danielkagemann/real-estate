"use client";

import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { PropertyFilter } from "@/components/properties/PropertyFilter";
import { PropertyResultList } from "@/components/properties/PropertyResultList";

export default function Page() {
   return (
      <>
         <PropertyFilter />
         <PropertyResultList />
      </>
   );
}