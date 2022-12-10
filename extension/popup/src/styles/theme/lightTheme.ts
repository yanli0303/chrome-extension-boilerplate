import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

export const globalStylesLight = {
  'body, #root': {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    width: 400,
    height: 600,
  },

  '#root': {
    position: 'absolute',
    top: 0,
    left: 0,
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0a6efa',
      light: '#27a7ee',
      dark: '#2a43d2',
    },
  },
};
export const lightTheme = createTheme(lightThemeOptions);
