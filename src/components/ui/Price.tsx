export enum PriceSize {
   big,
   small
}

interface PriceProps {
   size?: PriceSize,
   relativePosition?: boolean,
   children: React.ReactNode
}

export const Price = ({ children, size = PriceSize.small, relativePosition = false }: PriceProps) => (
   <div className={`font-bold pl-1 pr-1 ${size === PriceSize.small ? 'text-[0.7rem]' : ''} bg-black text-white p-1 ${relativePosition ? 'inline' : 'absolute right-0 top-0'}`}>
      {Number(children ?? '').toLocaleString('de-DE')} EUR
   </div>
);