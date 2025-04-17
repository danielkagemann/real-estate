import { useLocalStorage } from "@/shared/hooks/useLocalStorage"

export const CompareSelection = () => {
   const $compare = useLocalStorage("comparison")

   console.log("COMPARE", $compare)

   return (<span></span>)
}