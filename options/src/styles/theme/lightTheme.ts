import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
};
export const lightTheme = createTheme(lightThemeOptions);
