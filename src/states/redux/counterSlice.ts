import { createSlice } from '@reduxjs/toolkit';

interface IChangeIdState {
  count: number;
}

const initialState: IChangeIdState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearCount: () => initialState,
    increaseCount: (state) => ({
      count: state.count + 1,
    }),
    decreaseCount: (state) => ({
      count: state.count - 1,
    }),
  },
});

export const { clearCount, increaseCount, decreaseCount } =
  counterSlice.actions;
export default counterSlice.reducer;
