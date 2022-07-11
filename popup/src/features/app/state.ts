import type { RootState } from '../../app/store';

export interface AppState {
  isLoading: boolean;
  settings: {
    serverUrl: string | null;
  };
  error: Error | string | null;
}

export const selectAppIsLoading = (state: RootState) => state.app.isLoading;
export const selectAppError = (state: RootState) => state.app.error;
export const selectAppSettings = (state: RootState) => state.app.settings;
