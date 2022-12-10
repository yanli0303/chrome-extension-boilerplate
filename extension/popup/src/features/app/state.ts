import type { RootState } from '../../app/store';

export interface AppState {
  username: string;
}

export const selectUsername = (state: RootState) => state.app.username;
