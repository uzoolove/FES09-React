import { create } from "zustand";

const useCounterStore = create((set, get) => ({
  count: 5,
  // countUp: (step) => set({ count: get().count + step }),
  countDown: (step) => set((state) => ({ count: state.count - step })),
  countUp: () => {
    // 카운트가 10 단위로 변할때 + 1 추가(커피 쿠폰 10개 모으면 + 1)
    const count = get().count;
    const newCount = count + 1;
    set({ count: newCount });
    if (newCount % 10 === 0) {
      set({ count: newCount + 1 });
    }
  }
}));

export default useCounterStore;