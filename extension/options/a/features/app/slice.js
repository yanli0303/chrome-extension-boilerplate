import {
  createAsyncThunk,
  createSlice,
} from '../../../meta/pkg/@reduxjs/toolkit.js';
const initialState = {
  isLoading: true,
  error: null,
  settings: {
    serverUrl: null,
  },
};
const scope = 'app';
export const loadCacheThunk = createAsyncThunk(
  `${scope}/loadCache`,
  async () => {
    const { options } = await chrome.storage.local.get('options');
    return { ...initialState, ...options };
  }
);
export const appSlice = createSlice({
  name: scope,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCacheThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadCacheThunk.fulfilled, (state, action) => {
        state.settings = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loadCacheThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const { setError, setSettings } = appSlice.actions;
