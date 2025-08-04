// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.profile = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
