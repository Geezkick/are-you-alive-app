"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not logged in and not loading, redirect to signin
    if (!isLoading && !isLoggedIn) {
      router.push("/signin");
    }
  }, [isLoggedIn, isLoading, router]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping" />
            <Loader2 className="h-20 w-20 text-pink-500 mx-auto animate-spin" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-4">Loading</h1>
          <p className="text-gray-400">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If logged in, show the protected content
  if (isLoggedIn) {
    return <>{children}</>;
  }

  // If not logged in, show nothing (will redirect)
  return null;
}
