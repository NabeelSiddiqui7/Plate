// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // adjust path if needed
import clientReducer from './clientSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    client: clientReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
