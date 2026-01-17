"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: { name: string; email: string; role: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate auth check
      
      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        try {
          const authData = JSON.parse(savedAuth);
          setIsLoggedIn(true);
          setUser(authData.user);
        } catch (error) {
          console.error("Error parsing auth data:", error);
          localStorage.removeItem('auth');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, get user data from backend
      // For demo, extract name from email or use email as name
      const nameFromEmail = email.split('@')[0];
      const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      
      const userData = {
        name: capitalizedName,
        email: email,
        role: "premium"
      };
      
      localStorage.setItem('auth', JSON.stringify({
        user: userData,
        token: 'fake-jwt-token',
        timestamp: new Date().toISOString()
      }));
      
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        name: name,
        email: email,
        role: "free"
      };
      
      localStorage.setItem('auth', JSON.stringify({
        user: userData,
        token: 'fake-jwt-token',
        timestamp: new Date().toISOString()
      }));
      
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    localStorage.removeItem('auth');
    localStorage.removeItem('profilePicture');
    localStorage.removeItem('soberDays');
    localStorage.removeItem('currentCraving');
    setIsLoggedIn(false);
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
