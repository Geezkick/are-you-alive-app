"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Video,
  Users,
  Calendar,
  FileText,
  MessageCircle,
  Shield,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Search,
  Filter,
  Plus,
  Download,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function TherapistPortalContent() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Video },
    { id: "clients", label: "My Clients", icon: Users },
    { id: "sessions", label: "Sessions", icon: Calendar },
    { id: "resources", label: "Resources", icon: FileText },
  ];

  const upcomingSessions = [
    { client: "Alex Johnson", time: "Today, 2:00 PM", type: "Video", status: "confirmed" },
    { client: "Sam Davis", time: "Tomorrow, 10:00 AM", type: "In-person", status: "confirmed" },
    { client: "Jordan Smith", time: "Friday, 4:30 PM", type: "Video", status: "pending" },
  ];

  const clientStats = [
    { label: "Active Clients", value: "12", change: "+2", icon: Users },
    { label: "This Week Sessions", value: "8", change: "+1", icon: Calendar },
    { label: "Avg. Session Rating", value: "4.8", change: "+0.2", icon: Star },
    { label: "Client Progress", value: "85%", change: "+5%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
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
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
              <Video className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                Therapist Portal
              </h1>
              <p className="text-sm sm:text-base text-gray-400">
                Professional tools for mental health practitioners
              </p>
            </div>
          </div>
          <Link
            href="/therapist/dashboard"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all"
          >
            Professional Dashboard
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {clientStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-blue-500" />
              <span className="text-sm text-green-500">{stat.change}</span>
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Sessions */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Upcoming Sessions</h3>
              <Link 
                href="/therapist/sessions" 
                className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      session.status === 'confirmed' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                    }`}>
                      {session.status === 'confirmed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold">{session.client}</h4>
                      <p className="text-sm text-gray-400">{session.time} • {session.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-white/10 rounded-lg">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-lg text-sm">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Plus, label: "New Client", color: "bg-blue-500/20", href: "/therapist/clients/new" },
                { icon: FileText, label: "Notes", color: "bg-green-500/20", href: "/therapist/notes" },
                { icon: Calendar, label: "Schedule", color: "bg-purple-500/20", href: "/therapist/schedule" },
                { icon: Download, label: "Reports", color: "bg-orange-500/20", href: "/therapist/reports" },
              ].map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`${action.color} rounded-xl p-6 text-center hover:opacity-90 transition-all`}
                >
                  <action.icon className="h-6 w-6 mx-auto mb-3" />
                  <span className="font-medium text-sm">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Emergency Resources */}
          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Protocols</h3>
                <p className="text-gray-400">Crisis management tools</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <Link
                href="/therapist/emergency"
                className="w-full text-left p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="font-bold">Crisis Intervention</div>
                  <div className="text-sm text-gray-400">Immediate response protocols</div>
                </div>
                <ChevronRight className="h-5 w-5 text-red-400" />
              </Link>
              
              <Link
                href="/therapist/referrals"
                className="w-full text-left p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="font-bold">Referral Network</div>
                  <div className="text-sm text-gray-400">Specialist contacts</div>
                </div>
                <ChevronRight className="h-5 w-5 text-blue-400" />
              </Link>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Recent Updates</h3>
            <div className="space-y-4">
              {[
                { title: "New HIPAA Guidelines", time: "2 days ago", icon: Shield },
                { title: "Client Progress Reports", time: "1 week ago", icon: FileText },
                { title: "Therapy Techniques Workshop", time: "2 weeks ago", icon: Video },
              ].map((update, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <update.icon className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium">{update.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400">{update.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message for Regular Users */}
      <div className="mt-8 glass rounded-2xl p-6 border border-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Looking for Therapy?</h3>
            <p className="text-gray-400 mb-4">
              Connect with licensed mental health professionals for personalized support.
              Our therapist portal helps you find the right match for your needs.
            </p>
            <div className="flex gap-3">
              <Link
                href="/therapist/find"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all"
              >
                Find a Therapist
              </Link>
              <Link
                href="/therapist/resources"
                className="border border-blue-500/30 text-blue-500 px-4 py-2 rounded-xl font-medium hover:bg-blue-500/10 transition-all"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add TrendingUp icon component
const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function TherapistPortalPage() {
  return (
    <ProtectedRoute>
      <TherapistPortalContent />
    </ProtectedRoute>
  );
}
