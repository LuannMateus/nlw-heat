import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
};

type AuthProvider = {
  children: ReactNode;
};

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProvider) => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }`;

  const [user, setUser] = useState<User | null>(null);

  const signIn = async (githubCode: string) => {
    const response = await api.post<AuthResponse>('/authenticate', {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  };

  const signOut = () => {
    setUser(null);

    localStorage.removeItem('@dowhile:token');
  };

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('/profile').then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      const [urlWithoutCodeFormat, _] = urlWithoutCode.split('/api/');

      window.history.pushState({}, '', urlWithoutCodeFormat);

      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
