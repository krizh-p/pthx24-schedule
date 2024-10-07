"use client"

import { useState } from "react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Timeline } from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"
import MinFooter from "@/components/ui/Footer"
import { SCHEDULE } from "@/lib/schedule"
import { Switch } from "@/components/ui/switch"
import { getCurrentTime, isEventActive } from "@/lib/utils"

const getDefaultDay = () => {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  // Return the current day if it's Friday, Saturday, or Sunday; otherwise return "Friday"
  return currentDay === "Friday" || currentDay === "Saturday" || currentDay === "Sunday"
    ? currentDay
    : "Friday";
};

export default function Component() {
  const [selectedDay, setSelectedDay] = useState(getDefaultDay())
  const [showAllEvents, setShowAllEvents] = useState(false)

  const { fridayData, saturdayData, sundayData } = SCHEDULE

  function stripPastEvents(data: { title: string; content: JSX.Element }[], selectedDay: string) {
    const currentTime = getCurrentTime()

    // Map selected day to the specific date in October 2024
    let eventDate;
    switch (selectedDay) {
      case "Friday":
        eventDate = "2024-10-11";
        break;
      case "Saturday":
        eventDate = "2024-10-12";
        break;
      case "Sunday":
        eventDate = "2024-10-13";
        break;
      default:
        eventDate = "2024-10-11"; // Default to Friday if somehow no day is selected
    }

    return data.filter((event) => {

      // Extract the time from the event title (e.g., "4:30 PM")
      const eventTimeString = event.title;
      const [time, modifier] = eventTimeString.split(" ");

      // Parse the event time (e.g., "4:30" => hours and minutes)
      let [hours, minutes] = time.split(":").map(Number);
      minutes = minutes

      // Adjust hours based on AM/PM
      if (modifier === "PM" && hours < 12) {
        hours += 12;
      } else if (modifier === "AM" && hours === 12) {
        hours = 0; // Midnight edge case
      }

      // Create a full event Date object using the mapped eventDate and parsed time
      const eventDateTimeString = `${eventDate} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

      // Check if the event is active
      const eventIsActive = isEventActive(eventDateTimeString);

      // Create a full event Date object using the mapped eventDate and parsed time
      const eventDateTime = new Date(eventDateTimeString);

      // Return true if the event is active or in the future
      return eventIsActive || eventDateTime >= currentTime;

    });
  }

  const getSelectedData = () => {
    switch (selectedDay) {
      case "Friday":
        return fridayData
      case "Saturday":
        return saturdayData
      case "Sunday":
        return sundayData
      default:
        return fridayData
    }
  }

  const getData = () => {
    const selectedData = getSelectedData();
    return showAllEvents ? selectedData : stripPastEvents(selectedData, selectedDay);
  }

  return (
    <MaxWidthWrapper>
      {/* <Comment text={"Caesar shift 12"} /> */}
      <div className="mb-30 py-8 sm:py-12 md:py-16 mx-auto text-center flex flex-col items-center max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
          Patriot Hacks 2024<br />Schedule
        </h1>

        {/* Toggle for "View All Events" */}
        <div className="mb-6">
          <label className="flex items-center gap-2">
            <span className="text-lg">View past events</span>
            <Switch
              aria-label="Toggle to view all events or upcoming events only"
              checked={showAllEvents}
              onCheckedChange={() => setShowAllEvents(!showAllEvents)}
            />
          </label>
        </div>

        {/* Select Day Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Friday", "Saturday", "Sunday"].map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="w-full max-w-3xl mx-auto">
          {(() => {
            const data = getData(); // Store the result of getData()

            if (data.length === 0) {
              return (
                <div className="text-lg text-muted-foreground">
                  All events for this day have finished.
                  <br />
                  <button
                    onClick={() => setShowAllEvents((prev) => !prev)}
                    className="text-blue-500 underline cursor-pointer" // Add styles for the clickable text
                  >
                    {`View completed events?`}
                  </button>
                </div>
              );
            }
            return <Timeline key={selectedDay} data={data} />;
          })()}
          <p className="text-background">Caesar Shift 13</p>
        </div>


        {/* Footer */}
        <div className="pt-[10rem] md:pt-[16rem] w-full max-w-3xl mx-auto">
          <MinFooter />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}