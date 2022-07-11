import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './styles/theme/lightTheme';
import { store } from './app/store';
import { loadCacheThunk } from './features/app';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import Home from './pages/index';

store.dispatch(loadCacheThunk());

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }
