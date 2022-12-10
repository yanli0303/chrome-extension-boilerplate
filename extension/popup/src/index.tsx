import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Loading } from '@localhost/ui';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { log } from './app/log';
import { store } from './app/store';
import './features/chrome.runtime/onMessage';
import { HomePage } from './pages/home';
import { globalStylesLight, lightTheme } from './styles/theme/lightTheme';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <MemoryRouter>
        <Suspense fallback={<Loading />}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <GlobalStyles styles={globalStylesLight} />
            <ErrorBoundary logger={log}>
              <Routes>
                <Route path="*" element={<HomePage />} />
              </Routes>
            </ErrorBoundary>
          </ThemeProvider>
        </Suspense>
      </MemoryRouter>
    </Provider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
