import { div } from "motion/react-client";
import { useRef, useState } from "react";

type Props = {
   images: string
}
export const ImageSelector = ({ images }: Props) => {
   const list = useRef<string[]>(JSON.parse(images) as string[])
   const [selectedImage, setSelectedImage] = useState<number>(0);


   return (
      <div className="flex flex-col gap-2">
         <img alt="propery:img" src={list.current[selectedImage]}
            className="w-full h-[400px] object-cover" />
         <div className="flex flex-row flex-wrap">
            {
               list.current.map((img, index) => (
                  <div key={index} className="w-1/4 p-1">
                     <img alt="property:img" src={img}
                        className={`w-full aspect-square object-cover cursor-pointer ${selectedImage === index ? 'border-2 border-black' : ''}`}
                        onClick={() => setSelectedImage(index)} />
                  </div>
               ))
            }
         </div>
      </div>
   );
}