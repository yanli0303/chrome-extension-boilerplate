import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

export const globalStylesLight = {
  'body, #root': {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#f2f3f5',
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
};
export const lightTheme = createTheme(lightThemeOptions);
