import { Property } from "@/shared/models/schema"
import { COMPARE_MAX, useCompare } from "./context"
import { CompareItem } from "./CompareItem"
import Link from "next/link"
import { IconX } from "@tabler/icons-react"

export const CompareSelection = () => {

   const { selected, toggleSelection } = useCompare()

   if (selected.length === 0) {
      return null
   }

   return (
      <div className="fixed left-0 bottom-0 w-full bg-white shadow-3xl p-8 border-t-1 border-gray-300">
         <div className="flex justify-between items-center">

            <div className="text-base/tight">
               <strong>Selected properties for comparison (max. {COMPARE_MAX} properties)</strong>
               <div>click on property to remove</div>
            </div>

            <div className="flex justify-start gap-2 items-center">
               {selected.length > 1 && <Link href={`/properties/compare/${selected.map((item) => item.id).join('-')}`} className="bg-black text-white p-2 rounded-xl">compare</Link>}
               {
                  selected.map((prop: Property) => (
                     <button key={prop.id + prop.title}
                        className="cursor-pointer"
                        type="button"
                        onClick={() => toggleSelection(prop)}>
                        <CompareItem item={prop} />
                     </button>
                  )
                  )}
            </div>
         </div>
      </div>
   )
}