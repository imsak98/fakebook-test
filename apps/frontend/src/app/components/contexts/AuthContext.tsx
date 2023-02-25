import { createContext } from 'react';

interface AuthContextData {
  user: {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  } | null;
  setUser: (user: { id: string; name: string; email: string; accessToken: string } | null) => void;
}

const AuthContext = createContext<AuthContextData>({
  user: null,
  setUser: (user: any) => {
    console.log(user)
  },
});

export default AuthContext;
