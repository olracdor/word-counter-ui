import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from '../slices/AuthenticationSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
