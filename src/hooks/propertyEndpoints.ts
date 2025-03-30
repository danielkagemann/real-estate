import {
  DistinctFilters,
  Filters,
  filterSchema,
  Property,
} from "@/models/schema";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useGetDistinctFilter() {
  return useQuery<DistinctFilters>({
    queryKey: ["distinct"],
    queryFn: async () => {
      const res = await fetch("/api/properties/filter");
      if (!res.ok) {
        throw new Error("Fehler beim Laden der Filterdaten");
      }
      return res.json();
    },
  });
}

export function useGetFeaturedProperties() {
  return useQuery<Property[]>({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await fetch("/api/properties/featured");
      if (!res.ok) {
        throw new Error("Fehler beim Laden der featured projekte");
      }
      return res.json();
    },
  });
}

export function useGetProperties() {
  const [filters, setFilters] = useState<Filters>(filterSchema.parse({}));

  return {
    filters,
    setFilters,
    query: useQuery<Property[]>({
      queryKey: ["properties", filters],
      queryFn: async () => {
        const res = await fetch("/api/properties", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(filters),
        });
        if (!res.ok) throw new Error("Fehler beim Laden der Immobilien");
        return res.json();
      },
    }),
  };
}
