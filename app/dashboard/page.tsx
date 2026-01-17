"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Calendar,
  Bell,
  Settings,
  User,
  ArrowRight,
  Smile,
  Frown,
  Meh
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [moodData, setMoodData] = useState([7, 8, 6, 9, 8, 7, 8]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Morning");
    else if (hour < 18) setTimeOfDay("Afternoon");
    else setTimeOfDay("Evening");
  }, []);

  const quickActions = [
    { icon: Heart, label: "Daily Check-in", color: "bg-pink-500/20", href: "/checkin" },
    { icon: Brain, label: "Meditation", color: "bg-purple-500/20", href: "/coping" },
    { icon: Shield, label: "Safety Check", color: "bg-blue-500/20", href: "/crisis" },
    { icon: Zap, label: "Energy Boost", color: "bg-yellow-500/20", href: "/coping" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text">
          Good {timeOfDay}, Brian
        </h1>
        <p className="text-gray-400">Welcome to your wellness dashboard</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Heart, value: "7.8", label: "Avg Mood", color: "text-pink-500", trend: "up" },
          { icon: Brain, value: "14", label: "Streak Days", color: "text-purple-500", trend: "up" },
          { icon: Shield, value: "0", label: "Crisis Alerts", color: "text-blue-500", trend: "stable" },
          { icon: Zap, value: "92%", label: "Wellness Score", color: "text-yellow-500", trend: "up" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              {stat.trend === "up" && <TrendingUp className="h-5 w-5 text-green-500" />}
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Daily Check-in Card */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Daily Check-in
                </h3>
                <p className="text-gray-400">How are you feeling today?</p>
              </div>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>

            {/* Mood Selector */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {[
                { icon: Smile, label: "Great", color: "text-green-500" },
                { icon: Smile, label: "Good", color: "text-lime-500" },
                { icon: Meh, label: "Okay", color: "text-yellow-500" },
                { icon: Frown, label: "Low", color: "text-orange-500" },
                { icon: Frown, label: "Poor", color: "text-red-500" },
              ].map((mood, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <mood.icon className={`h-8 w-8 ${mood.color} mb-2`} />
                  <span className="text-sm">{mood.label}</span>
                </button>
              ))}
            </div>

            <Link
              href="/checkin"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
            >
              Complete Full Check-in
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`flex flex-col items-center p-4 rounded-xl ${action.color} hover:opacity-90 transition-all`}
                >
                  <action.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium text-center">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Emergency SOS Card */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency SOS</h3>
                <p className="text-gray-400">Immediate help available</p>
              </div>
            </div>
            
            <Link
              href="/crisis"
              className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all flex items-center justify-center gap-2"
            >
              Access Crisis Support
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* AI Insights */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Insights</h3>
                <p className="text-gray-400">Personalized recommendations</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent">
                <p className="font-medium">Sleep Pattern Detected</p>
                <p className="text-sm text-gray-300 mt-1">
                  Evening meditation improves sleep quality by 15%
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent">
                <p className="font-medium">Stress Trigger</p>
                <p className="text-sm text-gray-300 mt-1">
                  Consider scheduling breaks on Wednesday afternoons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
