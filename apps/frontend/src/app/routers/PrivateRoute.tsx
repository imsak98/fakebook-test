import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../components/contexts/AuthContext';
// import { useAuth } from '@techathalon-app/hbp-react';

interface PrivateRouteProps {
  children: JSX.Element;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // const { signedIn } = useAuth();
  const { user } = useContext(AuthContext)
  console.log(user)
  if(!user){
 return <Navigate to={'/login'} />;
  } else {
    return children
  }
};
