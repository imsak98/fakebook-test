import { PathRouteProps } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
export interface Routes {
  Component: () => JSX.Element;
  key: string;
  path: PathRouteProps['path'];
  layout?: string;
  isPrivate: boolean;
}
const routes: Routes[] = [
  {
    Component: LoginPage,
    key: 'Login',
    path: '/login',
    isPrivate: false,
  },
  {
    Component: RegisterPage,
    key: 'Register',
    path: '/register',
    isPrivate: false,
  },
];
export default routes;
