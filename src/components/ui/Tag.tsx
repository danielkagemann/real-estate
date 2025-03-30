import { FC, PropsWithChildren } from "react";

type TagProps = {
   filled?: boolean,
   onClick?: () => void
};

export const Tag: FC<PropsWithChildren<TagProps>> = ({ filled = false, children, onClick }) => {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`inline cursor-pointer pl-1 pr-1 rounded-lg ${filled ? 'bg-red-700 text-white' : 'bg-gray-200'}`}>
         {children}
      </button>
   );
};