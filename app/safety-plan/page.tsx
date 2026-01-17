"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  AlertTriangle, 
  Users,
  Phone,
  MapPin,
  Heart,
  Download,
  Share2,
  ArrowLeft,
  Plus,
  Check
} from "lucide-react";
import Link from "next/link";

export default function SafetyPlanPage() {
  const [plan, setPlan] = useState({
    warningSigns: ["Increased irritability", "Social withdrawal", "Sleep disturbance"],
    copingStrategies: ["5-4-3-2-1 grounding", "Call a friend", "Go for a walk"],
    socialContacts: [
      { name: "Sarah (Best Friend)", phone: "+1-555-0123", tier: 1 },
      { name: "Dr. Martinez", phone: "+1-555-4567", tier: 2 },
    ],
    professionalResources: [
      { name: "National Suicide Prevention", phone: "988", type: "hotline" },
      { name: "Local Crisis Center", phone: "+1-555-7890", type: "center" },
    ],
    safeSpaces: ["My bedroom", "Local park", "Community center"],
  });

  const sections = [
    {
      title: "Warning Signs",
      icon: AlertTriangle,
      description: "Recognize when you might need to use this plan",
      color: "bg-red-500/20",
      items: plan.warningSigns,
    },
    {
      title: "Coping Strategies",
      icon: Shield,
      description: "Things I can do on my own to feel better",
      color: "bg-blue-500/20",
      items: plan.copingStrategies,
    },
    {
      title: "Social Contacts",
      icon: Users,
      description: "People I can reach out to for support",
      color: "bg-green-500/20",
      items: plan.socialContacts.map(c => `${c.name} (Tier ${c.tier})`),
    },
    {
      title: "Professional Help",
      icon: Phone,
      description: "Professional resources available",
      color: "bg-purple-500/20",
      items: plan.professionalResources.map(r => `${r.name}: ${r.phone}`),
    },
    {
      title: "Safe Environments",
      icon: MapPin,
      description: "Places where I feel safe and calm",
      color: "bg-yellow-500/20",
      items: plan.safeSpaces,
    },
  ];

  const addItem = (section: string) => {
    const newItem = prompt(`Add new item to ${section}:`);
    if (newItem) {
      // In a real app, you would update state properly
      alert(`Added to ${section}: ${newItem}`);
    }
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
          Safety Plan Builder
        </h1>
        <p className="text-gray-400">Create a personalized plan for difficult moments</p>
      </div>

      {/* Plan Overview */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Shield className="h-5 w-5 text-pink-500" />
              Your Personalized Safety Plan
            </h2>
            <p className="text-gray-400">Last updated: Today</p>
          </div>
          <div className="flex gap-3">
            <button className="border-2 border-pink-500/30 text-pink-500 px-4 py-2 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </button>
          </div>
        </div>

        <div className="text-center mb-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
          <Heart className="h-8 w-8 text-pink-500 mx-auto mb-3" />
          <p className="text-lg">
            This plan is designed to help you navigate difficult moments. Keep it accessible.
          </p>
        </div>
      </div>

      {/* Plan Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${section.color}`}>
                <section.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.description}</p>
              </div>
            </div>

            <ul className="space-y-3 mb-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 p-3 rounded-xl bg-white/5">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => addItem(section.title)}
              className="w-full border-2 border-white/20 text-white py-2 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add {section.title}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Emergency Quick Access */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Emergency Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all text-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="font-bold">Immediate Crisis</div>
            <div className="text-sm text-gray-400">Call 911 or go to nearest ER</div>
          </button>
          <button className="p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all text-center">
            <Phone className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="font-bold">Crisis Hotline</div>
            <div className="text-sm text-gray-400">National: 988</div>
          </button>
          <button className="p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-all text-center">
            <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="font-bold">Trusted Contact</div>
            <div className="text-sm text-gray-400">Alert your support network</div>
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">How to Use This Plan</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>Review this plan when you notice warning signs</li>
          <li>Start with coping strategies you can do independently</li>
          <li>Reach out to social contacts if needed</li>
          <li>Use professional resources for additional support</li>
          <li>Go to a safe environment if you feel unsafe</li>
          <li>In immediate danger, use emergency services</li>
        </ol>
      </div>
    </div>
  );
}
