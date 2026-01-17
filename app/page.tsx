"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthContext";
import { Loader2 } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn) {
        router.push("/dashboard");
      } else {
        router.push("/signin");
      }
    }
  }, [isLoggedIn, isLoading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping" />
          <Loader2 className="h-20 w-20 text-pink-500 mx-auto animate-spin" />
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-4">Are You Alive?</h1>
        <p className="text-gray-400">Loading your wellness journey...</p>
      </div>
    </div>
  );
}
