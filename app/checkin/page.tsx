"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Zap, 
  Moon, 
  Smile, 
  Frown, 
  Meh,
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckinPage() {
  const router = useRouter();
  const [mood, setMood] = useState<number | null>(null);
  const [stress, setStress] = useState(5);
  const [energy, setEnergy] = useState(7);
  const [sleep, setSleep] = useState(8);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moodOptions = [
    { value: 1, icon: Frown, label: "Very Low", color: "text-red-500" },
    { value: 2, icon: Frown, label: "Low", color: "text-orange-500" },
    { value: 3, icon: Meh, label: "Okay", color: "text-yellow-500" },
    { value: 4, icon: Smile, label: "Good", color: "text-lime-500" },
    { value: 5, icon: Smile, label: "Great", color: "text-green-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to your backend here
    setIsSubmitted(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-6"
          >
            <CheckCircle className="h-12 w-12 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-4">Check-in Complete!</h1>
          <p className="text-gray-400">Your mood has been recorded. Redirecting to dashboard...</p>
        </motion.div>
      </div>
    );
  }

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
          Daily Emotional Check-in
        </h1>
        <p className="text-gray-400">Take a moment to reflect on how you're feeling today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Mood Selection */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-pink-500" />
            <div>
              <h3 className="text-xl font-bold">How are you feeling today?</h3>
              <p className="text-gray-400">Select your current mood</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {moodOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setMood(option.value)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  mood === option.value
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-500"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <option.icon className={`h-8 w-8 ${option.color} mb-2`} />
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="glass rounded-2xl p-6">
          <div className="space-y-8">
            {/* Stress Level */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Stress Level</span>
                </div>
                <span className="text-lg font-bold">{stress}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={stress}
                onChange={(e) => setStress(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-500"
              />
            </div>

            {/* Energy Level */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Energy Level</span>
                </div>
                <span className="text-lg font-bold">{energy}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={energy}
                onChange={(e) => setEnergy(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-yellow-500 [&::-webkit-slider-thumb]:to-amber-500"
              />
            </div>

            {/* Sleep Quality */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">Sleep Quality</span>
                </div>
                <span className="text-lg font-bold">{sleep}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={sleep}
                onChange={(e) => setSleep(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Additional Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How has your day been? Anything specific affecting your mood?"
            className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="flex-1 border-2 border-white/20 text-white py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-center"
          >
            Skip for Now
          </Link>
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
            disabled={mood === null}
          >
            Complete Check-in
          </button>
        </div>
      </form>
    </div>
  );
}
