"use client"

import { useState } from "react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Timeline } from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"
import MinFooter from "@/components/ui/Footer"
import { SCHEDULE } from "@/lib/schedule"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [selectedDay, setSelectedDay] = useState("Friday")
  const [showAllEvents, setShowAllEvents] = useState(false)

  const { fridayData, saturdayData, sundayData } = SCHEDULE

  function stripPastEvents(data: { title: string; content: JSX.Element }[]) {
    const currentTime = new Date();

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

      // Create a new Date object for the event time using today's date
      const eventTime = new Date();
      eventTime.setHours(hours, minutes, 0, 0);

      // Compare the event time with the current time
      return eventTime >= currentTime;
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
    return showAllEvents ? selectedData : stripPastEvents(selectedData);
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
            <span className="text-lg">View all events</span>
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
          <Timeline key={selectedDay} data={getData()} />
        </div>
        {/* Footer */}
        <div className="pt-[10rem] md:pt-[16rem] w-full max-w-3xl mx-auto">
          <MinFooter />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}