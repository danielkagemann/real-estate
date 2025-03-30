"use client";

import { Agents } from "@/components/features/agents";
import { Featured } from "@/components/features/featured";
import { Hero } from "@/components/features/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Agents />

      <footer className="bg-black text-white text-xs p-10">
        <div className="flex justify-between">
          <div>
            <strong>real estate</strong><br />
            Calle Velázquez, 42, 3º Izquierda<br />
            28001 Madrid<br />
            España<br />
          </div>

          <div className="flex flex-col">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/data-policy"}>Data policy</Link>
            <Link href={"/imprint"}>Imprint</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
