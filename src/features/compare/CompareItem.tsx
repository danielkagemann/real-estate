import { Property } from "@/shared/models/schema";

type Props = {
   item: Property
}

export const CompareItem = ({ item }: Props) => {
   const image = JSON.parse(item?.images ?? "[]")
   return (<img src={image[0]} className="w-[52px] h-[52px] rounded" alt={item.title} />)
}