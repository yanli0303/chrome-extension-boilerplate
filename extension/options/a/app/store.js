import { configureStore } from '../../meta/pkg/@reduxjs/toolkit.js';
import { useDispatch, useSelector } from '../../meta/pkg/react-redux.js';
import { appSlice } from '../features/app/index.js';
export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
