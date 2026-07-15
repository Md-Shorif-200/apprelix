"use client";

import { useCallback, useState } from "react";
import { DEFAULT_FILTERS, RfqFilterStateType } from "../types/rfq-list.type";

export function useRfqFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilterState] =
    useState<RfqFilterStateType>(DEFAULT_FILTERS);

  const setFilter = useCallback(
    (key: keyof RfqFilterStateType, value: string | string[]) => {
      setFilterState((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const resetFilters = useCallback(() => {
    setFilterState(DEFAULT_FILTERS);
  }, []);

  return {
    searchTerm,
    sortBy,
    filter,
    setSearchTerm,
    setSortBy,
    setFilter,
    resetFilters,
  };
}

export type UseRfqFiltersReturn = ReturnType<typeof useRfqFilters>;
