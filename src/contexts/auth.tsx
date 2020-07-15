import React, {createContext, useEffect, useState, useContext} from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import history from "../history";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@SoftcomShop:user");
    const storagedToken = localStorage.getItem("@SoftcomShop:token");

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

      setUser(JSON.parse(storagedUser));
    }

    setLoading(false);
  }, [])

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
    history.push("/home");

    localStorage.setItem("@SoftcomShop:user", JSON.stringify(response.user));
    localStorage.setItem("@SoftcomShop:token", response.token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    history.push("/login");
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user: user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);
  
  return context;
}

export {AuthProvider, useAuth};
