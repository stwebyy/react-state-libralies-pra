import { create } from 'zustand';

type Bear = {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
}

export const useBearStore = create<Bear>((set) => ({
  bears: 0,
  increaseBears: () => set((state) => {
    return { bears: state.bears + 1 }
  }),
  decreaseBears: () => set((state) => {
    return { bears: state.bears - 1 }
  }),
}))