import { FC, PropsWithChildren } from "react";

export enum TagSize {
   standard,
   small
}

type TagProps = {
   filled?: boolean,
   size?: TagSize,
   onClick?: () => void
};

export const Tag: FC<PropsWithChildren<TagProps>> = ({ filled = false, size = TagSize.standard, children, onClick }) => {
   return (
      <button
         type="button"
         onClick={onClick}
         className={`${size === TagSize.standard ? 'text-base' : 'text-xs'} inline cursor-pointer pl-1 pr-1 rounded-lg ${filled ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}>
         {children}
      </button>
   );
};