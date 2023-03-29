import { decreaseCount, increaseCount } from '@/states/redux/counterSlice';
import { RootState } from '@/states/redux/store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxSample: FC = () => {
  const data = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
      <div>
        <h1>Redux Sample</h1>
        <div>count: { data.count }</div>
        <button onClick={() => dispatch(increaseCount())}> + 1</button>
        <button onClick={() => dispatch(decreaseCount())}> - 1</button>
      </div>
  )
}

export default ReduxSample;
