import { Headline } from "../ui/Headline"

export const Listings = () => (
   <>
      <Headline>Listings</Headline>
      <div>Search for your dream home in our list.  </div>
      <div className="flex justify-start">
         <a href="/properties" className="bg-orange-600 text-white rounded p-2 hover:bg-orange-700">View all</a>
      </div>

   </>
)