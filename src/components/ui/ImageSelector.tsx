import { div } from "motion/react-client";
import { useRef, useState } from "react";

type Props = {
   images: string
}
export const ImageSelector = ({ images }: Props) => {
   const list = useRef<string[]>(JSON.parse(images) as string[])
   const [selectedImage, setSelectedImage] = useState<string>(list.current[0]);

   const renderThumbnails = () => {
      if (list.current.length <= 1) {
         return null
      }
      return (<div className="flex flex-row flex-wrap gap-2">
         {
            list.current.map((img, index) => (
               <div key={index} className="w-1/4 max-w-[52px]">
                  <img alt="property:img" src={img}
                     className={`w-full aspect-square object-cover cursor-pointer ${selectedImage === img ? 'border-2 border-black' : ''}`}
                     onClick={() => setSelectedImage(img)} />
               </div>
            ))
         }
      </div>)
   }

   return (
      <div className="flex flex-col gap-2">
         <img alt="propery:img" src={selectedImage}
            className="w-full h-[400px] object-cover" />

         {renderThumbnails()}

      </div>
   );
}