"use client";

import { PropertyFilter } from "@/components/features/propertyfilter";

export default function Home() {

  return (
    <main>
      <div className="flex w-full h-[80vh]">
        <div className="lg:w-1/2 sm:w-2/3 flex items-center">
          <div className="p-10">
            <h1 className="text-3xl font-extrabold pb-2">real estate</h1>
            <div className="text-xs/relaxed">
              <strong>Welcome to Your Dream Home in Spain</strong>
              <p>Discover the beauty, culture, and lifestyle of Spain through our exclusive selection of properties. Whether you’re looking for a modern beachfront apartment, a rustic countryside villa, or a smart investment opportunity — we’re here to help you find the perfect place to call home.
                Start your journey today and explore the best real estate Spain has to offer.</p>
            </div>

            <PropertyFilter onApply={() => null} />

          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3">
          <div className="bg-no-repeat w-full h-full bg-cover bg-[url(/images/welcome.jpg)]" />
        </div>
      </div>
    </main >
  );
}
