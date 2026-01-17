"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Heart, Brain, Shield, Zap, TrendingUp, Calendar,
  Bell, Settings, User, ArrowRight, Smile, Frown, Meh,
  Camera, Clock, Target, TrendingDown, Activity, BarChart3,
  Users, Moon, Sun, Thermometer, Battery, CheckCircle,
  AlertCircle, Star, ChevronRight, Award, Activity as RecoveryIcon,
  Target as RecoveryTarget, AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function DashboardContent() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [soberDays, setSoberDays] = useState(0);
  const [cravingLevel, setCravingLevel] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    // Set time of day greeting
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Morning");
    else if (hour < 18) setTimeOfDay("Afternoon");
    else setTimeOfDay("Evening");
    
    // Load profile picture from localStorage
    const savedPicture = localStorage.getItem('profilePicture');
    if (savedPicture) {
      setProfilePicture(savedPicture);
    }

    // Load saved mood for today
    const today = new Date().toDateString();
    const savedMood = localStorage.getItem(`mood_${today}`);
    if (savedMood) {
      setCurrentMood(parseInt(savedMood));
    }

    // Load recovery data
    const savedSoberDays = localStorage.getItem('soberDays');
    if (savedSoberDays) {
      setSoberDays(parseInt(savedSoberDays));
    } else {
      setSoberDays(14); // Default for demo
    }

    const savedCraving = localStorage.getItem('currentCraving');
    if (savedCraving) {
      setCravingLevel(parseInt(savedCraving));
    }
  }, []);

  // Function to get user's first name
  const getFirstName = () => {
    if (!user?.name) return "User";
    const firstName = user.name.split(' ')[0];
    return firstName || "User";
  };

  const quickActions = [
    { 
      icon: Heart, 
      label: "Daily Check-in", 
      color: "bg-gradient-to-r from-pink-500/20 to-rose-500/20", 
      iconColor: "text-pink-500",
      href: "/checkin",
      description: "Log your mood and symptoms"
    },
    { 
      icon: Brain, 
      label: "Meditation", 
      color: "bg-gradient-to-r from-purple-500/20 to-violet-500/20", 
      iconColor: "text-purple-500",
      href: "/coping",
      description: "5-min guided session"
    },
    { 
      icon: Shield, 
      label: "Safety Plan", 
      color: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20", 
      iconColor: "text-blue-500",
      href: "/safety-plan",
      description: "Emergency protocols"
    },
    { 
      icon: RecoveryIcon, 
      label: "Recovery Hub", 
      color: "bg-gradient-to-r from-green-500/20 to-emerald-500/20", 
      iconColor: "text-green-500",
      href: "/recovery-hub",
      description: "Addiction recovery support"
    },
  ];

  const moodOptions = [
    { icon: Smile, label: "Great", color: "text-green-500", bgColor: "bg-green-500/20", value: 5 },
    { icon: Smile, label: "Good", color: "text-lime-500", bgColor: "bg-lime-500/20", value: 4 },
    { icon: Meh, label: "Okay", color: "text-yellow-500", bgColor: "bg-yellow-500/20", value: 3 },
    { icon: Frown, label: "Low", color: "text-orange-500", bgColor: "bg-orange-500/20", value: 2 },
    { icon: Frown, label: "Poor", color: "text-red-500", bgColor: "bg-red-500/20", value: 1 },
  ];

  const wellnessMetrics = [
    { 
      title: "Mood Trend", 
      value: "+12%", 
      change: "up", 
      icon: TrendingUp, 
      color: "text-green-500",
      description: "vs last week"
    },
    { 
      title: "Sleep Quality", 
      value: "7.2h", 
      change: "up", 
      icon: Moon, 
      color: "text-blue-500",
      description: "Avg. sleep duration"
    },
    { 
      title: "Stress Level", 
      value: "Moderate", 
      change: "down", 
      icon: Thermometer, 
      color: "text-orange-500",
      description: "Decreased 8%"
    },
    { 
      title: "Sober Days", 
      value: soberDays.toString(), 
      change: "up", 
      icon: Award, 
      color: "text-emerald-500",
      description: "Recovery journey"
    },
  ];

  const recentActivities = [
    { action: "Completed morning meditation", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
    { action: `Logged mood: ${currentMood ? moodOptions.find(m => m.value === currentMood)?.label || 'Good' : 'Good'}`, time: "4 hours ago", icon: Heart, color: "text-pink-500" },
    { action: "Safety check completed", time: "Yesterday", icon: Shield, color: "text-blue-500" },
    { action: `Updated recovery: ${soberDays} days sober`, time: "Today", icon: Award, color: "text-emerald-500" },
  ];

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

  const handleMoodSelect = (moodValue: number) => {
    setCurrentMood(moodValue);
    const today = new Date().toDateString();
    localStorage.setItem(`mood_${today}`, moodValue.toString());
    
    // Show success feedback
    const moodLabel = moodOptions.find(m => m.value === moodValue)?.label || "Mood";
    alert(`Mood set to "${moodLabel}" for today!`);
  };

  const getMoodLabel = () => {
    if (currentMood === null) return "Not set";
    const mood = moodOptions.find(m => m.value === currentMood);
    return mood?.label || "Not set";
  };

  const getCravingStatus = () => {
    if (cravingLevel === 0) return { text: "No cravings", color: "text-green-500", bg: "bg-green-500/20" };
    if (cravingLevel <= 3) return { text: "Mild cravings", color: "text-blue-500", bg: "bg-blue-500/20" };
    if (cravingLevel <= 6) return { text: "Moderate cravings", color: "text-orange-500", bg: "bg-orange-500/20" };
    return { text: "High cravings", color: "text-red-500", bg: "bg-red-500/20" };
  };

  const cravingStatus = getCravingStatus();

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                Good {timeOfDay}, {getFirstName()}
              </h1>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              {user?.role === 'premium' 
                ? "Welcome to your premium wellness dashboard" 
                : "Welcome to your wellness dashboard"}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Today's Date */}
            <div className="hidden sm:block glass rounded-xl px-4 py-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="relative group">
              {profilePicture ? (
                <>
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-pink-500/30"
                  />
                  <label className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-5 w-5 text-white" />
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
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <User className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <label className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-5 w-5 text-white" />
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
          </div>
        </div>

        {/* Today's Mood Quick Status */}
        <div className="glass rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                Today's Wellness Status
              </h3>
              <p className="text-sm text-gray-400">Track your mood and recovery</p>
            </div>
            <div className="flex gap-2">
              <div className={`px-3 py-1 rounded-full ${currentMood ? 'bg-pink-500/20 text-pink-500' : 'bg-gray-500/20 text-gray-400'} text-sm font-medium`}>
                Mood: {currentMood ? getMoodLabel() : "Not set"}
              </div>
              <div className={`px-3 py-1 rounded-full ${cravingStatus.bg} ${cravingStatus.color} text-sm font-medium`}>
                {cravingStatus.text}
              </div>
            </div>
          </div>
          
          {/* Mood Selector */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => handleMoodSelect(mood.value)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all active:scale-95 ${
                  currentMood === mood.value
                    ? `${mood.bgColor} border-2 ${mood.color.replace('text', 'border')}/30`
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <mood.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${mood.color} mb-2`} />
                <span className="text-xs sm:text-sm">{mood.label}</span>
              </button>
            ))}
          </div>

          {/* Recovery Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/recovery-hub"
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 hover:opacity-90 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                  <Award className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{soberDays}</div>
                  <div className="text-sm text-gray-400">Days Sober</div>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/recovery-hub"
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 hover:opacity-90 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <RecoveryTarget className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{cravingLevel}/10</div>
                  <div className="text-sm text-gray-400">Craving Level</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Overview - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">
        {wellnessMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${metric.color}`} />
              {metric.change === "up" && <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />}
              {metric.change === "down" && <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />}
              {metric.change === "stable" && <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />}
            </div>
            <p className="text-2xl sm:text-3xl font-bold mb-1">{metric.value}</p>
            <p className="text-sm sm:text-base font-medium mb-1">{metric.title}</p>
            <p className="text-xs sm:text-sm text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Quick Actions */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Quick Actions</h3>
              <Link 
                href="/checkin" 
                className="text-sm text-pink-500 hover:text-pink-400 flex items-center gap-1"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`${action.color} rounded-xl p-4 hover:opacity-90 transition-all active:scale-95 group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-lg bg-white/10 mb-3">
                      <action.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${action.iconColor}`} />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base mb-1">{action.label}</h4>
                    <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      {action.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Recent Activity</h3>
              <Link 
                href="/analytics" 
                className="text-sm text-pink-500 hover:text-pink-400 flex items-center gap-1"
              >
                See Analytics
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="p-2 rounded-lg bg-white/10">
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:space-y-8">
          {/* Recovery Progress Card */}
          <div className="glass rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20">
                <Award className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Recovery Progress</h3>
                <p className="text-gray-400">Your journey to wellness</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Sobriety Streak</span>
                <span className="text-emerald-500 font-bold">{soberDays} days</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (soberDays / 30) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Day 1</span>
                <span>30-day goal</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${cravingLevel >= 8 ? 'bg-red-500' : cravingLevel >= 5 ? 'bg-orange-500' : 'bg-green-500'}`} />
                  <span className="text-sm">Current Craving Level</span>
                </div>
                <span className={`font-medium ${cravingLevel >= 8 ? 'text-red-500' : cravingLevel >= 5 ? 'text-orange-500' : 'text-green-500'}`}>
                  {cravingLevel}/10
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Support Meeting</span>
                <span className="text-blue-500 text-sm">2 days ago</span>
              </div>
            </div>
            
            <Link
              href="/recovery-hub"
              className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <RecoveryIcon className="h-5 w-5" />
              Go to Recovery Hub
            </Link>
          </div>

          {/* Emergency SOS Card */}
          <div className="glass rounded-2xl p-4 sm:p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Support</h3>
                <p className="text-gray-400">Immediate help available</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Link
                href="/crisis"
                className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <AlertCircle className="h-5 w-5" />
                Access Crisis Support
              </Link>
              
              <button
                onClick={() => {
                  if (cravingLevel >= 8) {
                    alert("Connecting you with recovery emergency support...");
                  } else {
                    alert("Emergency contacts would be notified");
                  }
                }}
                className="w-full border border-red-500/30 text-red-400 py-3 px-4 rounded-xl font-medium hover:bg-red-500/10 transition-all active:scale-95"
              >
                <AlertTriangle className="h-4 w-4 inline mr-2" />
                Recovery Emergency
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                <Target className="h-4 w-4 inline mr-2" />
                Last safety check: 2 days ago
              </p>
            </div>
          </div>

          {/* AI Insights */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Insights</h3>
                <p className="text-gray-400">Personalized for you</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Sleep Improvement</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Evening meditation at 8 PM could improve your sleep quality by 15%
                    </p>
                  </div>
                </div>
              </div>

              {soberDays > 0 && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Recovery Milestone</p>
                      <p className="text-sm text-gray-300 mt-1">
                        You're {soberDays} days sober! Consider joining a support group this week.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl border border-white/10 hover:border-pink-500/30 hover:bg-pink-500/10 transition-all active:scale-95 flex items-center justify-center gap-2">
              <Brain className="h-4 w-4" />
              View Detailed Insights
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Quick Actions Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-3 flex justify-around lg:hidden">
        <Link
          href="/checkin"
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Heart className="h-5 w-5 text-pink-500" />
          <span className="text-xs mt-1">Check-in</span>
        </Link>
        
        <Link
          href="/recovery-hub"
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Award className="h-5 w-5 text-emerald-500" />
          <span className="text-xs mt-1">Recovery</span>
        </Link>
        
        <Link
          href="/journal"
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Calendar className="h-5 w-5 text-blue-500" />
          <span className="text-xs mt-1">Journal</span>
        </Link>
        
        <button 
          onClick={() => alert("Quick help")}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Shield className="h-5 w-5 text-red-500" />
          <span className="text-xs mt-1">Help</span>
        </button>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="h-16 lg:h-0"></div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
