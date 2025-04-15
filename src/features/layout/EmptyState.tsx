import { motion } from "motion/react"
import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export const EmptyState = ({ children }: Props) => (
   <div className="flex flex-col justify-center items-center w-full h-full">

      <motion.img src="/images/emptystate.png" alt="emptystate" className="w-52 h-52 rounded-4xl"
         initial={{ y: -50, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 0.4 }
         }} />
      <motion.div
         initial={{ y: 50, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 0.3 }
         }}
         className="text-lg">{children}</motion.div>
   </div>
)