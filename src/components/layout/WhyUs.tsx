import { CheckItem } from "./Checkitem"

export const WhyUs = () => {
   return (
      <div className="flex justify-between gap-4">
         <div className="w-2/3">
            <h1 className="text-2xl font-bold">Why choose us?</h1>
            <p>We provide an exceptional service and will lead you through all the buying process.
               Our experts will find the perfect home for you based on your requirements.</p>
            <CheckItem>expert agents</CheckItem>
            <CheckItem>omprehensive list</CheckItem>
            <CheckItem>personal service</CheckItem>
         </div>
         <img src="images/whyus.png" alt="Why Us" className="w-1/5 h-auto" />
      </div>
   )
}