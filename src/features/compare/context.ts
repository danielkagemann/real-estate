import { Property } from "@/shared/models/schema";
import React, { createContext, useContext } from "react";

type Props = {
  selected: Array<Property>;
  toggleSelection: (item: Property) => void;
};

export const COMPARE_MAX = 3;

export const CompareContext = createContext<Props>({
  selected: [],
  toggleSelection: (item: Property) => {
    throw new Error("default implememtation");
  },
});

export const useCompare = () => useContext(CompareContext);
