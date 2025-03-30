import { useGetAgents } from "@/hooks/agentEndpoints"
import { Agent } from "@/models/schema";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { SkeletonLoader } from "../ui/SkeletonLoader";

export const Agents = () => {
   const $agents = useGetAgents();

   const renderAgent = (item: Agent) => (
      <div className="p-4 flex not-last:border-r-1" key={item.id}>
         <div className="flex justify-between gap-2">
            <img className="rounded-4xl w-[48px] h-[48px] min-w-[48px] min-h[48px] object-cover" src={item.image} alt="agent:image" />
            <div>
               <strong>{item.name}</strong>
               <div className="flex gap-2 place-items-center"><IconMail stroke={1} size={16} /> {item.email}</div>
               <div className="flex gap-2 place-items-center"><IconPhone stroke={1} size={16} /> {item.phone}</div>
            </div>
         </div>
      </div>
   )

   if ($agents.isLoading) {
      return (
         <div className="p-10">
            <SkeletonLoader className="w-1/6 h-4 mb-2" />
            <div className="w-full flex justify-start overflow-x-scroll text-xs gap-4">
               <SkeletonLoader className="w-2/6 h-12 mb-2" />
               <SkeletonLoader className="w-2/6 h-12 mb-2" />
               <SkeletonLoader className="w-2/6 h-12 mb-2" />
            </div>
         </div>
      )
   }

   return (
      <div className="p-10">
         <strong>Our agents</strong>
         <div className="w-full flex justify-start overflow-x-scroll text-xs gap-4">
            {
               $agents.data?.map(renderAgent)
            }
         </div>
      </div>
   );
}