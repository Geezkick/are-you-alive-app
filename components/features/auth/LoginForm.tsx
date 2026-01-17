"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-8 max-w-md w-full"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
          <Lock className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold">Secure Login</h2>
        <p className="text-gray-400 mt-2">End-to-end encrypted access</p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
              placeholder="••••••••"
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
          <a href="#" className="text-sm text-pink-500 hover:text-pink-400">
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="w-full">
          Sign In Securely
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="text-center">
          <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center justify-center gap-2">
              <Fingerprint className="h-5 w-5" />
              Use Biometric Login
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
