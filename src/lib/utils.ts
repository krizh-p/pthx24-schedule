import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fakeTime(day: number) {
  // Get the current date to extract hour and minute
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Create a new date object for Saturday, October 12, 2024
  const date = new Date(2024, 9, day, currentHour, currentMinute); // Months are 0-indexed (9 = October)
  console.log(date.toDateString() + date.toTimeString())
  return date
}