"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Brain, 
  Lock, 
  Mic,
  Save,
  ArrowLeft,
  Calendar,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function JournalPage() {
  const [entry, setEntry] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [aiPrompt, setAiPrompt] = useState("What's been on your mind lately?");

  const prompts = [
    "What are three things you're grateful for today?",
    "Describe a challenge you faced and how you handled it.",
    "What would make tomorrow better than today?",
    "Write about something that made you smile recently.",
    "What are you looking forward to in the coming week?",
  ];

  const handleSave = () => {
    if (entry.trim()) {
      alert("Journal entry saved securely!");
      setEntry("");
      setAiPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    }
  };

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
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
          Private Journal
        </h1>
        <p className="text-gray-400">Your thoughts are encrypted and secure</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Journal Area */}
        <div className="lg:col-span-2">
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-pink-500" />
                <span className="font-bold">Today's Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* AI Prompt */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <p className="font-medium">AI Writing Prompt</p>
                  <p className="text-sm text-gray-300 mt-1">{aiPrompt}</p>
                </div>
                <button
                  onClick={() => setAiPrompt(prompts[Math.floor(Math.random() * prompts.length)])}
                  className="ml-auto p-2 hover:bg-white/10 rounded-lg"
                >
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Text Area */}
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Start writing your thoughts here..."
              className="w-full h-64 bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
            />

            {/* Action Bar */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10">
                  <Mic className="h-5 w-5" />
                  <span className="text-sm">Voice Input</span>
                </button>
                <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEncrypted}
                    onChange={(e) => setIsEncrypted(e.target.checked)}
                    className="rounded border-white/20 bg-black/30"
                  />
                  <Lock className="h-4 w-4" />
                  <span className="text-sm">End-to-End Encrypted</span>
                </label>
              </div>
              <button
                onClick={handleSave}
                disabled={!entry.trim()}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-5 w-5" />
                Save Entry
              </button>
            </div>
          </div>

          {/* Recent Entries */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Recent Entries</h3>
            <div className="space-y-4">
              {[
                { date: "Yesterday", preview: "Had a productive day at work. Feeling accomplished..." },
                { date: "2 days ago", preview: "Struggled with anxiety today but used breathing exercises..." },
                { date: "5 days ago", preview: "Great weekend with family. Feeling connected and happy..." },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.date}</span>
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm">{item.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Journal Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Total Entries</p>
                <p className="text-3xl font-bold">47</p>
              </div>
              <div>
                <p className="text-gray-400">Current Streak</p>
                <p className="text-3xl font-bold">14 days</p>
              </div>
              <div>
                <p className="text-gray-400">Most Frequent Mood</p>
                <p className="text-3xl font-bold text-green-500">Good</p>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-5 w-5 text-purple-500" />
              <h3 className="text-xl font-bold">AI Insights</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300">Your journaling shows consistent gratitude practice</p>
              <p className="text-gray-300">Stress levels decrease by 30% after journaling</p>
              <p className="text-gray-300">Most positive entries are written in the morning</p>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Quick Prompts</h3>
            <div className="space-y-2">
              {prompts.slice(0, 3).map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setAiPrompt(prompt)}
                  className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
