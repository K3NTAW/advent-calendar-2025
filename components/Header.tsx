"use client";

import { motion } from "framer-motion";
import { getCurrentDay, isAdventSeason, isTestMode } from "@/lib/calendar";
import { Sparkles, TestTube } from "lucide-react";

export default function Header() {
  const currentDay = getCurrentDay();
  const inAdvent = isAdventSeason();
  const testMode = isTestMode();

  return (
    <header className="w-full py-8 px-4 text-center">
      {testMode && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm font-medium"
        >
          <TestTube className="w-4 h-4" />
          <span>Test Mode: Simulating December 1st</span>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-burgundy-700 mb-4">
          Advent Calendar 2024
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 font-script">
          A special calendar made with love ❤️
        </p>
        {inAdvent && currentDay > 0 && (
          <p className="text-sm text-gray-500">
            Day {currentDay} of 24
          </p>
        )}
        {!inAdvent && currentDay === 0 && (
          <p className="text-sm text-gray-500">
            Coming soon... December 1st is just around the corner!
          </p>
        )}
      </motion.div>

      {/* Decorative sparkles */}
      <div className="flex justify-center gap-4 mt-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
          </motion.div>
        ))}
      </div>
    </header>
  );
}

