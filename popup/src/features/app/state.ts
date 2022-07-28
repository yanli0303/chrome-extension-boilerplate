import type { SerializedError } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface AppState {
  isLoading: boolean;
  serverUrl?: string;
  error?: Error | SerializedError | string;
}

export const selectApp = (state: RootState) => state.app;
