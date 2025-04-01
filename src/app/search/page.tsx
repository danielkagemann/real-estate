"use client";

import { Footer } from "@/components/layout/Footer";
import { Hero, HeroSize } from "@/components/layout/Hero";
import { PropertyResultList } from "@/components/properties/PropertyResultList";

export default function Page() {
   return (
      <>
         <Hero size={HeroSize.small} />
         <PropertyResultList />
         <Footer />
      </>
   );
}