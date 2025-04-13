"use client";

import { Agents } from "@/components/layout/Agents";
import { Featured } from "@/components/featured/Featured";
import { Facts } from "@/components/layout/Facts";
import { Hero } from "@/components/layout/Hero";
import { WhyUs } from "@/components/layout/WhyUs";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="pb-12" />
      <WhyUs />
      <div className="pb-12" />
      <Featured />
      <div className="pb-12" />
      <Facts />
      <div className="pb-12" />
      <Agents />
      <div className="pb-12" />
    </div>
  );
}
