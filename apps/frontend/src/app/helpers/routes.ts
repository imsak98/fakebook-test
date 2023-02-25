import { PathRouteProps } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { DashboardPage } from '../pages/DashboradPage';
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
  {
    Component: DashboardPage,
    key: 'Dashboard',
    path: '/dashboard',
    isPrivate: true,
    layout: 'app'
  },
];
export default routes;
