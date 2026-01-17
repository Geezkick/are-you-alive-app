"use client";

import { useState } from "react";
import { 
  Home, 
  Heart, 
  BookOpen, 
  Shield, 
  Brain, 
  Users, 
  Settings, 
  Sparkles,
  Menu,
  X,
  Bell,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/checkin", label: "Daily Check-in", icon: Heart },
  { href: "/journal", label: "Journal", icon: BookOpen },
  { href: "/coping", label: "Coping Tools", icon: Brain },
  { href: "/crisis", label: "Crisis Support", icon: Shield },
  { href: "/community", label: "Community", icon: Users },
  { href: "/premium", label: "Premium", icon: Sparkles },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            
            <nav className="space-y-2">
              {navItems.map((item) => (
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
        
        <nav className="space-y-2">
          {navItems.map((item) => (
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

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Brian Nyarienya</p>
              <p className="text-xs text-gray-400">Premium User</p>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
