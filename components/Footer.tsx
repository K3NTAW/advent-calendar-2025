"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 text-center border-t border-rose-200 mt-12">
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <span className="text-sm">Made with</span>
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        <span className="text-sm">for you</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">Advent Calendar 2024</p>
    </footer>
  );
}

