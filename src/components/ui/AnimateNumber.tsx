import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

interface Props {
   amount: number,
   duration?: number
}

export default function AnimateNumber({ amount, duration = 5 }: Props) {
   const count = useMotionValue(0)
   const rounded = useTransform(() => Math.round(count.get()))

   useEffect(() => {
      const controls = animate(count, amount, { duration })
      return () => controls.stop()
   }, [amount])

   return <motion.span>{rounded}</motion.span>
}