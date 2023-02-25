import { NotificationContext } from './components/contexts/NotificationContext';
import Router from './Router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <NotificationContext>
      <Router />
    </NotificationContext>
  );
}

export default App;
