import { ReactElement } from "react"

type Props = {
   icon: ReactElement,
   amount: string | number,
   label: string,
}
export const PropertyAttribute = ({ icon, amount, label }: Props) => (
   <div className={`flex flex-col items-center min-w-20`}>
      <div className="border-orange-600 border text-orange-600 w-[32px] h-[32px] min-w-[32px] min-h-[32px] rounded-full flex justify-center place-items-center">{icon}</div>
      <strong>{amount}</strong>
      <span className="text-gray-400">{label}</span>
   </div>
)