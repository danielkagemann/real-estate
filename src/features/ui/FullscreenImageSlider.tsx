import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconDoorExit } from "@tabler/icons-react";

interface FullscreenImageSliderProps {
   imageUrls: string[]
   onClose: () => void
}

const FullscreenImageSlider: React.FC<FullscreenImageSliderProps> = ({ imageUrls, onClose }) => {
   const [index, setIndex] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);

   const next = () => setIndex((prev) => (prev + 1) % imageUrls.length);
   const prev = () => setIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);

   // keyboard support
   useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
         if (e.key === "ArrowRight") next();
         if (e.key === "ArrowLeft") prev();
         if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
   }, []);

   // swipe Support
   useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      let startX: number | null = null;

      const onTouchStart = (e: TouchEvent) => {
         startX = e.touches[0].clientX;
      };

      const onTouchEnd = (e: TouchEvent) => {
         if (startX === null) return;
         const endX = e.changedTouches[0].clientX;
         const diff = startX - endX;

         if (diff > 50) next(); // swipe left
         if (diff < -50) prev(); // swipe right
         startX = null;
      };

      el.addEventListener("touchstart", onTouchStart);
      el.addEventListener("touchend", onTouchEnd);

      return () => {
         el.removeEventListener("touchstart", onTouchStart);
         el.removeEventListener("touchend", onTouchEnd);
      };
   }, []);

   return (
      <div ref={containerRef} className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black z-10">
         <AnimatePresence mode="wait">
            <motion.img
               key={imageUrls[index]}
               src={imageUrls[index]}
               className="absolute w-full h-full object-contain aspect-auto"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
            />
         </AnimatePresence>

         <button
            onClick={onClose}
            type="button"
            className="absolute cursor-pointer right-2 top-2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10">
            <IconDoorExit size={32} />
         </button>

         <button
            onClick={prev}
            className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
         >
            <IconChevronLeft size={32} />
         </button>

         <button
            onClick={next}
            className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
         >
            <IconChevronRight size={32} />
         </button>

         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {index + 1} / {imageUrls.length}
         </div>
      </div>
   );
};

export default FullscreenImageSlider;