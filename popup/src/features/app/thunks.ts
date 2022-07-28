import type { AppThunk } from '../../app/store';
import { setApp } from './slice';

export const loadCacheThunk = (): AppThunk => async (dispatch) => {
  dispatch(setApp({ isLoading: true }));
  try {
    const { serverUrl } = await chrome.storage.local.get('serverUrl');
    dispatch(setApp({ isLoading: false, error: undefined, serverUrl }));
  } catch (error) {
    dispatch(setApp({ isLoading: false, error: error as Error }));
  }
};
