import {
  DistinctFilters,
  Filters,
  Property,
  PropertyResponse,
} from "@/shared/models/schema";
import { useQuery } from "@tanstack/react-query";

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

type PropertyItem = Property & {
  agent_name: string;
  agent_email: string;
  agent_phone: string;
  agent_image: string;
};

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

export function useGetProperty(id: string) {
  return useQuery<PropertyItem>({
    queryKey: ["property", id],
    queryFn: async () => {
      const res = await fetch(`/api/properties/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Fehler beim Laden der Immobilie");
      return res.json();
    },
  });
}

export function useGetProperties(filter: Filters) {
  return useQuery<PropertyResponse>({
    queryKey: ["properties", filter],
    queryFn: async () => {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filter),
      });
      if (!res.ok) throw new Error("Fehler beim Laden der Immobilien");
      return res.json();
    },
  });
}

export function useGetRelatedProperties(
  id?: string,
  price?: number,
  area?: number
) {
  return useQuery<PropertyResponse>({
    queryKey: ["related", id, price, area],
    queryFn: async () => {
      const res = await fetch("/api/properties/related", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, price, area }),
      });
      if (!res.ok) throw new Error("Fehler beim Laden der Immobilien");
      return res.json();
    },
  });
}

export function useGetCompareProperties(ids: string[]) {
  return useQuery<Property[]>({
    queryKey: ["compare", ids],
    queryFn: async () => {
      const res = await fetch("/api/properties/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
      if (!res.ok) throw new Error("Fehler beim Laden der Immobilien");
      return res.json();
    },
  });
}
