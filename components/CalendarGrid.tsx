"use client";

import Door from "./Door";
import { isDoorUnlockable, formatDateForDay } from "@/lib/calendar";
import { Gift } from "@/types";

interface CalendarGridProps {
  openedDoors: Set<number>;
  onDoorClick: (day: number) => void;
  gifts: Gift[];
}

export default function CalendarGrid({
  openedDoors,
  onDoorClick,
  gifts,
}: CalendarGridProps) {
  const doors = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
        {doors.map((day) => {
          const isUnlockable = isDoorUnlockable(day);
          const isOpened = openedDoors.has(day);
          const gift = gifts.find((g) => g.day === day);

          return (
            <div key={day} className="flex flex-col items-center">
              <Door
                day={day}
                isUnlockable={isUnlockable}
                isOpened={isOpened}
                onClick={() => onDoorClick(day)}
              />
              {!isUnlockable && (
                <p className="mt-2 text-xs text-gray-500 text-center">
                  {formatDateForDay(day)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

