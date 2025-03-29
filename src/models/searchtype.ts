export type SearchFilter = {
   location: Array<string>,
   type: Array<string>,
   price: number,
}

export function initSearchFilter (): SearchFilter {
   return {
      location: [],
      type: [],
      price: -1,
   }
}
