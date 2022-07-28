import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AppState } from './state';

const initialState: AppState = {
  isLoading: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApp: (state, action: PayloadAction<Partial<AppState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setApp } = appSlice.actions;
