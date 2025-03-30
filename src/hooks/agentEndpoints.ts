import { Agent } from "@/models/schema";
import { useQuery } from "@tanstack/react-query";

export function useGetAgents() {
  return useQuery<Agent[]>({
    queryKey: ["agents"],
    queryFn: async () => {
      const res = await fetch("/api/agents");
      if (!res.ok) {
        throw new Error("Fehler beim Laden der mitarbeiter");
      }
      return res.json();
    },
  });
}
