"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Settings as SettingsIcon,
  Bell,
  Lock,
  Users,
  Shield,
  Moon,
  Globe,
  Download,
  Trash2,
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  User,
  Mail,
  Smartphone,
  AlertCircle,
  Palette,
  Type,
  Activity,
  LogOut,
  Camera,
  Edit2,
  Save
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState("Weekly");
  const [emergencyAlerts, setEmergencyAlerts] = useState("Always");
  const [wellnessReminders, setWellnessReminders] = useState("Daily");
  const [fontSize, setFontSize] = useState("Medium");
  const [themeColor, setThemeColor] = useState("Pink");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempName, setTempName] = useState("");
  
  const { user, logout } = useAuth();

  // Load profile picture on mount
  useEffect(() => {
    const savedPicture = localStorage.getItem('profilePicture');
    if (savedPicture) {
      setProfilePicture(savedPicture);
    }
    
    if (user?.name) {
      setTempName(user.name);
    }
  }, [user]);

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfilePicture(result);
        localStorage.setItem('profilePicture', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // In a real app, save to backend
    alert(`Profile updated: ${tempName}`);
    setIsEditingProfile(false);
  };

  const settingsCategories = [
    {
      title: "Account & Security",
      icon: Lock,
      settings: [
        { 
          label: "Change Password", 
          icon: Lock,
          action: () => alert("Change password flow"),
          hasAction: true
        },
        { 
          label: "Two-Factor Authentication", 
          value: "Enabled", 
          icon: Shield,
          action: () => alert("2FA settings"),
          hasAction: true
        },
        { 
          label: "Biometric Login", 
          value: "Enabled", 
          icon: Smartphone,
          action: () => alert("Biometric settings"),
          hasAction: true
        },
        { 
          label: "Login History", 
          icon: Activity,
          action: () => alert("Login history"),
          hasAction: true
        },
      ]
    },
    {
      title: "Privacy & Data",
      icon: Shield,
      settings: [
        { 
          label: "Location Sharing", 
          value: locationSharing ? "Enabled" : "Disabled", 
          icon: Globe,
          action: () => setLocationSharing(!locationSharing),
          isToggle: true
        },
        { 
          label: "Data Export", 
          icon: Download,
          action: () => alert("Exporting data..."),
          hasAction: true
        },
        { 
          label: "Delete Account Data", 
          icon: Trash2,
          action: () => alert("Are you sure? This cannot be undone."),
          danger: true
        },
        { 
          label: "Privacy Policy", 
          icon: Shield,
          action: () => alert("Privacy policy"),
          hasAction: true
        },
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        { 
          label: "Push Notifications", 
          value: notifications ? "Enabled" : "Disabled", 
          icon: Bell,
          action: () => setNotifications(!notifications),
          isToggle: true
        },
        { 
          label: "Email Updates", 
          value: emailUpdates, 
          icon: Mail,
          action: () => {
            const options = ["Daily", "Weekly", "Monthly", "Never"];
            const currentIndex = options.indexOf(emailUpdates);
            setEmailUpdates(options[(currentIndex + 1) % options.length]);
          },
          hasAction: true
        },
        { 
          label: "Emergency Alerts", 
          value: emergencyAlerts, 
          icon: AlertCircle,
          action: () => {
            const options = ["Always", "Critical Only", "Never"];
            const currentIndex = options.indexOf(emergencyAlerts);
            setEmergencyAlerts(options[(currentIndex + 1) % options.length]);
          },
          hasAction: true
        },
        { 
          label: "Wellness Reminders", 
          value: wellnessReminders, 
          icon: Bell,
          action: () => {
            const options = ["Hourly", "Daily", "Weekly", "Never"];
            const currentIndex = options.indexOf(wellnessReminders);
            setWellnessReminders(options[(currentIndex + 1) % options.length]);
          },
          hasAction: true
        },
      ]
    },
    {
      title: "Appearance",
      icon: Moon,
      settings: [
        { 
          label: "Dark Mode", 
          value: darkMode ? "Enabled" : "Disabled", 
          icon: Moon,
          action: () => setDarkMode(!darkMode),
          isToggle: true
        },
        { 
          label: "Theme Color", 
          value: themeColor, 
          icon: Palette,
          action: () => {
            const colors = ["Pink", "Blue", "Purple", "Green", "Orange"];
            const currentIndex = colors.indexOf(themeColor);
            setThemeColor(colors[(currentIndex + 1) % colors.length]);
          },
          hasAction: true
        },
        { 
          label: "Font Size", 
          value: fontSize, 
          icon: Type,
          action: () => {
            const sizes = ["Small", "Medium", "Large", "Extra Large"];
            const currentIndex = sizes.indexOf(fontSize);
            setFontSize(sizes[(currentIndex + 1) % sizes.length]);
          },
          hasAction: true
        },
        { 
          label: "Reduce Motion", 
          value: reduceMotion ? "Enabled" : "Disabled", 
          icon: Activity,
          action: () => setReduceMotion(!reduceMotion),
          isToggle: true
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Header - Mobile Optimized */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-lg hover:bg-white/10 transition-all md:hidden"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link
            href="/dashboard"
            className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
            <SettingsIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              Settings
            </h1>
            <p className="text-sm sm:text-base text-gray-400">Manage your account and app preferences</p>
          </div>
        </div>
      </div>

      {/* Profile Card - Responsive with User's Picture */}
      <div className="glass rounded-2xl p-4 sm:p-6 mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Profile Picture Section */}
          <div className="relative group">
            {profilePicture ? (
              <>
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-2 border-pink-500/30"
                />
                <label className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="h-6 w-6 text-white" />
                  <input
                    type="file"
                    onChange={handleProfilePictureChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </>
            ) : (
              <div className="relative group">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <User className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <label className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="h-6 w-6 text-white" />
                  <input
                    type="file"
                    onChange={handleProfilePictureChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          
          {/* User Info Section */}
          <div className="flex-1 min-w-0">
            {isEditingProfile ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg font-bold"
                  placeholder="Enter your name"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all text-sm"
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingProfile(false);
                      setTempName(user?.name || "");
                    }}
                    className="border border-white/20 text-white px-4 py-2 rounded-xl font-medium hover:bg-white/10 transition-all text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold truncate">{user?.name || "User"}</h3>
                <p className="text-sm sm:text-base text-gray-400 truncate">{user?.email || "user@example.com"}</p>
                <div className="inline-flex items-center gap-1 sm:gap-2 mt-2 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-xs sm:text-sm">
                    {user?.role === 'premium' ? 'Premium Account' : 
                     user?.role === 'professional' ? 'Professional Account' : 'Free Account'}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {/* Action Buttons - Responsive */}
          <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
            {!isEditingProfile && (
              <button
                onClick={() => setIsEditingProfile(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-pink-500/30 text-pink-500 px-3 sm:px-4 py-2 rounded-xl font-medium hover:bg-pink-500/10 hover:border-pink-500/50 transition-all text-sm sm:text-base"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            )}
            <button 
              onClick={() => {
                logout();
                alert("Signed out successfully");
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-white/20 text-white px-3 sm:px-4 py-2 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all text-sm sm:text-base"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
              <span className="sm:hidden">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Categories - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {settingsCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {category.settings.map((setting, settingIndex) => (
                <button
                  key={settingIndex}
                  onClick={setting.action}
                  className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-xl transition-all active:scale-[0.98] ${
                    setting.danger 
                      ? 'hover:bg-red-500/10 text-red-400' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {setting.icon && (
                      <setting.icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
                        setting.danger ? 'text-red-400' : 'text-gray-400'
                      }`} />
                    )}
                    <span className={`font-medium text-left truncate text-sm sm:text-base ${
                      setting.danger ? 'text-red-400' : ''
                    }`}>
                      {setting.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-3">
                    {setting.value && (
                      <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ${
                        setting.isToggle
                          ? setting.value === 'Enabled'
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-red-500/20 text-red-500'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {setting.value}
                      </span>
                    )}
                    {setting.hasAction && !setting.isToggle && !setting.danger && (
                      <div className="h-5 w-5 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Danger Zone - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-4 sm:p-6 border border-red-500/20 mt-6 sm:mt-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-red-500/20">
            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-red-400">Danger Zone</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => alert("Exporting all your data...")}
            className="w-full text-left p-3 sm:p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all active:scale-[0.98] flex items-center justify-between"
          >
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm sm:text-base">Export All Data</div>
              <div className="text-xs sm:text-sm text-gray-400 truncate">
                Download a copy of all your information
              </div>
            </div>
            <Download className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0 ml-3" />
          </button>
          
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                alert("Account deletion requested. Our team will contact you within 24 hours.");
              }
            }}
            className="w-full text-left p-3 sm:p-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all active:scale-[0.98] flex items-center justify-between"
          >
            <div className="flex-1 min-w-0">
              <div className="font-bold text-red-400 text-sm sm:text-base">Delete Account</div>
              <div className="text-xs sm:text-sm text-gray-400 truncate">
                Permanently delete your account and all data
              </div>
            </div>
            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0 ml-3" />
          </button>
        </div>
      </motion.div>

      {/* App Info - Responsive */}
      <div className="text-center mt-6 sm:mt-8 text-gray-400">
        <p className="text-xs sm:text-sm">
          Are You Alive? v2.0.0 • Developed by Brian Nyarienya
        </p>
        <div className="mt-2 text-xs sm:text-sm space-y-1">
          <p>End-to-end encrypted • Zero-trust privacy</p>
          <p>HIPAA compliant • ISO 27001 certified</p>
        </div>
        
        {/* Quick Actions Footer */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
          <button className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all active:scale-95">
            Terms of Service
          </button>
          <button className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all active:scale-95">
            Privacy Policy
          </button>
          <button className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all active:scale-95">
            Contact Support
          </button>
          <button className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all active:scale-95">
            Rate App
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 p-3 flex justify-around md:hidden">
        <Link
          href="/dashboard"
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-xs mt-1">Back</span>
        </Link>
        
        <button 
          onClick={() => setIsEditingProfile(!isEditingProfile)}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          {isEditingProfile ? (
            <>
              <Save className="h-5 w-5 text-green-500" />
              <span className="text-xs mt-1 text-green-500">Save</span>
            </>
          ) : (
            <>
              <Edit2 className="h-5 w-5" />
              <span className="text-xs mt-1">Edit</span>
            </>
          )}
        </button>
        
        <button 
          onClick={() => alert("Need help?")}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Users className="h-5 w-5" />
          <span className="text-xs mt-1">Help</span>
        </button>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="h-16 md:h-0"></div>
    </div>
  );
}
