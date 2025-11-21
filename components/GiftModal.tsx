"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Heart } from "lucide-react";
import { Gift } from "@/types";

interface GiftModalProps {
  gift: Gift | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ gift, isOpen, onClose }: GiftModalProps) {
  if (!gift) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative bg-gradient-to-br from-cream-50 to-rose-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-rose-200"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Day Badge */}
                <div className="flex items-center justify-center mb-6">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-burgundy-500 to-burgundy-600 text-white font-bold text-lg shadow-lg">
                    Day {gift.day}
                  </div>
                </div>

                {/* Gift Image */}
                {gift.image && (
                  <motion.div
                    className="mb-6 rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gift.image}
                      alt={gift.title}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </motion.div>
                )}

                {/* Gift Title */}
                <motion.h2
                  className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-700 mb-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {gift.title}
                </motion.h2>

                {/* Gift Description */}
                <motion.p
                  className="text-lg text-gray-700 mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {gift.description}
                </motion.p>

                {/* Personal Message */}
                {gift.message && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-rose-100/50 border border-rose-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-start gap-2">
                      <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 whitespace-pre-line font-script text-lg">
                        {gift.message}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Link Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                  {/* Multiple Links */}
                  {gift.links && gift.links.length > 0 && (
                    <>
                      {gift.links.map((linkItem, index) => (
                        <motion.a
                          key={index}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-burgundy-500 to-burgundy-600 text-white font-semibold hover:from-burgundy-600 hover:to-burgundy-700 transition-all shadow-lg hover:shadow-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{linkItem.label}</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </>
                  )}
                  
                  {/* Single Link (for backward compatibility) */}
                  {!gift.links && gift.link && (
                    <motion.a
                      href={gift.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-burgundy-500 to-burgundy-600 text-white font-semibold hover:from-burgundy-600 hover:to-burgundy-700 transition-all shadow-lg hover:shadow-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Open Gift</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

                {/* Type Badge */}
                {gift.type && (
                  <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-sm font-medium">
                      {gift.type.charAt(0).toUpperCase() + gift.type.slice(1)} Gift
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

