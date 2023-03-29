import { counterSlice } from './counterSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});


export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
