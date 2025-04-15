"use client";

import { Agents } from "@/features/layout/Agents";
import { Featured } from "@/features/featured/Featured";
import { Facts } from "@/features/layout/Facts";
import { Hero } from "@/features/layout/Hero";
import { WhyUs } from "@/features/layout/WhyUs";
import { Listings } from "@/features/layout/Listings";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="pb-12" />
      <WhyUs />
      <div className="pb-12" />
      <Listings />
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
