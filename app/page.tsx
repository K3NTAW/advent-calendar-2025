"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendarGrid from "@/components/CalendarGrid";
import GiftModal from "@/components/GiftModal";
import { getAllGifts } from "@/data/gifts";
import { getGiftByDay } from "@/data/gifts";
import { isDoorUnlockable } from "@/lib/calendar";
import { Gift } from "@/types";
import confetti from "canvas-confetti";

export default function Home() {
  const [openedDoors, setOpenedDoors] = useState<Set<number>>(new Set());
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gifts = getAllGifts();

  // Load opened doors from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("openedDoors");
    if (saved) {
      try {
        const doors = JSON.parse(saved);
        setOpenedDoors(new Set(doors));
      } catch (e) {
        console.error("Error loading opened doors:", e);
      }
    }
  }, []);

  // Save opened doors to localStorage whenever it changes
  useEffect(() => {
    if (openedDoors.size > 0) {
      localStorage.setItem("openedDoors", JSON.stringify(Array.from(openedDoors)));
    }
  }, [openedDoors]);

  const handleDoorClick = (day: number) => {
    if (!isDoorUnlockable(day)) {
      // Door is locked - could add shake animation here
      return;
    }

    const gift = getGiftByDay(day);
    if (gift) {
      setSelectedGift(gift);
      setIsModalOpen(true);

      // Check if this is the first time opening this door
      const isFirstOpen = !openedDoors.has(day);

      // Mark door as opened
      setOpenedDoors((prev) => new Set([...prev, day]));

      // Confetti effect only on first open!
      if (isFirstOpen && typeof window !== "undefined") {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#f59e0b", "#ec4899", "#dc2626", "#fbbf24"],
        });
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedGift(null);
    }, 300);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <CalendarGrid
          openedDoors={openedDoors}
          onDoorClick={handleDoorClick}
          gifts={gifts}
        />
      </motion.div>

      <Footer />

      <GiftModal
        gift={selectedGift}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}

