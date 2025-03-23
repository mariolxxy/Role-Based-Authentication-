import React, { createContext, useState, ReactNode, useContext } from "react";

type User = {
  username: string;
  role: "Admin" | "Editor" | "Viewer" | null;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, role: "Admin" | "Editor" | "Viewer") => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: "Admin" | "Editor" | "Viewer") => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, AuthContext };
export {};
