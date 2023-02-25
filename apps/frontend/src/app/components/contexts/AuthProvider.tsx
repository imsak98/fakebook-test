import React, { useState } from 'react';
import { authenticateUser } from '../../helpers/functions';
import AuthContext from './AuthContext';


export const AuthProvider = ({ children } :any) => {
  const [user, setUser] = useState<{ id: string; name: string; email: string; accessToken: string } | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await authenticateUser(email, password);
      setUser(userData);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      { children }
    </AuthContext.Provider>
  );
};
