import { useRef } from "react";

type Props = {
   images: string
}
export const ImageSelector = ({ images }: Props) => {
   const list = useRef<string[]>(JSON.parse(images) as string[])

   const renderImages = () => {

      // single image
      if (list.current.length === 1) {
         return (
            <div className="grid grid-cols-1 grid-rows-1 gap-2">
               {renderMain()}
            </div>
         )
      }

      if (list.current.length === 2) {
         return (<div className="grid grid-cols-2 grid-rows-1 gap-2">
            {renderMain()}
            <div>
               <img src={list.current[1]} className="h-[400px] w-full rounded-xl" />
            </div>
         </div>)
      }

      return (
         <>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
               <div className="col-span-2 row-span-2">{renderMain()}</div>
               <div className="col-start-3">
                  <img className="h-[calc(200px-0.25rem)] w-full object-cover rounded-xl" src={list.current[1]} />
               </div>
               <div className="col-start-3 row-start-2">
                  <img className="h-[calc(200px-0.25rem)] w-full object-cover rounded-xl" src={list.current[2]} />
               </div>
            </div>
         </>
      )
   }

   const renderMain = () => (
      <div className="relative">
         <img src={list.current[0]} className="w-full h-[400px] object-cover rounded-xl" />
         {list.current.length > 3 && <button type="button" className="text-xs bg-black text-white p-2 rounded-lg absolute left-2 bottom-2">view all photos</button>}
      </div>
   )

   return renderImages()
}