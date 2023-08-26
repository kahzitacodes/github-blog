import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/axios';

interface IUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
}

interface IUserContextProvider {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
}

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: IUserContextProvider) {
  const [user, setUser] = useState<IUser | null>(null);

  const fetchuser = useCallback(async () => {
    const response = await api.get(`/users/kahzitacodes`);

    if (response.status === 200) {
      const { data } = response;

      setUser({
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        bio: data.bio,
        company: data.company,
        followers: data.followers
      });
    }
  }, []);

  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}