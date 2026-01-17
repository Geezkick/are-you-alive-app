"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Star, 
  Target, 
  Zap,
  Heart,
  Brain,
  Flower,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function JourneyPage() {
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(5);
  const [streak, setStreak] = useState(14);

  const achievements = [
    { id: 1, name: "First Step", description: "Complete your first check-in", earned: true, icon: Star },
    { id: 2, name: "Consistency King", description: "7-day streak", earned: true, icon: Zap },
    { id: 3, name: "Mindful Master", description: "Complete 10 meditations", earned: true, icon: Brain },
    { id: 4, name: "Journal Journey", description: "Write 20 journal entries", earned: false, icon: Heart },
    { id: 5, name: "Community Hero", description: "Help 5 community members", earned: false, icon: Flower },
    { id: 6, name: "Wellness Warrior", description: "30-day streak", earned: false, icon: Trophy },
  ];

  const dailyQuests = [
    { id: 1, name: "Morning Check-in", xp: 50, completed: true },
    { id: 2, name: "5-min Meditation", xp: 75, completed: true },
    { id: 3, name: "Gratitude Journal", xp: 100, completed: false },
    { id: 4, name: "Breathing Exercise", xp: 50, completed: false },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
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
          Wellness Journey
        </h1>
        <p className="text-gray-400">Level up your mental wellness through engaging challenges</p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <span className="text-2xl font-bold">Level {level}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(xp % 1000) / 10}%` }}
              className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">{xp}/2000 XP to next level</p>
        </div>

        <div className="glass rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="h-6 w-6 text-blue-500" />
            <span className="text-2xl font-bold">{streak} days</span>
          </div>
          <p className="text-gray-400">Current Streak</p>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-6 rounded-full ${i < 5 ? 'bg-green-500' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-2xl font-bold">3/6</span>
          </div>
          <p className="text-gray-400">Achievements Unlocked</p>
          <div className="flex justify-center gap-1 mt-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`h-2 w-4 rounded-full ${achievement.earned ? 'bg-pink-500' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Daily Quests */}
      <div className="glass rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-green-500" />
          Today's Quests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dailyQuests.map((quest) => (
            <div
              key={quest.id}
              className={`p-4 rounded-xl ${quest.completed ? 'bg-green-500/10' : 'bg-white/5'} hover:scale-[1.02] transition-all`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{quest.name}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{quest.xp} XP</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-2 flex-1 rounded-full ${quest.completed ? 'bg-green-500' : 'bg-white/10'}`} />
                {quest.completed ? (
                  <span className="text-sm text-green-500">✓ Completed</span>
                ) : (
                  <button className="text-sm text-pink-500 hover:text-pink-400">
                    Start Quest
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="glass rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl ${achievement.earned ? 'bg-gradient-to-r from-pink-500/10 to-purple-500/10' : 'bg-white/5'} hover:scale-[1.02] transition-all`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-white/10'}`}>
                  <achievement.icon className={`h-5 w-5 ${achievement.earned ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-bold">{achievement.name}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </div>
              {achievement.earned ? (
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20">
                  <Star className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">Unlocked</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
                  <span className="text-xs text-gray-400">Locked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Garden */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Your Wellness Garden</h2>
        <p className="text-gray-400 mb-6">Your garden grows as you complete wellness activities</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Meditation Tree", growth: 80, icon: Brain },
            { name: "Journal Flower", growth: 60, icon: Heart },
            { name: "Community Bush", growth: 40, icon: Flower },
            { name: "Streak Crystal", growth: 90, icon: Zap },
          ].map((plant, index) => (
            <div key={index} className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-emerald-500/20 rounded-full" />
                <div className="absolute inset-4 flex items-center justify-center">
                  <plant.icon className="h-12 w-12 text-green-500" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${plant.growth}%` }}
                  />
                </div>
              </div>
              <h4 className="font-bold mb-1">{plant.name}</h4>
              <p className="text-sm text-gray-400">{plant.growth}% grown</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
