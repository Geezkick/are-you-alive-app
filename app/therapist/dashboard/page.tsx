"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  BarChart3, 
  MessageSquare,
  Calendar,
  Bell,
  Shield,
  FileText,
  Video,
  ArrowLeft,
  Search,
  Filter,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Clock,
  Eye,
  Download
} from "lucide-react";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function TherapistDashboardContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const clientStats = [
    { label: "Total Clients", value: "24", change: "+3", icon: Users },
    { label: "Active Sessions", value: "18", change: "+2", icon: Calendar },
    { label: "Avg. Progress", value: "78%", change: "+8%", icon: TrendingUp },
    { label: "Satisfaction", value: "4.7", change: "+0.3", icon: BarChart3 },
  ];

  const recentClients = [
    { name: "Alex Johnson", lastSession: "2 days ago", progress: "85%", status: "active" },
    { name: "Sam Davis", lastSession: "1 week ago", progress: "72%", status: "active" },
    { name: "Jordan Smith", lastSession: "3 days ago", progress: "91%", status: "excellent" },
    { name: "Taylor Brown", lastSession: "2 weeks ago", progress: "65%", status: "needs-attention" },
  ];

  const upcomingAppointments = [
    { client: "Alex Johnson", time: "Today, 2:00 PM", type: "Video", duration: "45 min" },
    { client: "Casey Wilson", time: "Tomorrow, 10:00 AM", type: "In-person", duration: "60 min" },
    { client: "Morgan Lee", time: "Friday, 3:30 PM", type: "Video", duration: "45 min" },
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
            Back to Main Dashboard
          </Link>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
              <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                Therapist Dashboard
              </h1>
              <p className="text-sm sm:text-base text-gray-400">
                Professional analytics and client management
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
              <Bell className="h-5 w-5" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all">
              New Session
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["all", "active", "new", "needs-review", "completed"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl capitalize transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {filter.replace("-", " ")}
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
          {/* Recent Clients */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Recent Clients</h3>
              <button className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {recentClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      client.status === 'excellent' ? 'bg-green-500/20 text-green-500' :
                      client.status === 'active' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-orange-500/20 text-orange-500'
                    }`}>
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{client.name}</h4>
                      <p className="text-sm text-gray-400">{client.lastSession}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold">{client.progress}</div>
                      <div className="text-xs text-gray-400">Progress</div>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg">
                      <Eye className="h-4 w-4" />
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
                { icon: Users, label: "Add Client", color: "bg-blue-500/20", href: "/therapist/clients/new" },
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
          {/* Upcoming Appointments */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Upcoming Appointments</h3>
              <button className="text-sm text-blue-500 hover:text-blue-400 flex items-center gap-1">
                Calendar
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{appointment.client}</h4>
                    <span className="text-sm text-blue-500">{appointment.duration}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{appointment.time} • {appointment.type}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-500 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                      <Video className="h-4 w-4 inline mr-2" />
                      Join
                    </button>
                    <button className="flex-1 px-3 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition-all">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Protocols */}
          <div className="glass rounded-2xl p-6 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Protocols</h3>
                <p className="text-gray-400">Crisis management</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all flex items-center justify-between">
                <div>
                  <div className="font-bold">Crisis Intervention</div>
                  <div className="text-sm text-gray-400">Immediate response</div>
                </div>
                <AlertCircle className="h-5 w-5 text-red-400" />
              </button>
              
              <button className="w-full text-left p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all flex items-center justify-between">
                <div>
                  <div className="font-bold">Referral Network</div>
                  <div className="text-sm text-gray-400">Specialist contacts</div>
                </div>
                <Users className="h-5 w-5 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TherapistDashboardPage() {
  return (
    <ProtectedRoute>
      <TherapistDashboardContent />
    </ProtectedRoute>
  );
}
