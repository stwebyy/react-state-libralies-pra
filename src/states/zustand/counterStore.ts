import { create } from 'zustand';

type Count = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useCounterStore = create<Count>((set) => ({
  count: 0,
  increaseCount: () => set((state) => {
    return { count: state.count + 1 }
  }),
  decreaseCount: () => set((state) => {
    return { count: state.count - 1 }
  }),
}))