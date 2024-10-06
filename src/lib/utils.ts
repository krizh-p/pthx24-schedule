import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const TEST_MODE = false

export const getCurrentTime = () => {
  return TEST_MODE ? fakeTime(12) : new Date();
}

export function isEventActive(eventDateTimeString: string): boolean {
  const currentTime = getCurrentTime(); // Get current time
  const eventStartTime = new Date(eventDateTimeString); // Parse the event st art time

  // Calculate the end time, which is 1 hour after the event start time
  const eventEndTime = new Date(eventStartTime);
  eventEndTime.setHours(eventStartTime.getHours() + 1);

  // Check if the current time is within the event duration (start and end)
  return currentTime >= eventStartTime && currentTime <= eventEndTime;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fakeTime(day: number, hour? : number) {
  // Get the current date to extract hour and minute
  const now = new Date();
  const currentHour = hour || now.getHours();
  const currentMinute = now.getMinutes();

  // Create a new date object for Saturday, October 12, 2024
  const date = new Date(2024, 9, day, currentHour + 1, currentMinute); // Months are 0-indexed (9 = October)
  return date
}