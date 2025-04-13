import AnimateNumber from "../ui/AnimateNumber";

export const Facts = () => {
   const data = [
      {
         amount: 5000,
         text: "We have a large database of properties for you too choose from. But even if we do not have your dream home in our database we are collaborating with other agencies as well."
      },
      {
         amount: 400,
         text: "We have over 400 clients who trusts SPAIN PROPERTIES and bought succesfully a new home."
      },
      {
         amount: 20000,
         text: "Until now we have sold over 20000 homes."
      },
   ]
   return (
      <>
         <h1 className="text-2xl font-bold">Facts</h1>
         <div className="flex-flex-col gap-4">
            {data.map((item, index) => (
               <div key={index} className="flex w-full justify-start items-center gap-4  border-b-2 border-gray-300 pb-4 pt-4">
                  <div className="w-1/5 text-2xl font-bold"><AnimateNumber amount={item.amount} duration={1} /></div>
                  <div className="w-4/5 text-sm text-gray-500">{item.text}</div>
               </div>
            ))}
         </div>
      </>
   )
}

