import { create } from "zustand";
import { DEFAULT_FILTERS, RfqFilterStateType } from "../types/rfq-list.type";

export type RfqStoreType = {
  searchTerm: string;
  sortBy: string;
  filter: RfqFilterStateType;
  setSearchTerm: (searchTerm: string) => void;
  setSortBy: (sortBy: string) => void;
  setFilter: (key: keyof RfqFilterStateType, value: string | string[]) => void;
  resetFilters: () => void;
};

export const useRfqStore = create<RfqStoreType>((set) => ({
  // initial state
  searchTerm: "",
  sortBy: "",
  filter: DEFAULT_FILTERS,

  // actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setFilter: (key, value) =>
    set((state) => ({
      filter: { ...state.filter, [key]: value },
    })),
  resetFilters: () =>
    set({
      filter: DEFAULT_FILTERS,
    }),
}));
