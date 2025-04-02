import { ReactElement } from "react"

type Props = {
   icon: ReactElement,
   amount: string | number,
   label: string,
}
export const PropertyAttribute = ({ icon, amount, label }: Props) => (
   <div className={`flex flex-col items-center min-w-20`}>
      <div className="bg-gray-200 text-red-700 w-[32px] h-[32px] min-w-[32px] min-h-[32px] rounded-full flex justify-center place-items-center">{icon}</div>
      <strong>{amount}</strong>
      <span className="text-gray-400">{label}</span>
   </div>
)