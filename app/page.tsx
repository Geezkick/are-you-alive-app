"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Shield, Zap, Sparkles, Users, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-center"
        >
          <Heart className="h-16 w-16 text-pink-500 mx-auto" />
          <h1 className="text-4xl font-bold mt-4 gradient-text">Are You Alive?</h1>
          <p className="text-gray-400 mt-2">Premium Mental Wellness Platform</p>
          <div className="mt-6 flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-pink-500"
                animate={{
                  y: ["0%", "-50%", "0%"],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg px-4 md:px-8 py-8 lg:py-0 lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium">PREMIUM MENTAL WELLNESS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text block">Are You Alive?</span>
          <span className="text-xl md:text-2xl lg:text-3xl text-gray-300 block mt-4">
            Your premium mental wellness companion
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl"
        >
          Real-time mood tracking, AI-powered insights, emergency support, and everything 
          you need for your mental wellness journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link 
            href="/dashboard"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/premium"
            className="border-2 border-pink-500/30 text-pink-500 px-8 py-4 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all flex items-center justify-center gap-2 text-lg"
          >
            <Sparkles className="h-5 w-5" />
            Explore Premium
          </Link>
        </motion.div>

        {/* Features Grid - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { 
              icon: Heart, 
              label: "Emotional Tracking", 
              description: "Daily mood check-ins and pattern analysis",
              color: "text-pink-500",
              href: "/checkin"
            },
            { 
              icon: Shield, 
              label: "Crisis Protection", 
              description: "24/7 emergency support and safety alerts",
              color: "text-blue-500",
              href: "/crisis"
            },
            { 
              icon: Brain, 
              label: "AI Insights", 
              description: "Personalized recommendations and patterns",
              color: "text-purple-500",
              href: "/journal"
            },
            { 
              icon: Users, 
              label: "Community Support", 
              description: "Safe spaces and peer connections",
              color: "text-green-500",
              href: "/community"
            },
          ].map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300 hover:border-white/30"
            >
              <div className={`${feature.color} mb-4 flex justify-center`}>
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.label}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "256-bit", label: "Encryption" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
