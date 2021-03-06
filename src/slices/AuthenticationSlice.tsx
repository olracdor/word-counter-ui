import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store/Store';

interface AuthenticationState {
  isAuthenticated: boolean;
}

interface Authentication {
  authenticated: boolean;
}
const initialState: AuthenticationState = {
  isAuthenticated: false
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Authentication>)  => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.isAuthenticated = action.payload.authenticated;
    },
    logout: state => {
        state.isAuthenticated = false;
    }
  },
});

export const { login, logout } = authenticationSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const isAuthenticated = (state: RootState) => state.authentication.isAuthenticated;

export default authenticationSlice.reducer;

