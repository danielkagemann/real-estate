import { AgentContact, agentContactSchema } from "@/models/schema"
import { InputField } from "../ui/InputField"
import { useState } from "react"

type FormularProps = {
   id: number,
   agent: string,
   image?: string
}

export const AgentFormular = ({ id, agent, image }: FormularProps) => {
   const [data, setData] = useState<AgentContact>({ propertyId: id, name: '', email: '', phone: '', message: '' })

   const handleChange = (key: keyof AgentContact) => (value: string) => {
      setData((prev) => ({
         ...prev,
         [key]: value
      }))
   }

   const generateMessage = () => {
      return `Hello ${agent},\n\nI am interested in the property (${id}). Please message or call me to make an appointment for a visit.\n\nBest regards,\n${data.name}`
   }

   return (
      <div className="flex.flex-IconRowInsertBottom.gap-1">
         <div className="flex justify-between">
            <div className="flex flex-col">
               <h2 className="text-lg font-bold">Your agent for this property</h2>
               <div className="text-base">{agent}</div>
            </div>
            {image && <img src={image} alt="agent:image" className="w-[42px] h-[42px] rounded-full object-cover" />}
         </div>

         <InputField value={data.name} label="Name" placeholder="enter your name" onChange={handleChange('name')} />
         <InputField value={data.email} label="EMail" placeholder="enter your email" onChange={handleChange('email')} />
         <InputField value={data.phone ?? ''} label="Phone" placeholder="enter your phone number" onChange={handleChange('phone')} />
         <InputField value={data.message || generateMessage()} label="Message" rows={4} onChange={handleChange('message')} />
      </div>
   )
}