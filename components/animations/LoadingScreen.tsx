"use client";

import { motion } from "framer-motion";
import { Heart, Brain } from "lucide-react";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-bg"
    >
      <div className="relative">
        {/* Animated background circles */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="relative rounded-full p-8"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="h-16 w-16 text-pink-500" />
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Brain className="h-8 w-8 text-purple-500" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <motion.h1
          className="text-4xl font-bold gradient-text"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Are You Alive?
        </motion.h1>
        <p className="mt-2 text-gray-400">Premium Mental Wellness Platform</p>
        <p className="mt-1 text-sm text-gray-500">by Brian Nyarienya</p>
        
        {/* Loading dots */}
        <div className="mt-8 flex justify-center space-x-2">
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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-pink-500/50"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
