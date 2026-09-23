import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Children from './pages/Children';
import Mentors from './pages/Mentors';
import Donations from './pages/Donations';
import Events from './pages/Events';
import Volunteers from './pages/Volunteers';
import Guardians from './pages/Guardians';
import Reports from './pages/Reports';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';

type AuthContextValue = { isAuthenticated: boolean };

const AuthContext = createContext<AuthContextValue>({ isAuthenticated: false });

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem('token')));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/children" element={<ProtectedRoute><Layout><Children /></Layout></ProtectedRoute>} />
      <Route path="/mentors" element={<ProtectedRoute><Layout><Mentors /></Layout></ProtectedRoute>} />
      <Route path="/donations" element={<ProtectedRoute><Layout><Donations /></Layout></ProtectedRoute>} />
      <Route path="/events" element={<ProtectedRoute><Layout><Events /></Layout></ProtectedRoute>} />
      <Route path="/volunteers" element={<ProtectedRoute><Layout><Volunteers /></Layout></ProtectedRoute>} />
      <Route path="/guardians" element={<ProtectedRoute><Layout><Guardians /></Layout></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><Layout><Reports /></Layout></ProtectedRoute>} />
    </Routes>
  );
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <ChatBot />
      </AuthProvider>
    </BrowserRouter>
  );
}
