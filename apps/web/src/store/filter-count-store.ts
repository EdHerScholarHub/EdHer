import { create } from "zustand/react";

type Store = {
  filterCount: number;
  filterCategory: string[];
  setFilterCategory: (category: string) => void;
};

export const useFilterCountStore = create<Store>(set => ({
  filterCount: 0,
  filterCategory: [],
  setFilterCategory: value =>
    set((state) => {
      if (!state.filterCategory.includes(value)) {
        return {
          ...state,
          filterCount: state.filterCount + 1,
          filterCategory: [...state.filterCategory, value],
        };
      }
      return state;
    }),
}));
