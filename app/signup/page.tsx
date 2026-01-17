"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Upload,
  Check,
  ArrowRight,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }
    
    // Validate terms agreement
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Successful registration
    setIsLoading(false);
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
            <span className="text-sm font-medium">START YOUR JOURNEY</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Join Our Community</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Begin your path to better mental wellness with personalized tools, support, and insights designed just for you.
          </p>

          {/* Benefits */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink-500/20">
                <Check className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <p className="font-medium">Personalized Wellness Plan</p>
                <p className="text-sm text-gray-400">AI-powered recommendations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Check className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">24/7 Crisis Support</p>
                <p className="text-sm text-gray-400">Always here when you need us</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Check className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Community Access</p>
                <p className="text-sm text-gray-400">Safe spaces for sharing</p>
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

        {/* Right side - Sign Up Form */}
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
              <h2 className="text-2xl font-bold">Create Your Account</h2>
              <p className="text-gray-400 mt-2">Join thousands on their wellness journey</p>
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Profile Picture (Optional)</label>
              <div className="flex items-center gap-4">
                <div className="relative">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="h-20 w-20 rounded-full object-cover border-2 border-pink-500/30"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-dashed border-pink-500/30 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all"
                  >
                    <Upload className="h-4 w-4" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">
                    Upload a profile picture to personalize your experience. Recommended: Square image, 500x500px
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
                    placeholder="••••••••"
                    required
                    minLength={8}
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
                <p className="text-xs text-gray-400 mt-2">Minimum 8 characters with letters and numbers</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 rounded border-white/20 bg-black/30"
                  required
                />
                <div>
                  <p className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-pink-500 hover:text-pink-400">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-pink-500 hover:text-pink-400">
                      Privacy Policy
                    </Link>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    By creating an account, you agree to our end-to-end encrypted privacy model.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create My Account
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link href="/signin" className="text-pink-500 hover:text-pink-400 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
