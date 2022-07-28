import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};
export const darkTheme = createTheme(darkThemeOptions);
