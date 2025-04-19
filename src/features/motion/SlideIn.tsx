import { motion } from "framer-motion";

type SlideInProps = {
   children: React.ReactNode,
   delay?: number,
   duration?: number,
   amount?: number,
   direction?: "left" | "right" | "top" | "bottom"
};

export default function SlideIn({
   children,
   delay = 0,
   duration = 0.5,
   amount = 50,
   direction = "left",
}: SlideInProps) {
   const getInitial = () => {
      switch (direction) {
         case "left":
            return { x: -amount, opacity: 0 };
         case "right":
            return { x: amount, opacity: 0 };
         case "top":
            return { y: -amount, opacity: 0 };
         case "bottom":
            return { y: amount, opacity: 0 };
         default:
            return { x: 0, opacity: 0 };
      }
   };

   const getAnimate = () => ({ x: 0, y: 0, opacity: 1 });

   return (
      <motion.div
         initial={getInitial()}
         animate={getAnimate()}
         transition={{ duration, delay }}
      >
         {children}
      </motion.div>
   );
}