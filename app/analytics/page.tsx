"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  Calendar,
  Download,
  Filter,
  ArrowLeft,
  Brain,
  Moon,
  Zap,
  Heart
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const moodData = [
    { date: 'Mon', mood: 7 },
    { date: 'Tue', mood: 8 },
    { date: 'Wed', mood: 6 },
    { date: 'Thu', mood: 9 },
    { date: 'Fri', mood: 8 },
    { date: 'Sat', mood: 9 },
    { date: 'Sun', mood: 8 },
  ];

  const sleepData = [
    { day: 'Mon', hours: 7.5 },
    { day: 'Tue', hours: 8.0 },
    { day: 'Wed', hours: 6.5 },
    { day: 'Thu', hours: 7.0 },
    { day: 'Fri', hours: 8.5 },
    { day: 'Sat', hours: 9.0 },
    { day: 'Sun', hours: 8.0 },
  ];

  const correlationData = [
    { name: 'Mood & Sleep', value: 0.85 },
    { name: 'Mood & Exercise', value: 0.72 },
    { name: 'Stress & Sleep', value: -0.68 },
    { name: 'Energy & Meditation', value: 0.63 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
          Advanced Analytics
        </h1>
        <p className="text-gray-400">Deep insights into your wellness patterns and trends</p>
      </div>

      {/* Time Range Selector */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-pink-500" />
            <h2 className="text-xl font-bold">Time Range</h2>
          </div>
          <div className="flex gap-2">
            {['week', 'month', 'quarter', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  timeRange === range
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <Heart className="h-8 w-8 text-pink-500" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold">7.8</p>
            <p className="text-gray-400">Average Mood</p>
            <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <Moon className="h-8 w-8 text-blue-500" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold">7.9</p>
            <p className="text-gray-400">Avg Sleep Score</p>
            <p className="text-sm text-green-500 mt-2">↑ 8% from last month</p>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <Brain className="h-8 w-8 text-purple-500" />
              <TrendingUp className="h-5 w-5 text-red-500 rotate-180" />
            </div>
            <p className="text-3xl font-bold">4.2</p>
            <p className="text-gray-400">Avg Stress Level</p>
            <p className="text-sm text-red-500 mt-2">↓ 15% from last month</p>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <Zap className="h-8 w-8 text-yellow-500" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold">92%</p>
            <p className="text-gray-400">Consistency Score</p>
            <p className="text-sm text-green-500 mt-2">↑ 5% from last month</p>
          </div>
        </div>
      </div>

      {/* Charts Grid - Only render on client side */}
      {isClient && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Mood Chart */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-pink-500" />
                  Weekly Mood Trends
                </h3>
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height="100%" minHeight={256}>
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" domain={[0, 10]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#ec4899"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sleep Chart */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Moon className="h-5 w-5 text-blue-500" />
                  Sleep Patterns
                </h3>
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height="100%" minHeight={256}>
                  <BarChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Correlation Analysis */}
          <div className="glass rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-6">Correlation Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-400 mb-4">How different factors correlate with your mood</p>
                <div className="space-y-4">
                  {correlationData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{item.name}</span>
                        <span className={`${item.value > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {item.value > 0 ? '+' : ''}{item.value}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.value > 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'
                          }`}
                          style={{ width: `${Math.abs(item.value) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height="100%" minHeight={256}>
                  <PieChart>
                    <Pie
                      data={correlationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {correlationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Insights */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">AI-Generated Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent">
            <h4 className="font-bold mb-2">Optimal Sleep Window</h4>
            <p className="text-sm text-gray-300">
              Your mood peaks when you sleep 7.5-8 hours. Try maintaining this consistently.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent">
            <h4 className="font-bold mb-2">Stress Pattern</h4>
            <p className="text-sm text-gray-300">
              Stress increases mid-week. Consider scheduling breathing exercises for Wednesdays.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent">
            <h4 className="font-bold mb-2">Positive Correlation</h4>
            <p className="text-sm text-gray-300">
              Morning journaling shows strong correlation with afternoon energy levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
