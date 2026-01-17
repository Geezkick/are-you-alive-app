"use client";

import { useState, useEffect } from "react";
import { 
  Home, Heart, BookOpen, Shield, Brain, Users, Settings, Sparkles,
  Menu, X, Bell, User, Pill, Trophy, BarChart3, FileText, Video,
  LogIn, UserPlus, LogOut, Shield as RecoveryShield
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthContext";

const userNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/checkin", label: "Daily Check-in", icon: Heart },
  { href: "/journal", label: "Journal", icon: BookOpen },
  { href: "/coping", label: "Coping Tools", icon: Brain },
  { href: "/crisis", label: "Crisis Support", icon: Shield },
  { href: "/recovery-hub", label: "Recovery Hub", icon: RecoveryShield },
  { href: "/community", label: "Community", icon: Users },
  { href: "/journey", label: "Wellness Journey", icon: Trophy },
  { href: "/medications", label: "Medications", icon: Pill },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/safety-plan", label: "Safety Plan", icon: Shield },
  { href: "/premium", label: "Premium", icon: Sparkles },
  { href: "/settings", label: "Settings", icon: Settings },
];

const professionalItems = [
  { href: "/therapist/dashboard", label: "Therapist Portal", icon: Video },
  { href: "/reports", label: "Reports", icon: FileText },
];

const authItems = [
  { href: "/signin", label: "Sign In", icon: LogIn },
  { href: "/signup", label: "Sign Up", icon: UserPlus },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuth();

  // Don't show navigation on auth pages or when not logged in
  const isAuthPage = pathname?.includes('/signin') || pathname?.includes('/signup');
  
  // Hide navigation on auth pages or if not logged in
  if (isAuthPage || !isLoggedIn) return null;

  const handleLogout = () => {
    logout();
    router.push("/signin");
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl glass"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute left-0 top-0 h-full w-64 bg-gray-900/95 border-r border-white/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Are You Alive?</span>
            </div>
            
            {/* User Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">MAIN NAVIGATION</h3>
              <nav className="space-y-2">
                {userNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Professional Navigation */}
            {(user?.role === 'professional' || user?.role === 'therapist') && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">PROFESSIONAL</h3>
                <nav className="space-y-2">
                  {professionalItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            {/* Logout Button (Mobile) */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all mt-6"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-gray-900/50 backdrop-blur-lg p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">Are You Alive?</span>
        </div>
        
        {/* User Navigation */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">MAIN NAVIGATION</h3>
          <nav className="space-y-2">
            {userNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                    : "hover:bg-white/10"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Professional Navigation */}
        {(user?.role === 'professional' || user?.role === 'therapist') && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">PROFESSIONAL</h3>
            <nav className="space-y-2">
              {professionalItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{user?.name || "User"}</p>
              <p className="text-xs text-gray-400">
                {user?.role === 'premium' ? 'Premium User' : 
                 user?.role === 'professional' ? 'Professional' : 'Free User'}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <button className="p-2 hover:bg-white/10 rounded-lg">
                <Bell className="h-4 w-4" />
              </button>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 hover:text-red-300"
                title="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
