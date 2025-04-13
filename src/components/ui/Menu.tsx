import { IconChevronDown } from "@tabler/icons-react";
import { FC, PropsWithChildren, useState, useEffect, useRef } from "react";

type MenuProps = {
   title: string;
};

export const Menu: FC<PropsWithChildren<MenuProps>> = ({ title, children }) => {
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
      <div className="relative" ref={menuRef}>
         {open ? <div className="bg-white border border-gray-400 rounded-md absolute p-2 flex flex-col">{children}</div>
            :
            <button type="button" className="flex gap-2 cursor-pointer" onClick={handleClick}>
               <strong>{title}</strong>
               <IconChevronDown className={open ? "transition-all rotate-180" : "transition-all"} size={14} />
            </button>
         }
      </div>
   );
};