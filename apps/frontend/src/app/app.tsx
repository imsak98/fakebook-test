import { createTheme, ThemeProvider } from '@mui/material';
import { AuthProvider } from './components/contexts/AuthProvider';
import { NotificationContext } from './components/contexts/NotificationContext';
import Router from './Router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars


const theme = createTheme({
  palette: {
    primary: {
      main: '#537FE7',
    },
    secondary: {
      main: '#C0EEF2',
    },
  },
});


export function App() {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <NotificationContext>
        <Router />
      </NotificationContext>
    </AuthProvider>
</ThemeProvider>
  );
}

export default App;
