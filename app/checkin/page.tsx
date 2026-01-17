"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Shield,
  Zap,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Thermometer,
  Moon,
  Sun,
  Coffee,
  Users,
  BookOpen,
  Smile,
  Frown,
  Meh,
  ArrowRight,
  ChevronRight,
  Target,
  TrendingUp,
  Bell,
  Save,
  ArrowLeft,
  Activity,
  Droplets,
  Utensils,
  Dumbbell,
  Music,
  Feather,
  X,
  Check
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function DailyCheckinContent() {
  const { user } = useAuth();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [energyLevel, setEnergyLevel] = useState(5);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState(5);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [dailyGoals, setDailyGoals] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastCheckin, setLastCheckin] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [hydration, setHydration] = useState(5);
  const [medicationTaken, setMedicationTaken] = useState(false);

  useEffect(() => {
    // Load last check-in data
    const today = new Date().toDateString();
    const lastCheckinDate = localStorage.getItem("lastCheckinDate");
    const savedMood = localStorage.getItem(`mood_${today}`);
    
    if (lastCheckinDate) {
      setLastCheckin(lastCheckinDate);
    }
    
    if (savedMood) {
      setSelectedMood(parseInt(savedMood));
    }
    
    // Load other saved data
    const savedSymptoms = localStorage.getItem("symptoms");
    if (savedSymptoms) {
      setSelectedSymptoms(JSON.parse(savedSymptoms));
    }

    const savedGoals = localStorage.getItem("dailyGoals");
    if (savedGoals) {
      setDailyGoals(JSON.parse(savedGoals));
    }
  }, []);

  const moodOptions = [
    { icon: Smile, label: "Excellent", color: "text-green-500", bgColor: "bg-green-500/20", value: 5, emoji: "😊" },
    { icon: Smile, label: "Good", color: "text-lime-500", bgColor: "bg-lime-500/20", value: 4, emoji: "🙂" },
    { icon: Meh, label: "Okay", color: "text-yellow-500", bgColor: "bg-yellow-500/20", value: 3, emoji: "😐" },
    { icon: Frown, label: "Low", color: "text-orange-500", bgColor: "bg-orange-500/20", value: 2, emoji: "😔" },
    { icon: Frown, label: "Poor", color: "text-red-500", bgColor: "bg-red-500/20", value: 1, emoji: "😢" },
  ];

  const symptomOptions = [
    { id: "anxiety", label: "Anxiety", icon: Brain, color: "bg-purple-500/20" },
    { id: "depression", label: "Depression", icon: Heart, color: "bg-pink-500/20" },
    { id: "fatigue", label: "Fatigue", icon: Zap, color: "bg-yellow-500/20" },
    { id: "insomnia", label: "Insomnia", icon: Moon, color: "bg-blue-500/20" },
    { id: "stress", label: "Stress", icon: Thermometer, color: "bg-orange-500/20" },
    { id: "irritability", label: "Irritability", icon: AlertCircle, color: "bg-red-500/20" },
    { id: "focus", label: "Focus Issues", icon: Target, color: "bg-green-500/20" },
    { id: "appetite", label: "Appetite Changes", icon: Coffee, color: "bg-amber-500/20" },
  ];

  const goalOptions = [
    { id: "meditation", label: "10-min Meditation", icon: Brain, color: "from-purple-500/20 to-pink-500/20" },
    { id: "exercise", label: "30-min Exercise", icon: Dumbbell, color: "from-blue-500/20 to-cyan-500/20" },
    { id: "social", label: "Social Connection", icon: Users, color: "from-green-500/20 to-emerald-500/20" },
    { id: "journal", label: "Journal Entry", icon: BookOpen, color: "from-yellow-500/20 to-amber-500/20" },
    { id: "sleep", label: "8 Hours Sleep", icon: Moon, color: "from-indigo-500/20 to-violet-500/20" },
    { id: "nutrition", label: "Healthy Eating", icon: Utensils, color: "from-red-500/20 to-rose-500/20" },
    { id: "hydration", label: "Drink 8 glasses", icon: Droplets, color: "from-sky-500/20 to-blue-500/20" },
    { id: "mindfulness", label: "Mindfulness Break", icon: Feather, color: "from-teal-500/20 to-emerald-500/20" },
  ];

  const copingTools = [
    { id: "breathing", label: "Deep Breathing", duration: "5 min", icon: Activity },
    { id: "music", label: "Calming Music", duration: "10 min", icon: Music },
    { id: "walk", label: "Short Walk", duration: "15 min", icon: ArrowRight },
    { id: "stretch", label: "Light Stretch", duration: "5 min", icon: Zap },
  ];

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleGoalToggle = (goalId: string) => {
    setDailyGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Save data to localStorage
    const today = new Date().toDateString();
    const checkinData = {
      date: new Date().toISOString(),
      mood: selectedMood,
      energy: energyLevel,
      sleep: sleepHours,
      stress: stressLevel,
      symptoms: selectedSymptoms,
      goals: dailyGoals,
      notes: notes,
      hydration: hydration,
      medicationTaken: medicationTaken,
      timestamp: Date.now()
    };
    
    localStorage.setItem(`checkin_${today}`, JSON.stringify(checkinData));
    localStorage.setItem("lastCheckinDate", new Date().toISOString());
    
    if (selectedMood) {
      localStorage.setItem(`mood_${today}`, selectedMood.toString());
    }
    
    localStorage.setItem("symptoms", JSON.stringify(selectedSymptoms));
    localStorage.setItem("dailyGoals", JSON.stringify(dailyGoals));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    
    // Show success message
    alert("✅ Daily check-in submitted successfully! Your wellness insights have been updated.");
    
    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  const getFirstName = () => {
    if (!user?.name) return "User";
    const firstName = user.name.split(' ')[0];
    return firstName || "User";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getMoodLabel = () => {
    if (!selectedMood) return "Not selected";
    const mood = moodOptions.find(m => m.value === selectedMood);
    return mood?.label || "Not selected";
  };

  const steps = [
    { number: 1, title: "Mood & Energy", icon: Heart },
    { number: 2, title: "Symptoms", icon: Brain },
    { number: 3, title: "Daily Goals", icon: Target },
    { number: 4, title: "Wellness Notes", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-lg hover:bg-white/10 transition-all"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              Daily Check-in
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              How are you feeling today, {getFirstName()}?
            </p>
          </div>
        </div>

        {/* Last Check-in Info */}
        {lastCheckin && (
          <div className="glass rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Last check-in completed</p>
                <p className="text-sm text-gray-400">{formatDate(lastCheckin)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Your Check-in Progress</h3>
            <span className="text-sm text-gray-400">Step {currentStep} of 4</span>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className={`h-2 rounded-full mb-2 ${
                  step.number <= currentStep 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                    : 'bg-white/10'
                }`} />
                <div className={`flex flex-col items-center gap-1 ${
                  step.number === currentStep ? 'text-pink-500' : 'text-gray-400'
                }`}>
                  <step.icon className="h-4 w-4" />
                  <span className="text-xs">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column - Check-in Form */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Step 1: Mood & Energy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <Heart className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 1: Mood & Energy Levels</h3>
                <p className="text-gray-400">How are you feeling right now?</p>
              </div>
            </div>

            {/* Mood Selection */}
            <div className="mb-8">
              <h4 className="font-bold mb-4">Select Your Mood</h4>
              <div className="grid grid-cols-5 gap-2">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => {
                      setSelectedMood(mood.value);
                      if (currentStep === 1) setCurrentStep(2);
                    }}
                    className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all active:scale-95 ${
                      selectedMood === mood.value
                        ? `${mood.bgColor} border-2 ${mood.color.replace('text', 'border')}/30`
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl mb-2">{mood.emoji}</span>
                    <mood.icon className={`h-5 w-5 ${mood.color} mb-1`} />
                    <span className="text-xs sm:text-sm">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Energy & Sleep Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Energy Level</h4>
                  <span className="text-sm text-gray-400">{energyLevel}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={energyLevel}
                  onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-pink-500 [&::-webkit-slider-thumb]:to-purple-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Sleep Last Night</h4>
                  <span className="text-sm text-gray-400">{sleepHours} hours</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Stress Level</h4>
                  <span className="text-sm text-gray-400">{stressLevel}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={stressLevel}
                  onChange={(e) => setStressLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-orange-500 [&::-webkit-slider-thumb]:to-red-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Step 2: Symptoms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Brain className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 2: Current Symptoms</h3>
                <p className="text-gray-400">Select any symptoms you're experiencing</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {symptomOptions.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => {
                    handleSymptomToggle(symptom.id);
                    if (currentStep === 2 && selectedSymptoms.length === 0) setCurrentStep(3);
                  }}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all active:scale-95 ${
                    selectedSymptoms.includes(symptom.id)
                      ? `${symptom.color} border-2 border-white/30`
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <symptom.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm text-center">{symptom.label}</span>
                  {selectedSymptoms.includes(symptom.id) && (
                    <Check className="h-4 w-4 absolute top-2 right-2 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Step 3: Daily Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <Target className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 3: Daily Wellness Goals</h3>
                <p className="text-gray-400">Set your intentions for today</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {goalOptions.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => {
                    handleGoalToggle(goal.id);
                    if (currentStep === 3 && dailyGoals.length === 0) setCurrentStep(4);
                  }}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all active:scale-95 bg-gradient-to-r ${goal.color} ${
                    dailyGoals.includes(goal.id) ? 'border-2 border-white/30' : ''
                  }`}
                >
                  <goal.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm text-center">{goal.label}</span>
                  {dailyGoals.includes(goal.id) && (
                    <Check className="h-4 w-4 absolute top-2 right-2 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Step 4: Notes & Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 4: Additional Notes</h3>
                <p className="text-gray-400">Anything else you'd like to share?</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-medium mb-3">Today's Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write about your thoughts, feelings, or anything that's on your mind..."
                  className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-3">Hydration Level</label>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={hydration}
                      onChange={(e) => setHydration(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-500"
                    />
                    <span className="text-sm text-gray-400">{hydration}/10</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-3">Medication</label>
                  <button
                    onClick={() => setMedicationTaken(!medicationTaken)}
                    className={`w-full p-4 rounded-xl flex items-center justify-center gap-3 transition-all ${
                      medicationTaken
                        ? 'bg-green-500/20 border-2 border-green-500/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`h-6 w-6 rounded flex items-center justify-center ${
                      medicationTaken ? 'bg-green-500' : 'border-2 border-white/30'
                    }`}>
                      {medicationTaken && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <span>Medication Taken Today</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <div className="sticky bottom-6 z-10">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !selectedMood}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Complete Daily Check-in
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6 md:space-y-8">
          {/* Quick Coping Tools */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20">
                <Zap className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Quick Coping Tools</h3>
                <p className="text-gray-400">Need immediate support?</p>
              </div>
            </div>

            <div className="space-y-3">
              {copingTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => alert(`Starting: ${tool.label}`)}
                  className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all active:scale-95 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <tool.icon className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium">{tool.label}</div>
                      <div className="text-sm text-gray-400">{tool.duration}</div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Today's Summary */}
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6">Today's Summary</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current Mood</span>
                <span className="font-bold text-pink-500">{getMoodLabel()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Energy Level</span>
                <span className="font-bold">{energyLevel}/10</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Sleep Hours</span>
                <span className="font-bold">{sleepHours}h</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Symptoms Logged</span>
                <span className="font-bold">{selectedSymptoms.length}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Goals Set</span>
                <span className="font-bold">{dailyGoals.length}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 text-center">
                <Calendar className="h-4 w-4 inline mr-2" />
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="glass rounded-2xl p-4 sm:p-6 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Support</h3>
                <p className="text-gray-400">Immediate help available</p>
              </div>
            </div>
            
            <Link
              href="/crisis"
              className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all active:scale-95 flex items-center justify-center gap-2 mb-3"
            >
              <Shield className="h-5 w-5" />
              Crisis Support
            </Link>
            
            <p className="text-xs text-gray-400 text-center">
              If you're in immediate danger, call emergency services
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Spacer for sticky button */}
      <div className="h-20 lg:h-0"></div>
    </div>
  );
}

export default function DailyCheckinPage() {
  return (
    <ProtectedRoute>
      <DailyCheckinContent />
    </ProtectedRoute>
  );
}
