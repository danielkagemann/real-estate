import { DistinctFilters, Filters, Property } from "@/models/property"
import { useQuery } from "@tanstack/react-query"


export function useGetDistinctFilter () {
   return useQuery<DistinctFilters>({
         queryKey: ['distinct'],
         queryFn: async() => {
            const res = await fetch('/api/properties/filter')
            if (!res.ok) {
               throw new Error('Fehler beim Laden der Filterdaten')
            }
            return res.json()
         },
      })
}

export function useGetProperties(filters: Filters) {
   return useQuery<Property[]>({
      queryKey: ['properties', filters],
      queryFn: async () => {
         const res = await fetch('/api/properties', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(filters),
         })
         if (!res.ok) throw new Error('Fehler beim Laden der Immobilien')
         return res.json()
      },
   })
}