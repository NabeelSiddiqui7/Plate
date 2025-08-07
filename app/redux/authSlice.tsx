// store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Profile {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  profile: Profile | null;
}

const initialState: AuthState = {
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.profile = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
