"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowLeft,
  CheckCircle,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-bg">
      <div className="max-w-md w-full">
        <div className="glass rounded-2xl p-8">
          <Link
            href="/signin"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sign In
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-gray-400">
              {isSubmitted 
                ? "Check your email for reset instructions"
                : "Enter your email to receive password reset instructions"
              }
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending Instructions..." : "Send Reset Instructions"}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Check Your Email</h3>
              <p className="text-gray-300 mb-6">
                We've sent password reset instructions to <span className="font-medium">{email}</span>.
                Please check your inbox and follow the instructions.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Didn't receive the email?</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-pink-500 hover:text-pink-400 font-medium"
                >
                  Click to resend
                </button>
              </div>
            </motion.div>
          )}

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              Developed by <span className="text-pink-500">Brian Nyarienya</span> • Premium Mental Wellness Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
