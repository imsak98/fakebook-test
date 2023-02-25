import routes from './helpers/routes';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import { PrivateRoute } from './routers/PrivateRoute';
const Router = () => {
  const location = useLocation();
  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route path="/" element={<Navigate to={'/login'} replace />} />
      ) : null}
      {routes.map((route) => {
        if (!route?.isPrivate) {
          return (
            <Route
              key={route.key}
              path={route.path as string}
              element={
                <Layout layout={route.layout!}>
                  <route.Component />
                </Layout>
              }
            />
          );
        } else {
          return (
            <Route
              key={route.key}
              path={route.path as string}
              element={
                <PrivateRoute>
                  <Layout layout={route.layout!}>
                    <route.Component />
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        }
      })}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default Router;
