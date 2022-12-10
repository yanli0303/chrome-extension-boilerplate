import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ErrorBoundary, Loading } from '@localhost/ui';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { log } from './app/log';
import { store } from './app/store';
import { Home } from './pages/index';
import { globalStylesLight, lightTheme } from './styles/theme/lightTheme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <GlobalStyles styles={globalStylesLight} />
          <ErrorBoundary logger={log}>
            <Home />
          </ErrorBoundary>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
