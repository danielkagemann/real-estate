"use client";

import { Agents } from "@/components/features/agents";
import { Featured } from "@/components/features/featured";
import { Footer } from "@/components/features/footer";
import { Hero } from "@/components/features/hero";

export default function Home() {

  return (
    <>
      <Hero />
      <Featured />
      <Agents />
      <Footer />
    </>
  );
}
