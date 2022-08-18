import React, { useState, createContext } from 'react';

export type AuthUser = {
  name: string;
  email: string;
  age: number;
};

export type CarType = {
  name: string;
  speed: number;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  car: CarType | null;
  setCar: React.Dispatch<React.SetStateAction<CarType | null>>;
  agent: string | null;
  setAgent: React.Dispatch<React.SetStateAction<string | null>>;
};
type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [car, setCar] = useState<CarType | null>(null);
  const [agent, setAgent] = useState<string | null>(null);
  return (
    <UserContext.Provider
      value={{ user, setUser, car, setCar, agent, setAgent }}
    >
      {children}
    </UserContext.Provider>
  );
};
