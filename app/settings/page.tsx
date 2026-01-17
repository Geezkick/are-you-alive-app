"use client";

import { useState } from "react";
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
  EyeOff
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const settingsCategories = [
    {
      title: "Account & Security",
      icon: Lock,
      settings: [
        { label: "Change Password", action: () => alert("Change password flow") },
        { label: "Two-Factor Authentication", value: "Enabled", action: () => alert("2FA settings") },
        { label: "Biometric Login", value: "Enabled", action: () => alert("Biometric settings") },
        { label: "Login History", action: () => alert("Login history") },
      ]
    },
    {
      title: "Privacy & Data",
      icon: Shield,
      settings: [
        { label: "Location Sharing", value: locationSharing ? "Enabled" : "Disabled", action: () => setLocationSharing(!locationSharing) },
        { label: "Data Export", action: () => alert("Exporting data...") },
        { label: "Delete Account Data", action: () => alert("Are you sure? This cannot be undone.") },
        { label: "Privacy Policy", action: () => alert("Privacy policy") },
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        { label: "Push Notifications", value: notifications ? "Enabled" : "Disabled", action: () => setNotifications(!notifications) },
        { label: "Email Updates", value: "Weekly", action: () => alert("Email settings") },
        { label: "Emergency Alerts", value: "Always", action: () => alert("Emergency alert settings") },
        { label: "Wellness Reminders", value: "Daily", action: () => alert("Reminder settings") },
      ]
    },
    {
      title: "Appearance",
      icon: Moon,
      settings: [
        { label: "Dark Mode", value: darkMode ? "Enabled" : "Disabled", action: () => setDarkMode(!darkMode) },
        { label: "Theme Color", value: "Pink", action: () => alert("Theme colors") },
        { label: "Font Size", value: "Medium", action: () => alert("Font size settings") },
        { label: "Reduce Motion", value: "Disabled", action: () => alert("Motion settings") },
      ]
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <SettingsIcon className="h-8 w-8 text-pink-500" />
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            Settings
          </h1>
        </div>
        <p className="text-gray-400">Manage your account and app preferences</p>
      </div>

      {/* Profile Card */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <span className="text-2xl font-bold">BN</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">Brian Nyarienya</h3>
            <p className="text-gray-400">premium@areyoualive.com</p>
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20">
              <Check className="h-3 w-3 text-green-500" />
              <span className="text-sm">Premium Account</span>
            </div>
          </div>
          <button className="border-2 border-pink-500/30 text-pink-500 px-4 py-2 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Settings Categories */}
      <div className="space-y-6">
        {settingsCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="h-6 w-6 text-pink-500" />
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.settings.map((setting, settingIndex) => (
                <div
                  key={settingIndex}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
                  onClick={setting.action}
                >
                  <span className="font-medium">{setting.label}</span>
                  <div className="flex items-center gap-2">
                    {setting.value && (
                      <span className="text-gray-400">{setting.value}</span>
                    )}
                    {setting.label === "Change Password" && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPassword(!showPassword);
                        }}
                        className="p-1"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    )}
                    {setting.label === "Delete Account Data" && (
                      <Trash2 className="h-4 w-4 text-red-400" />
                    )}
                    {setting.label === "Data Export" && (
                      <Download className="h-4 w-4 text-blue-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-6 border border-red-500/20 mt-8"
      >
        <h3 className="text-xl font-bold text-red-400 mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <button
            onClick={() => alert("Exporting all your data...")}
            className="w-full text-left p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all flex items-center justify-between"
          >
            <div>
              <div className="font-bold">Export All Data</div>
              <div className="text-sm text-gray-400">Download a copy of all your information</div>
            </div>
            <Download className="h-5 w-5 text-red-400" />
          </button>
          
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                alert("Account deletion requested. Our team will contact you within 24 hours.");
              }
            }}
            className="w-full text-left p-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-red-400">Delete Account</div>
              <div className="text-sm text-gray-400">Permanently delete your account and all data</div>
            </div>
            <Trash2 className="h-5 w-5 text-red-400" />
          </button>
        </div>
      </motion.div>

      {/* App Info */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        <p>Are You Alive? v2.0.0 • Developed by Brian Nyarienya</p>
        <p className="mt-1">End-to-end encrypted • Zero-trust privacy • HIPAA compliant</p>
      </div>
    </div>
  );
}
