"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Phone, 
  Users, 
  MapPin, 
  AlertTriangle,
  ArrowLeft,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function CrisisPage() {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleSOS = () => {
    setSosActive(true);
    // Simulate countdown
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert("Emergency services and trusted contacts have been notified with your location.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelSOS = () => {
    setSosActive(false);
    setCountdown(5);
  };

  const hotlines = [
    { name: "National Suicide Prevention", number: "988", color: "bg-red-500/20" },
    { name: "Crisis Text Line", number: "741741", color: "bg-blue-500/20" },
    { name: "Veterans Crisis Line", number: "800-273-8255", color: "bg-green-500/20" },
    { name: "Disaster Distress Helpline", number: "800-985-5990", color: "bg-purple-500/20" },
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
          Crisis Support & Safety
        </h1>
        <p className="text-gray-400">Immediate help and resources when you need them most</p>
      </div>

      {/* SOS Button Section */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-red-500/20">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Emergency SOS</h3>
            <p className="text-gray-400">Hold for 5 seconds to trigger emergency response</p>
          </div>
        </div>

        {!sosActive ? (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSOS}
              className="relative w-48 h-48 mx-auto mb-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-red-500/20"
              />
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-bold">SOS</span>
              </div>
            </motion.button>
            <p className="text-gray-300 mb-6">
              This will notify emergency services and your trusted contacts
            </p>
          </div>
        ) : (
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center"
            >
              <span className="text-4xl font-bold">{countdown}</span>
            </motion.div>
            <p className="text-xl font-bold text-red-400 mb-4">
              Emergency alert will trigger in {countdown} seconds
            </p>
            <button
              onClick={cancelSOS}
              className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Cancel Emergency
            </button>
          </div>
        )}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
          <Phone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Call Hotline</h3>
          <p className="text-gray-400">Speak with a trained professional</p>
        </button>

        <button className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
          <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Trusted Contacts</h3>
          <p className="text-gray-400">Alert your support network</p>
        </button>

        <button className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
          <MapPin className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Share Location</h3>
          <p className="text-gray-400">Share your location with emergency contacts</p>
        </button>
      </div>

      {/* Hotlines Section */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">24/7 Crisis Hotlines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotlines.map((hotline, index) => (
            <div
              key={index}
              className={`${hotline.color} rounded-xl p-4 hover:scale-[1.02] transition-all cursor-pointer`}
              onClick={() => alert(`Calling ${hotline.name}: ${hotline.number}`)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{hotline.name}</h4>
                  <p className="text-gray-300">{hotline.number}</p>
                </div>
                <Phone className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Message */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <Heart className="h-4 w-4 inline mr-2" />
        You are not alone. Help is available 24/7.
      </div>
    </div>
  );
}
