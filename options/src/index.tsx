import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from './app/store';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import { loadCacheThunk } from './features/app';
import Home from './pages/index';
import { lightTheme } from './styles/theme/lightTheme';

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
