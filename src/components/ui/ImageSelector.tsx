import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
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

   const handleImageChange = (next: boolean) => {
      if (next) {
         const nextIndex = list.current.indexOf(selectedImage) + 1;
         if (nextIndex < list.current.length) {
            setSelectedImage(list.current[nextIndex]);
         } else {
            setSelectedImage(list.current[0]);
         }
      } else {
         const prevIndex = list.current.indexOf(selectedImage) - 1;
         if (prevIndex >= 0) {
            setSelectedImage(list.current[prevIndex]);
         } else {
            setSelectedImage(list.current[list.current.length - 1]);
         }
      }
   }

   return (
      <div className="flex flex-col gap-2">
         <div className={`w-full h-[400px] relative bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${selectedImage})` }}
         >
            <div className="flex justify-between place-items-center h-full">
               <button type="button" onClick={() => handleImageChange(false)} className="bg-black text-white m-4 p-2 rounded-full cursor-pointer">
                  <IconArrowLeft size={24} />
               </button>
               <button type="button" onClick={() => handleImageChange(true)} className="bg-black text-white m-4 p-2 rounded-full cursor-pointer">
                  <IconArrowRight size={24} />
               </button>
            </div>
         </div>

         {renderThumbnails()}

      </div>
   );
}