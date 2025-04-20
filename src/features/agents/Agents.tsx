import { useGetAgents } from "@/shared/hooks/agentEndpoints"
import { Agent } from "@/shared/models/schema";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { SkeletonLoader } from "../ui/SkeletonLoader";
import { Headline } from "../ui/Headline";
import SlideIn from "../motion/SlideIn";

export const Agents = () => {
   const $agents = useGetAgents();

   const renderAgent = (item: Agent, index: number) => (
      <SlideIn direction="left" delay={index * 0.3} className="p-4 bg-gray-300 rounded-2xl flex-[1_1_calc(25%-1rem)]" key={item.id}>
         <div className="flex flex-col gap-2">
            <img className="rounded-xl aspect-4/3 object-cover" src={item.image} alt="agent:image" />
            <strong>{item.name}</strong>
            <div className="flex justify-start gap-2 items-center">
               <IconMail stroke={1} size={16} />
               <IconPhone stroke={1} size={16} />
            </div>
         </div>
      </SlideIn>
   )

   if ($agents.isLoading) {
      return (
         <>
            <SkeletonLoader className="w-1/6 h-8 mb-2" />
            <SkeletonLoader className="w-full h-20 mb-2" />
         </>
      )
   }

   return (
      <>
         <Headline>Meet the agents?</Headline>
         <div className="w-full flex flex-wrap gap-4">
            {
               $agents.data?.map(renderAgent)
            }
         </div>
      </>
   );
}