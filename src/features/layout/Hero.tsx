import { FC } from "react";
import SlideIn from "../motion/SlideIn";

export const Hero = () => {

   return (
      <div className="flex w-full gap-8 items-center">
         <img src="images/welcome.png" alt="Welcome" className="w-2/3 aspect-auto object-cover" />

         <SlideIn duration={0.3} direction="top">
            <strong>Welcome to Your Dream Home in Spain</strong><br />
            Discover the beauty, culture, and lifestyle of Spain through our exclusive selection of properties. Whether you’re looking for a modern beachfront apartment, a rustic countryside villa, or a smart investment opportunity — we’re here to help you find the perfect place to call home.
            Start your journey today and explore the best real estate Spain has to offer.
         </SlideIn>
      </div>
   )
}