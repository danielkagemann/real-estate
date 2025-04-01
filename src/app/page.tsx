"use client";

import { Agents } from "@/components/agents/Agents";
import { Featured } from "@/components/featured/Featured";
import { Footer } from "@/components/layout/Footer";
import { Hero, HeroSize } from "@/components/layout/Hero";

export default function Home() {

  return (
    <>
      <Hero size={HeroSize.standard} />
      <Featured />
      <Agents />
      <Footer />
    </>
  );
}
