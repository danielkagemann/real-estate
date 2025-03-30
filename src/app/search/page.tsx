"use client";

import { Footer } from "@/components/features/footer";
import { Hero } from "@/components/features/hero";
import { PropertyResultList } from "@/components/features/propertyresultlist";

export default function Page() {
   return (
      <>
         <Hero compact />
         <PropertyResultList />
         <Footer />
      </>
   );
}