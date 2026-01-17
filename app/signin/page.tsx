"use client";
import { useAuth } from "@/components/auth/AuthContext";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Fingerprint,
  User,
  ArrowRight,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [method, setMethod] = useState<"password" | "biometric">("password");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleBiometricLogin = () => {
    alert("Biometric login would be implemented with device authentication");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-bg">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <Heart className="h-4 w-4 text-pink-500" />
            <span className="text-sm font-medium">PREMIUM MENTAL WELLNESS</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Welcome Back</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Continue your wellness journey with secure, personalized access to all your mental health tools.
          </p>

          {/* Features */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Lock className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium">End-to-End Encryption</p>
                <p className="text-sm text-gray-400">Your data is always protected</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Fingerprint className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Biometric Login</p>
                <p className="text-sm text-gray-400">Secure, password-free access</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Sparkles className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Premium Features</p>
                <p className="text-sm text-gray-400">Access all premium tools</p>
              </div>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              Developed by <span className="text-pink-500 font-medium">Brian Nyarienya</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Premium Mental Wellness Platform</p>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="glass rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Sign In to Continue</h2>
              <p className="text-gray-400 mt-2">Secure access to your wellness journey</p>
            </div>

            {/* Login Method Selector */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setMethod("password")}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${
                  method === "password"
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </button>
              <button
                onClick={() => setMethod("biometric")}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${
                  method === "biometric"
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Fingerprint className="h-4 w-4" />
                  Biometric
                </div>
              </button>
            </div>

            {method === "password" ? (
              <form onSubmit={handleSignIn} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-white/20 bg-black/30" />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-pink-500 hover:text-pink-400">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In Securely
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="p-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-4 border-pink-500/30"
                  >
                    <Fingerprint className="h-12 w-12 text-pink-500" />
                  </motion.div>
                </div>
                <p className="text-gray-400">Use your device's biometric authentication</p>
                <button
                  onClick={handleBiometricLogin}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <Fingerprint className="h-5 w-5" />
                  Authenticate with Biometrics
                </button>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-pink-500 hover:text-pink-400 font-medium">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
