"use client";

import { motion } from "framer-motion";
import { Lock, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface DoorProps {
  day: number;
  isUnlockable: boolean;
  isOpened: boolean;
  onClick: () => void;
}

export default function Door({ day, isUnlockable, isOpened, onClick }: DoorProps) {
  const handleClick = () => {
    // Allow clicking on opened doors or unlockable doors
    if (!isUnlockable && !isOpened) {
      // Door is locked and not opened - shake animation
      return;
    }
    onClick();
  };

  return (
    <motion.div
      className={cn(
        "relative w-full min-w-[140px] aspect-[3/4] cursor-pointer",
        "flex flex-col items-center justify-center",
        !isUnlockable && "opacity-60 cursor-not-allowed",
        isUnlockable && "hover:scale-105 hover:-translate-y-1"
      )}
      whileHover={isUnlockable ? { scale: 1.05, y: -4 } : {}}
      whileTap={isUnlockable ? { scale: 0.98 } : {}}
      onClick={handleClick}
      animate={
        !isUnlockable
          ? {
              x: [0, -5, 5, -5, 5, 0],
            }
          : {}
      }
      transition={
        !isUnlockable
          ? {
              duration: 0.5,
              repeat: 0,
            }
          : { type: "spring", stiffness: 300, damping: 20 }
      }
    >
      {/* Door Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg shadow-2xl border-4 border-amber-950">
        {/* Door Panel */}
        <div
          className={cn(
            "absolute inset-[3px] rounded-md",
            "bg-gradient-to-br from-rose-200 via-rose-100 to-rose-200",
            "border-2 border-rose-300",
            "flex flex-col items-center justify-center",
            isOpened && "bg-gradient-to-br from-gold-200 to-gold-300 border-gold-400"
          )}
        >
          {!isOpened ? (
            <>
              {/* Door Number Badge */}
              <div className="relative z-20 mb-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-burgundy-600 to-burgundy-700 shadow-xl border-4 border-burgundy-800">
                  <span className="text-3xl font-bold text-white font-serif">{day}</span>
                </div>
              </div>

              {/* Door Handle */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 shadow-lg border-2 border-gold-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold-200"></div>
                </div>
              </div>

              {/* Lock Icon for locked doors */}
              {!isUnlockable && (
                <motion.div
                  className="absolute bottom-6 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white/90 rounded-full p-2 shadow-lg">
                    <Lock className="w-6 h-6 text-gray-600" />
                  </div>
                </motion.div>
              )}

              {/* Decorative Wood Grain Lines */}
              <div className="absolute inset-x-4 top-1/3 h-1 bg-rose-300/30 rounded-full"></div>
              <div className="absolute inset-x-4 top-2/3 h-1 bg-rose-300/30 rounded-full"></div>

              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gold-400/40"></div>
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gold-400/40"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-rose-400/40"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-rose-400/40"></div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex flex-col items-center justify-center z-20"
            >
              <Gift className="w-16 h-16 text-burgundy-700 mb-3" />
              <span className="text-lg font-bold text-burgundy-800 font-serif">Opened!</span>
            </motion.div>
          )}
        </div>

        {/* Door opening effect overlay */}
        {isOpened && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gold-200/50 to-rose-200/50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      {/* Sparkle effect for opened doors */}
      {isOpened && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gold-400 rounded-full z-30"
              style={{
                top: `${15 + (i % 4) * 25}%`,
                left: `${10 + Math.floor(i / 4) * 40}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
