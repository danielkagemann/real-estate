import { IconChevronDown } from "@tabler/icons-react";
import { FC, PropsWithChildren, useState, useEffect, useRef, ReactElement, ReactNode } from "react";

type MenuProps = {
   title: string,
   value: ReactNode
};

export const Menu: FC<PropsWithChildren<MenuProps>> = ({ title, value, children }) => {
   const [open, setOpen] = useState<boolean>(false);
   const menuRef = useRef<HTMLDivElement>(null);

   function handleClick() {
      setOpen(prev => !prev);
   }

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      }

      if (open) {
         document.addEventListener("mousedown", handleClickOutside);
      } else {
         document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [open]);

   return (
      <div className="relative z-10" ref={menuRef}>
         {open ? <div className="bg-white border border-gray-400 rounded-md absolute p-2 flex flex-col">{children}</div>
            :
            <button type="button" className="flex flex-col items-start cursor-pointer" onClick={handleClick}>
               <div className="flex gap-1 items-center">
                  <strong>{title}</strong>
                  <IconChevronDown size={14} />
               </div>
               <div>{value}</div>
            </button>
         }
      </div>
   );
};