--- src/context/AuthContext.tsx (原始)


+++ src/context/AuthContext.tsx (修改后)
import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'mentor' | 'donor' | 'volunteer' | 'guardian' | null;

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string; role: UserRole } | null;
  login: (email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string, role: UserRole) => boolean;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; role: UserRole } | null>(null);

  const login = (email: string, _password: string, role: UserRole) => {
    const names: Record<string, string> = {
      admin: 'Admin User',
      mentor: 'Dr. Folake Adeyemi',
      donor: 'Chief Olumide Bankole',
      volunteer: 'Adebayo Johnson',
      guardian: 'Mrs. Ngozi Okafor',
    };
    setUser({ name: names[role || 'admin'] || 'User', email, role });
    setIsAuthenticated(true);
    return true;
  };

  const register = (name: string, email: string, _password: string, role: UserRole) => {
    setUser({ name, email, role });
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
