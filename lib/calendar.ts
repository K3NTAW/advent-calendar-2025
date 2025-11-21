import { startOfDay, isBefore, isAfter, addDays, differenceInDays } from "date-fns";

/**
 * Calendar configuration
 * Set the start date of your advent calendar (typically December 1st)
 */
const ADVENT_START_MONTH = 11; // December (0-indexed, so 11 = December)
const ADVENT_START_DAY = 1;

/**
 * TEST MODE: Set to true to simulate a specific date
 * Change this to false when you're done testing
 * 
 * To test different days, change TEST_DATE:
 * - December 1st: new Date(2025, 11, 1)  (day 1)
 * - December 2nd: new Date(2025, 11, 2)  (day 2)
 * - December 5th: new Date(2025, 11, 5)  (day 5)
 * - December 24th: new Date(2025, 11, 24) (day 24)
 */
const TEST_MODE = false;
const TEST_DATE = new Date(2025, 11, 2); // December 2, 2025

/**
 * Check if test mode is enabled (for UI indicators)
 */
export function isTestMode(): boolean {
  return TEST_MODE;
}

/**
 * Get the current date at midnight (start of day)
 * Uses test date if TEST_MODE is enabled
 */
export function getCurrentDate(): Date {
  if (TEST_MODE) {
    return startOfDay(TEST_DATE);
  }
  return startOfDay(new Date());
}

/**
 * Get the start date of the advent calendar for the current year
 * Uses test date year if TEST_MODE is enabled
 */
export function getAdventStartDate(): Date {
  const referenceDate = TEST_MODE ? TEST_DATE : new Date();
  const year = referenceDate.getFullYear();
  return startOfDay(new Date(year, ADVENT_START_MONTH, ADVENT_START_DAY));
}

/**
 * Get the current day number (1-24) based on the advent calendar
 * Returns 0 if before December 1st, or day number if on/after
 */
export function getCurrentDay(): number {
  const today = getCurrentDate();
  const adventStart = getAdventStartDate();
  
  // If we're before December 1st, return 0
  if (isBefore(today, adventStart)) {
    return 0;
  }
  
  // Calculate days since advent started
  const daysSinceStart = differenceInDays(today, adventStart) + 1;
  
  // Return the day number (1-24), or 24 if we're past Christmas
  return Math.min(daysSinceStart, 24);
}

/**
 * Check if a door (day) is unlockable
 * A door is unlockable if it's the current day or a past day
 */
export function isDoorUnlockable(dayNumber: number): boolean {
  const currentDay = getCurrentDay();
  
  // Day 0 means we're before December 1st
  if (currentDay === 0) {
    return false;
  }
  
  // Door is unlockable if it's today or a past day
  return dayNumber <= currentDay;
}

/**
 * Get the date for a specific day of advent
 */
export function getDateForDay(dayNumber: number): Date {
  const adventStart = getAdventStartDate();
  return addDays(adventStart, dayNumber - 1);
}

/**
 * Format a date for display
 */
export function formatDateForDay(dayNumber: number): string {
  const date = getDateForDay(dayNumber);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
}

/**
 * Get days until a specific day
 */
export function getDaysUntilDay(dayNumber: number): number {
  const today = getCurrentDate();
  const targetDate = getDateForDay(dayNumber);
  
  if (isBefore(today, targetDate)) {
    return differenceInDays(targetDate, today);
  }
  
  return 0;
}

/**
 * Check if we're currently in advent season
 */
export function isAdventSeason(): boolean {
  const currentDay = getCurrentDay();
  return currentDay > 0 && currentDay <= 24;
}

