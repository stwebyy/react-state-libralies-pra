import { counterAtom, decreaseCounterAtom, increaseCounterAtom, readOnlyDoubleCounterAtom } from '@/states/jotai/counter';
import { useAtom } from 'jotai';
import { FC } from 'react';

const JotaiSample: FC = () => {
  const [count, setCount] = useAtom(counterAtom);
  const [readOnlyDoubleCount] = useAtom(readOnlyDoubleCounterAtom);
  const [, increaseCount] = useAtom(increaseCounterAtom);
  const [, decreaseCount] = useAtom(decreaseCounterAtom);
  return (
    <div>
      <h1>Jotai Sample</h1>
      <div>count: { count }</div>
      <div>readOnlyCount: { readOnlyDoubleCount }</div>
      <button onClick={() => setCount((c) => c + 1)}>setCount + 1</button>
      <button onClick={() => setCount((c) => c - 1)}>setCount - 1</button>
      <button onClick={() => increaseCount(1)}>increaseCount + 1</button>
      <button onClick={() => decreaseCount(1)}>decreaseCount - 1</button>
    </div>
  )
}

export default JotaiSample;
