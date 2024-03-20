import { create } from "zustand";

const useCounterStore = create(({ set, get }) => ({
  count: 5,
  countUp: (step) => set({ count: get().count + step }),
  countDown: (step) => set(),
}));