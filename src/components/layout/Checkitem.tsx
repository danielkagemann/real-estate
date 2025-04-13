import { IconCheck } from "@tabler/icons-react"

export const CheckItem = ({ children }: { children: string }) => {
   return (
      <div className="flex items-center gap-4">
         <IconCheck className="text-orange-500" />
         <span>{children}</span>
      </div>
   )
}