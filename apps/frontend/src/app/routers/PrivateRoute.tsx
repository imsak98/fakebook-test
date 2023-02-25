import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '@techathalon-app/hbp-react';

interface PrivateRouteProps {
  children: JSX.Element;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // const { signedIn } = useAuth();
  const signedIn = true
  return signedIn ? children : <Navigate to={'/login'} />;
};
