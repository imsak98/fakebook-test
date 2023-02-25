import { Alert, AlertColor, Snackbar } from '@mui/material';
import React from 'react';

const initialState = {
  open: false,
  type: 'success',
  message: '',
};
const Context = React.createContext({
  notify: ({ message, type }: notifyProps) => undefined,
});
interface notifyProps {
  message: string;
  type: string;
}
export const NotificationContext = ({ children }: any) => {
  const [state, setState] = React.useState(initialState);

  const notify = ({ message, type }: notifyProps) => {
    setState({ open: true, message, type });
    return undefined;
  };

  return (
    <Context.Provider
      value={{
        notify,
      }}
    >
      {children}
      <Snackbar
        open={state?.open}
        autoHideDuration={4000}
        onClose={() => setState(initialState)}
        message="message"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={state?.type as AlertColor} variant="filled">
          {state?.message}
        </Alert>
      </Snackbar>
    </Context.Provider>
  );
};

export const useNotificationContext = () => {
  return React.useContext(Context);
};
