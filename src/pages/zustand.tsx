import { useBearStore } from '@/states/zustand/bearStore';
import { useCounterStore } from '@/states/zustand/counterStore';
import { FC } from 'react';

const ZustandSample: FC = () => {
  const { count, increaseCount, decreaseCount } = useCounterStore();
  const { bears, increaseBears, decreaseBears } = useBearStore();
  return (
    <div>
      <h1>Zustand Sample</h1>
      <div>count: { count }</div>
      <button onClick={() => increaseCount()}> + 1</button>
      <button onClick={() => decreaseCount()}> - 1</button>
      <div>🐻: { bears }</div>
      <button onClick={() => increaseBears()}> + 1</button>
      <button onClick={() => decreaseBears()}> - 1</button>
    </div>
  );
}

export default ZustandSample;
