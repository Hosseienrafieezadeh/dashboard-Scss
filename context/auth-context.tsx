"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  picture?: {
    large: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (phone: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (phone: string) => {
    // Mock login logic here
    setUser({
      name: { first: "John", last: "Doe" },
      phone,
      picture: { large: "https://randomuser.me/api/portraits/men/75.jpg" },
    });
  };

  const logout = () => {
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
