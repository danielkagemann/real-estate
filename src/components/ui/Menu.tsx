import { FC, PropsWithChildren, useState } from "react";

type MenuProps = {
   title: string
}

export const Menu: FC<PropsWithChildren<MenuProps>> = ({ title, children }) => {
   const [open, setOpen] = useState<boolean>(false);

   function handleClick() {
      setOpen(prev => !prev);
   }

   return (
      <div className="relative" >
         <button type="button" className="flex gap-2 cursor-pointer" onClick={handleClick}>
            <strong>{title}</strong>
            <svg className={open ? "transition-all rotate-180" : "transition-all"} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
         </button>
         {open && <div className="bg-white border-1 border-gray-400 rounded-md absolute p-2 flex flex-col">{children}</div>}
      </div>
   );
};