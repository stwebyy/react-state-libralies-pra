import { atom } from 'jotai';

export const counterAtom = atom<number>(0);

export const readOnlyDoubleCounterAtom = atom((get) => get(counterAtom) * 2);
export const increaseCounterAtom = atom(
  null,
  (get, set, increaseCount: number) => {
    return set(counterAtom,  get(counterAtom) + increaseCount)
  }
);

export const decreaseCounterAtom = atom(
  null,
  (get, set, decreaseCount: number) => {
    return set(counterAtom,  get(counterAtom) - decreaseCount)
  }
);

export const readWriteCounterAtom = atom(
  (get) => get(counterAtom),
  (_, set, newCount: number) => {
    return set(counterAtom, newCount)
  }
)
