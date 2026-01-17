"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Wind, 
  Target, 
  Music,
  Play,
  Pause,
  Timer,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function CopingPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [breathingPhase, setBreathingPhase] = useState("inhale");
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  const tools = [
    {
      id: "breathing",
      icon: Wind,
      title: "Breathing Exercise",
      description: "4-7-8 breathing technique for relaxation",
      color: "from-blue-500 to-cyan-500",
      duration: "5 min"
    },
    {
      id: "grounding",
      icon: Target,
      title: "Grounding Technique",
      description: "5-4-3-2-1 method for anxiety relief",
      color: "from-green-500 to-emerald-500",
      duration: "3 min"
    },
    {
      id: "meditation",
      icon: Brain,
      title: "Guided Meditation",
      description: "Mindfulness meditation for stress",
      color: "from-purple-500 to-violet-500",
      duration: "10 min"
    },
    {
      id: "sounds",
      icon: Music,
      title: "Calming Sounds",
      description: "Nature sounds and white noise",
      color: "from-pink-500 to-rose-500",
      duration: "Custom"
    }
  ];

  const startTimer = () => {
    setIsActive(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsActive(false);
          setTime(300);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

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
          Coping Tools
        </h1>
        <p className="text-gray-400">Relaxation techniques and stress management tools</p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`glass rounded-2xl p-6 text-left hover:scale-[1.02] transition-all ${
              activeTool === tool.id ? "border-2 border-pink-500" : ""
            }`}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color} w-fit mb-4`}>
              <tool.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{tool.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Timer className="h-4 w-4" />
              {tool.duration}
            </div>
          </button>
        ))}
      </div>

      {/* Active Tool Display */}
      {activeTool && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8"
        >
          {/* Breathing Exercise */}
          {activeTool === "breathing" && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">4-7-8 Breathing Exercise</h2>
              
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  animate={{
                    scale: breathingPhase === "inhale" ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 rounded-full border-4 border-blue-500/30 flex items-center justify-center mb-6"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {breathingPhase === "inhale" ? "4" : breathingPhase === "hold" ? "7" : "8"}
                    </div>
                    <div className="text-lg font-medium capitalize">{breathingPhase}</div>
                  </div>
                </motion.div>
                
                <div className="text-gray-400 max-w-md">
                  Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat 4 times.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <div className="text-center p-4 rounded-xl bg-blue-500/10">
                  <div className="text-2xl font-bold">4s</div>
                  <div className="text-sm text-gray-400">Inhale</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/10">
                  <div className="text-2xl font-bold">7s</div>
                  <div className="text-sm text-gray-400">Hold</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/10">
                  <div className="text-2xl font-bold">8s</div>
                  <div className="text-sm text-gray-400">Exhale</div>
                </div>
              </div>
            </div>
          )}

          {/* Timer for other tools */}
          {(activeTool === "grounding" || activeTool === "meditation") && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                {activeTool === "grounding" ? "5-4-3-2-1 Grounding" : "Guided Meditation"}
              </h2>
              
              <div className="flex flex-col items-center mb-8">
                <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
                <div className="text-gray-400 mb-6">
                  {activeTool === "grounding" 
                    ? "Focus on your senses to stay present"
                    : "Find a comfortable position and focus on your breath"
                  }
                </div>
                
                <div className="flex gap-4">
                  {!isActive ? (
                    <button
                      onClick={startTimer}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2"
                    >
                      <Play className="h-5 w-5" />
                      Start Session
                    </button>
                  ) : (
                    <button
                      onClick={stopTimer}
                      className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all flex items-center gap-2"
                    >
                      <Pause className="h-5 w-5" />
                      Stop Session
                    </button>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-lg font-bold mb-4">Instructions:</h3>
                {activeTool === "grounding" ? (
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Name 5 things you can see around you</li>
                    <li>Name 4 things you can touch or feel</li>
                    <li>Name 3 things you can hear</li>
                    <li>Name 2 things you can smell</li>
                    <li>Name 1 thing you can taste</li>
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Find a comfortable, quiet place to sit or lie down</li>
                    <li>Close your eyes and take a few deep breaths</li>
                    <li>Focus your attention on your breathing</li>
                    <li>When your mind wanders, gently bring it back to your breath</li>
                    <li>Continue for the duration of the timer</li>
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Calming Sounds */}
          {activeTool === "sounds" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Calming Sounds</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Ocean Waves", icon: "🌊" },
                  { name: "Forest Rain", icon: "🌧️" },
                  { name: "Mountain Stream", icon: "💧" },
                  { name: "White Noise", icon: "📻" },
                ].map((sound, index) => (
                  <button
                    key={index}
                    className="glass rounded-xl p-6 text-left hover:scale-[1.02] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{sound.icon}</span>
                      <div>
                        <h4 className="font-bold">{sound.name}</h4>
                        <p className="text-sm text-gray-400">Click to play</p>
                      </div>
                      <Play className="h-5 w-5 ml-auto text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Tips Section */}
      <div className="mt-8 glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Tips for Effective Coping</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent">
            <h4 className="font-bold mb-2">Regular Practice</h4>
            <p className="text-sm text-gray-300">Use these tools daily for best results, even when you're feeling well.</p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent">
            <h4 className="font-bold mb-2">Find What Works</h4>
            <p className="text-sm text-gray-300">Experiment with different techniques to discover what helps you most.</p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-transparent">
            <h4 className="font-bold mb-2">Be Patient</h4>
            <p className="text-sm text-gray-300">It takes time to develop effective coping skills. Be kind to yourself.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
