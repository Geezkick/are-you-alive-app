"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Users,
  Calendar,
  BookOpen,
  Phone,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Brain,
  Activity,
  Star,
  ArrowRight,
  ChevronRight,
  Bell,
  Download,
  Video,
  MessageCircle,
  Award,
  Thermometer,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";

export default function RecoveryHubPage() {
  const { user } = useAuth();
  const [soberDays, setSoberDays] = useState(0);
  const [currentCraving, setCurrentCraving] = useState(0);
  const [showEmergency, setShowEmergency] = useState(false);

  useEffect(() => {
    // Load sober days from localStorage
    const savedSoberDays = localStorage.getItem('soberDays');
    if (savedSoberDays) {
      setSoberDays(parseInt(savedSoberDays));
    } else {
      // Set initial sober days based on user registration
      setSoberDays(14); // Default for demo
      localStorage.setItem('soberDays', '14');
    }

    // Load craving level
    const savedCraving = localStorage.getItem('currentCraving');
    if (savedCraving) {
      setCurrentCraving(parseInt(savedCraving));
    }
  }, []);

  const updateSoberDays = (days: number) => {
    setSoberDays(days);
    localStorage.setItem('soberDays', days.toString());
  };

  const handleCravingLevel = (level: number) => {
    setCurrentCraving(level);
    localStorage.setItem('currentCraving', level.toString());
    
    if (level >= 8) {
      setShowEmergency(true);
    }
  };

  const recoveryTools = [
    {
      icon: Brain,
      title: "Craving Control",
      description: "Immediate techniques to manage urges",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      href: "/recovery-hub/craving-control"
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with peers in recovery",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      href: "/recovery-hub/support-groups"
    },
    {
      icon: BookOpen,
      title: "Recovery Journal",
      description: "Track your progress daily",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      href: "/recovery-hub/journal"
    },
    {
      icon: Target,
      title: "Relapse Prevention",
      description: "Identify and avoid triggers",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
      href: "/recovery-hub/prevention"
    }
  ];

  const emergencyContacts = [
    { name: "SAMHSA Hotline", number: "1-800-662-HELP", description: "24/7 Treatment Referral" },
    { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Free 24/7 Support" },
    { name: "NA Helpline", number: "1-888-422-3422", description: "Narcotics Anonymous" },
    { name: "Emergency Services", number: "911", description: "Immediate Medical Help" }
  ];

  const dailyCheckpoints = [
    { time: "Morning", activity: "Meditation & Affirmations", completed: true },
    { time: "Afternoon", activity: "Check-in with Sponsor", completed: true },
    { time: "Evening", activity: "Support Group Meeting", completed: false },
    { time: "Night", activity: "Gratitude Journal", completed: false }
  ];

  const milestones = [
    { days: 1, label: "24 Hours", achieved: true },
    { days: 7, label: "1 Week", achieved: true },
    { days: 30, label: "1 Month", achieved: true },
    { days: 90, label: "3 Months", achieved: false },
    { days: 180, label: "6 Months", achieved: false },
    { days: 365, label: "1 Year", achieved: false }
  ];

  const nextMilestone = milestones.find(m => !m.achieved) || milestones[milestones.length - 1];

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20">
            <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              Recovery Hub
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              Your comprehensive addiction recovery companion
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Alert */}
      {showEmergency && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <h3 className="font-bold text-lg">High Craving Alert</h3>
          </div>
          <p className="text-gray-300 mb-4">
            You're experiencing strong cravings. Remember your coping strategies and reach out for support immediately.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setShowEmergency(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all"
            >
              I'm Safe Now
            </button>
            <button
              onClick={() => alert("Connecting you with support...")}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-xl font-medium hover:bg-red-500/10 transition-all"
            >
              Get Immediate Help
            </button>
          </div>
        </motion.div>
      )}

      {/* Sobriety Tracker - Hero Section */}
      <div className="glass rounded-2xl p-4 sm:p-6 mb-6 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sobriety Counter */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Sobriety Tracker</h3>
                <p className="text-gray-400">Every day is a victory</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateSoberDays(soberDays + 1)}
                  className="p-2 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-all"
                  title="Add sober day"
                >
                  <TrendingUp className="h-5 w-5" />
                </button>
                <button
                  onClick={() => updateSoberDays(Math.max(0, soberDays - 1))}
                  className="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-all"
                  title="Remove sober day"
                >
                  <TrendingUp className="h-5 w-5 rotate-180" />
                </button>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text mb-2">
                {soberDays}
              </div>
              <p className="text-xl text-gray-400">Days Sober</p>
              
              {/* Milestone Progress */}
              <div className="mt-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Next milestone</span>
                  <span className="text-pink-500 font-medium">{nextMilestone.label}</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${(soberDays / nextMilestone.days) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>{soberDays} days</span>
                  <span>{nextMilestone.days - soberDays} to go</span>
                </div>
              </div>
            </div>
          </div>

          {/* Craving Meter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Current Craving Level</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">How strong is the urge?</span>
                <span className={`text-lg font-bold ${
                  currentCraving >= 8 ? 'text-red-500' :
                  currentCraving >= 5 ? 'text-orange-500' : 'text-green-500'
                }`}>
                  {currentCraving}/10
                </span>
              </div>
              
              {/* Craving Scale */}
              <div className="space-y-3">
                {[0, 2, 4, 6, 8, 10].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleCravingLevel(level)}
                    className={`w-full p-3 rounded-xl transition-all text-left ${
                      currentCraving === level
                        ? level >= 8 ? 'bg-red-500/20 border border-red-500/30' :
                          level >= 5 ? 'bg-orange-500/20 border border-orange-500/30' :
                          'bg-green-500/20 border border-green-500/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Level {level}</span>
                      <div className={`h-3 w-3 rounded-full ${
                        level >= 8 ? 'bg-red-500' :
                        level >= 5 ? 'bg-orange-500' : 'bg-green-500'
                      }`} />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {level === 0 ? "No craving" :
                       level === 2 ? "Mild urge" :
                       level === 4 ? "Moderate craving" :
                       level === 6 ? "Strong urge" :
                       level === 8 ? "Intense craving" :
                       "Emergency level"}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Tools Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Recovery Tools</h3>
          <Link 
            href="/recovery-hub/tools" 
            className="text-sm text-pink-500 hover:text-pink-400 flex items-center gap-1"
          >
            All Tools
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recoveryTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`bg-gradient-to-r ${tool.color} rounded-2xl p-6 hover:opacity-90 transition-all active:scale-95`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-xl bg-white/10 mb-4">
                  <tool.icon className={`h-6 w-6 ${tool.iconColor}`} />
                </div>
                <h4 className="font-bold text-lg mb-2">{tool.title}</h4>
                <p className="text-sm text-gray-300">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Daily Recovery Plan */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Today's Recovery Plan</h3>
                <p className="text-gray-400">Stay on track with daily checkpoints</p>
              </div>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {dailyCheckpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex-shrink-0">
                    {checkpoint.completed ? (
                      <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{checkpoint.time}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        checkpoint.completed 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {checkpoint.completed ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{checkpoint.activity}</p>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl border border-white/10 hover:border-pink-500/30 hover:bg-pink-500/10 transition-all active:scale-95 flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              Customize Recovery Plan
            </button>
          </div>

          {/* Milestone Achievements */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Recovery Milestones</h3>
                <p className="text-gray-400">Celebrate your progress</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center ${
                    milestone.achieved
                      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                      : 'bg-white/5'
                  }`}
                >
                  <div className="text-2xl font-bold mb-2">{milestone.days}</div>
                  <div className="text-sm font-medium">{milestone.label}</div>
                  <div className={`text-xs mt-2 ${milestone.achieved ? 'text-green-500' : 'text-gray-400'}`}>
                    {milestone.achieved ? '✓ Achieved' : 'In progress'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:space-y-8">
          {/* Emergency Contacts */}
          <div className="glass rounded-2xl p-4 sm:p-6 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Phone className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Contacts</h3>
                <p className="text-gray-400">Immediate support available</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all cursor-pointer">
                  <div className="font-medium mb-1">{contact.name}</div>
                  <div className="text-lg font-bold mb-1">{contact.number}</div>
                  <div className="text-sm text-gray-300">{contact.description}</div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => alert("Calling support...")}
              className="w-full mt-6 bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call for Immediate Help
            </button>
          </div>

          {/* Quick Coping Strategies */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6">Quick Coping Strategies</h3>
            
            <div className="space-y-4">
              {[
                { technique: "Deep Breathing", duration: "5 minutes", icon: Activity },
                { technique: "Call Your Sponsor", duration: "Immediate", icon: Users },
                { technique: "Distract Yourself", duration: "15 minutes", icon: Zap },
                { technique: "Urge Surfing", duration: "10 minutes", icon: Brain }
              ].map((strategy, index) => (
                <button
                  key={index}
                  onClick={() => alert(`Starting: ${strategy.technique}`)}
                  className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all active:scale-95 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <strategy.icon className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium">{strategy.technique}</div>
                      <div className="text-sm text-gray-400">{strategy.duration}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Footer */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-blue-500" />
            <div>
              <h4 className="font-bold">Recovery is a Journey</h4>
              <p className="text-sm text-gray-400">You're not alone. Help is always available.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => alert("Finding meetings near you...")}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all"
            >
              Find Meetings
            </button>
            <button
              onClick={() => alert("Opening resources...")}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-xl font-medium hover:bg-blue-500/10 transition-all"
            >
              Resources
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-3 flex justify-around lg:hidden">
        <button
          onClick={() => handleCravingLevel(currentCraving)}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Thermometer className="h-5 w-5 text-orange-500" />
          <span className="text-xs mt-1">Craving</span>
        </button>
        
        <Link
          href="/recovery-hub/journal"
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <BookOpen className="h-5 w-5 text-green-500" />
          <span className="text-xs mt-1">Journal</span>
        </Link>
        
        <button 
          onClick={() => alert("Quick support")}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <Users className="h-5 w-5 text-blue-500" />
          <span className="text-xs mt-1">Support</span>
        </button>
        
        <button 
          onClick={() => setShowEmergency(true)}
          className="flex flex-col items-center p-2 active:scale-95 transition-transform"
        >
          <AlertCircle className="h-5 w-5 text-red-500" />
          <span className="text-xs mt-1">Emergency</span>
        </button>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="h-16 lg:h-0"></div>
    </div>
  );
}
