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
  Filter
} from "lucide-react";
import Link from "next/link";

export default function TherapistDashboardPage() {
  const [activeTab, setActiveTab] = useState("clients");

  const clients = [
    { id: 1, name: "Alex Johnson", status: "active", lastSession: "2 days ago", moodTrend: "improving", nextSession: "Tomorrow, 2 PM" },
    { id: 2, name: "Taylor Smith", status: "active", lastSession: "1 week ago", moodTrend: "stable", nextSession: "Next Monday" },
    { id: 3, name: "Jordan Lee", status: "inactive", lastSession: "3 weeks ago", moodTrend: "declining", nextSession: "Not scheduled" },
    { id: 4, name: "Casey Brown", status: "active", lastSession: "Today", moodTrend: "improving", nextSession: "Next week" },
  ];

  const alerts = [
    { id: 1, client: "Alex Johnson", type: "missed_checkin", priority: "medium", time: "2 hours ago" },
    { id: 2, client: "Jordan Lee", type: "mood_drop", priority: "high", time: "1 day ago" },
    { id: 3, client: "Taylor Smith", type: "journal_entry", priority: "low", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Therapist Dashboard
            </h1>
            <p className="text-gray-400">Manage client care and monitor progress</p>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-400" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <span className="font-bold">DR</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">12</span>
            </div>
            <p className="text-gray-400">Active Clients</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">4</span>
            </div>
            <p className="text-gray-400">Sessions Today</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Bell className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold">3</span>
            </div>
            <p className="text-gray-400">Alerts</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">1</span>
            </div>
            <p className="text-gray-400">High Priority</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {['clients', 'sessions', 'reports'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search clients, notes, or sessions..."
                className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
            </div>
          </div>

          {/* Clients Table */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-xl font-bold">Client Overview</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4">Client</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Mood Trend</th>
                    <th className="text-left p-4">Next Session</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                            <span className="font-bold">{client.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-bold">{client.name}</div>
                            <div className="text-sm text-gray-400">Last: {client.lastSession}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          client.status === 'active' 
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-red-500/20 text-red-500'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-16 rounded-full ${
                            client.moodTrend === 'improving' ? 'bg-green-500' :
                            client.moodTrend === 'stable' ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <span className="capitalize">{client.moodTrend}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">{client.nextSession}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30">
                            <MessageSquare className="h-4 w-4 text-blue-500" />
                          </button>
                          <button className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30">
                            <FileText className="h-4 w-4 text-purple-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500" />
                Alerts & Notifications
              </h3>
              <span className="text-sm text-gray-400">3 new</span>
            </div>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl ${
                    alert.priority === 'high' ? 'bg-red-500/10' :
                    alert.priority === 'medium' ? 'bg-yellow-500/10' : 'bg-blue-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{alert.client}</span>
                    <span className="text-sm text-gray-400">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-300 capitalize">
                    {alert.type.replace('_', ' ')}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="text-sm px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20">
                      View Details
                    </button>
                    <button className="text-sm px-3 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-500">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all text-center">
                <Video className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="font-medium">Start Session</div>
              </button>
              <button className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all text-center">
                <FileText className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <div className="font-medium">Write Note</div>
              </button>
              <button className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all text-center">
                <BarChart3 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="font-medium">View Reports</div>
              </button>
              <button className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 transition-all text-center">
                <Calendar className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <div className="font-medium">Schedule</div>
              </button>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Rhoda Wanjiku</span>
                  <span className="text-sm text-pink-500">Tomorrow, 2 PM</span>
                </div>
                <div className="text-sm text-gray-400">Video Session • 45 mins</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Francis Mbugua</span>
                  <span className="text-sm text-gray-400">Friday, 10 AM</span>
                </div>
                <div className="text-sm text-gray-400">In-person • 60 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
