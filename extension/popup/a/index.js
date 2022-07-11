import React, { Suspense } from '../meta/pkg/react.js';
import ReactDOM from '../meta/pkg/react-dom/client.js';
import { Provider } from '../meta/pkg/react-redux.js';
import { CssBaseline, ThemeProvider } from '../meta/pkg/@mui/material.js';
import { lightTheme } from './styles/theme/lightTheme.js';
import { store } from './app/store.js';
import { loadCacheThunk } from './features/app/index.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import Loading from './components/Loading.js';
import Home from './pages/index.js';
store.dispatch(loadCacheThunk());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* @__PURE__ */ React.createElement(
    React.StrictMode,
    null,
    /* @__PURE__ */ React.createElement(
      Provider,
      {
        store,
      },
      /* @__PURE__ */ React.createElement(
        Suspense,
        {
          fallback: /* @__PURE__ */ React.createElement(Loading, null),
        },
        /* @__PURE__ */ React.createElement(
          ThemeProvider,
          {
            theme: lightTheme,
          },
          /* @__PURE__ */ React.createElement(CssBaseline, null),
          /* @__PURE__ */ React.createElement(
            ErrorBoundary,
            null,
            /* @__PURE__ */ React.createElement(Home, null)
          )
        )
      )
    )
  )
);
