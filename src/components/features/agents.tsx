import { useGetAgents } from "@/hooks/agentEndpoints"
import { Agent } from "@/models/schema";
import { IconMail, IconPhone } from "@tabler/icons-react";

export const Agents = () => {
   const $agents = useGetAgents();

   const renderAgent = (item: Agent) => (
      <div className="p-4 not-last:border-r-1" key={item.id}>
         <div className="flex gap-2">
            <img className="rounded-4xl w-[48px] h-[48px] object-cover" src={item.image} alt="agent:image" />
            <div className="flex flex-col">
               <strong>{item.name}</strong>
               <div className="flex gap-2 place-items-center"><IconMail stroke={1} size={16} /> {item.email}</div>
               <div className="flex gap-2 place-items-center"><IconPhone stroke={1} size={16} /> {item.phone}</div>
            </div>
         </div>
      </div>
   )
   return (
      <div className="p-10">
         <strong>Our agents</strong>
         <div className="w-full flex overflow-x-scroll text-xs gap-4">
            {
               $agents.query.data?.map(renderAgent)
            }
         </div>
      </div>
   );
}