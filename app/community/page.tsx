"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Heart,
  Shield,
  Calendar,
  TrendingUp,
  Star,
  Filter,
  Search,
  Plus,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  Lock,
  Globe,
  Video,
  BookOpen,
  Coffee
} from "lucide-react";

// Mock data for community posts
const communityPosts = [
  {
    id: 1,
    user: {
      name: "Alex Chen",
      role: "Wellness Advocate",
      avatar: "AC",
      color: "from-blue-500 to-cyan-500"
    },
    title: "My 30-day mindfulness journey",
    content: "Just completed 30 days of daily meditation! The difference in my anxiety levels is incredible. Starting with just 5 minutes a day made it sustainable.",
    category: "Success Stories",
    tags: ["meditation", "anxiety", "mindfulness"],
    likes: 142,
    comments: 38,
    shares: 12,
    views: 1250,
    time: "2 hours ago",
    isPinned: true
  },
  {
    id: 2,
    user: {
      name: "Dr. Maya Rodriguez",
      role: "Clinical Therapist",
      avatar: "MR",
      color: "from-purple-500 to-pink-500"
    },
    title: "Coping with holiday stress",
    content: "The holiday season can be overwhelming. Remember: it's okay to set boundaries, take breaks, and prioritize your mental health. You're not alone in this.",
    category: "Professional Advice",
    tags: ["stress", "boundaries", "self-care"],
    likes: 89,
    comments: 24,
    shares: 8,
    views: 840,
    time: "5 hours ago",
    isPinned: true
  },
  {
    id: 3,
    user: {
      name: "Jamie Taylor",
      role: "Community Member",
      avatar: "JT",
      color: "from-green-500 to-emerald-500"
    },
    title: "Looking for accountability partner",
    content: "Starting a daily journaling practice. Would love to connect with someone who's also working on consistency. We can check in daily and share progress!",
    category: "Connections",
    tags: ["accountability", "journaling", "support"],
    likes: 56,
    comments: 18,
    shares: 3,
    views: 420,
    time: "1 day ago"
  },
  {
    id: 4,
    user: {
      name: "Sam Rivera",
      role: "Peer Support",
      avatar: "SR",
      color: "from-orange-500 to-red-500"
    },
    title: "Sleep hygiene tips that actually work",
    content: "After struggling with insomnia for years, I've compiled what actually helped: blue light blockers, consistent bedtime, and this specific breathing exercise...",
    category: "Tips & Tricks",
    tags: ["sleep", "insomnia", "routine"],
    likes: 203,
    comments: 47,
    shares: 21,
    views: 1890,
    time: "2 days ago"
  }
];

// Support groups data
const supportGroups = [
  {
    id: 1,
    name: "Anxiety Support Circle",
    description: "Safe space for discussing anxiety management",
    members: 1247,
    active: "245 online",
    icon: Heart,
    color: "bg-pink-500/20 border-pink-500/30",
    iconColor: "text-pink-500"
  },
  {
    id: 2,
    name: "Depression Recovery",
    description: "Peer support for depression journey",
    members: 892,
    active: "187 online",
    icon: Users,
    color: "bg-blue-500/20 border-blue-500/30",
    iconColor: "text-blue-500"
  },
  {
    id: 3,
    name: "Mindfulness & Meditation",
    description: "Daily practice and guidance",
    members: 1563,
    active: "312 online",
    icon: BookOpen,
    color: "bg-purple-500/20 border-purple-500/30",
    iconColor: "text-purple-500"
  },
  {
    id: 4,
    name: "Workplace Wellness",
    description: "Managing stress in professional life",
    members: 745,
    active: "128 online",
    icon: TrendingUp,
    color: "bg-green-500/20 border-green-500/30",
    iconColor: "text-green-500"
  }
];

// Upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Mindful Monday Meditation",
    description: "Guided group meditation session",
    date: "Today, 7:00 PM EST",
    host: "Dr. Sarah Johnson",
    type: "virtual",
    attendees: 142,
    icon: Calendar
  },
  {
    id: 2,
    title: "Anxiety Management Workshop",
    description: "Practical tools for daily anxiety",
    date: "Tomorrow, 6:30 PM EST",
    host: "Wellness Center Team",
    type: "virtual",
    attendees: 89,
    icon: Video
  },
  {
    id: 3,
    title: "Coffee & Conversation",
    description: "Informal peer support chat",
    date: "Friday, 3:00 PM EST",
    host: "Community Leaders",
    type: "virtual",
    attendees: 56,
    icon: Coffee
  }
];

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Posts", icon: Globe },
    { id: "success", label: "Success Stories", icon: Star },
    { id: "advice", label: "Professional Advice", icon: Shield },
    { id: "support", label: "Peer Support", icon: Heart },
    { id: "tips", label: "Tips & Tricks", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
            <Users className="h-8 w-8 text-pink-500" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Community</h1>
            <p className="text-gray-400 mt-2">
              A safe space for support, connection, and shared healing
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Members", value: "5,247", icon: Users, color: "text-pink-500" },
            { label: "Support Groups", value: "24", icon: Heart, color: "text-blue-500" },
            { label: "Daily Posts", value: "327", icon: MessageSquare, color: "text-purple-500" },
            { label: "Online Now", value: "892", icon: Globe, color: "text-green-500" }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.color} bg-opacity-20`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Feed */}
        <div className="lg:col-span-2">
          {/* Create Post & Search */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search community posts, topics, or members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                  />
                </div>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2">
                <Plus className="h-5 w-5" />
                New Post
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Community Posts */}
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl overflow-hidden"
              >
                {post.isPinned && (
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-b border-pink-500/30 px-6 py-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Pinned Post</span>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${post.user.color} flex items-center justify-center font-bold`}>
                        {post.user.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{post.user.name}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                            {post.user.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 text-sm hover:bg-white/10 cursor-pointer transition-all"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Stats & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-6 text-gray-400">
                      <button className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-sm text-pink-500 hover:text-pink-400 font-medium">
                        Read More
                      </button>
                      <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Support Groups */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Support Groups</h2>
              <button className="text-sm text-pink-500 hover:text-pink-400">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {supportGroups.map((group) => (
                <div
                  key={group.id}
                  className={`p-4 rounded-xl border ${group.color} hover:scale-[1.02] transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${group.iconColor} bg-opacity-20`}>
                      <group.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{group.name}</h3>
                      <p className="text-sm text-gray-400">{group.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{group.members} members</span>
                    <span className="text-green-500">{group.active}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Upcoming Events</h2>
              <button className="text-sm text-pink-500 hover:text-pink-400">
                View Calendar
              </button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                      <event.icon className="h-5 w-5 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{event.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{event.date}</span>
                        <span className="text-blue-500">{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <Shield className="h-5 w-5 text-green-500" />
              </div>
              <h2 className="text-xl font-bold">Community Guidelines</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Be kind and compassionate",
                "Respect privacy and anonymity",
                "No medical advice - only share experiences",
                "Use trigger warnings when needed",
                "Report any concerning behavior",
                "Respect different perspectives"
              ].map((rule, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">{rule}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 py-3 rounded-xl border border-white/10 hover:border-pink-500/30 hover:bg-pink-500/10 transition-all">
              <Lock className="h-4 w-4 inline mr-2" />
              Read Safety Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
