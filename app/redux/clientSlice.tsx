import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
  client: any | null;
}

const initialState: ClientState = {
  client: null,
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state, action:PayloadAction<any>) => {
            state.client = action.payload;
        }
    }
})

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;