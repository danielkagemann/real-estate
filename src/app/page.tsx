"use client";

import { Agents } from "@/components/agents/Agents";
import { Featured } from "@/components/featured/Featured";
import { Facts } from "@/components/layout/Facts";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { WhyUs } from "@/components/layout/WhyUs";

export default function Home() {

  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <WhyUs />
      <Featured />
      <Facts />
      <Agents />
    </div>
  );
}
