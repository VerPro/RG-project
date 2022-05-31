import { lightGreen } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#619648',
      main: '#32681d',
      dark: '003d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#98ee99',
      main: '#66bb6a',
      dark: '#338a3e',
      contrastText: '#000',
    },
  },
});
