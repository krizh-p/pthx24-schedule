"use client"

import { useState } from "react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Timeline } from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [selectedDay, setSelectedDay] = useState("Friday")

  const fridayData = [
    {
      title: "4:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Student Check-in
        </h2>
      ),
    },
    {
      title: "6:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Opening Ceremony
        </h2>
      ),
    },
    {
      title: "7:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Dinner
        </h2>
      ),
    },
    {
      title: "8:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Brainstorming Ideas/ Team Matchmaker
        </h2>
      ),
    },
    {
      title: "8:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Peraton: Intro to React
        </h2>
      ),
    },
    {
      title: "9:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Intro to GitHub
        </h2>
      ),
    },
    {
      title: "10:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Initial submission
        </h2>
      ),
    },
    {
      title: "9:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Cloudforce Workshop
        </h2>
      ),
    },
    {
      title: "10:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Python Web Development: Django Quickstart
        </h2>
      ),
    },
  ];

  const saturdayData = [
    {
      title: "4:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Swap volunteers (12-4 AM)
        </h2>
      ),
    },
    {
      title: "4:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          The MIX Workshops
        </h2>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Breakfast
        </h2>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Swap volunteers (4-8 AM)
        </h2>
      ),
    },
    {
      title: "9:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          AWS: Intro to AWS
        </h2>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Yoga
        </h2>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Meditation Club
        </h2>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Resume Workshop (Amit from MyTurn)
        </h2>
      ),
    },
    {
      title: "10:30 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Snacks available
        </h2>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Salesforce Workshop: Tableau
        </h2>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Metro Star
        </h2>
      ),
    },
    {
      title: "11:45 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Lunch served to non-participant guests
        </h2>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Lunch
        </h2>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Amazon x Codepath Lunch n' Learn Q&A
        </h2>
      ),
    },
    {
      title: "1:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Microsoft Workshop: GitHub CoPilot
        </h2>
      ),
    },
    {
      title: "2:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Arcfield: Technical Workshop
        </h2>
      ),
    },
    {
      title: "2:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Peraton: Recruitment
        </h2>
      ),
    },
    {
      title: "2:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Y-Tea handing out Boba
        </h2>
      ),
    },
    {
      title: "2:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Mason Illustrators
        </h2>
      ),
    },
    {
      title: "3:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          AI Panel Speaker Event
        </h2>
      ),
    },
    {
      title: "5:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Fannie Mae Workshop
        </h2>
      ),
    },
    {
      title: "5:45 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Dinner served to non-participant guests
        </h2>
      ),
    },
    {
      title: "6:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Dinner with Microsoft x Cloudforce Networking Opportunity
        </h2>
      ),
    },
    {
      title: "6:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Microsoft x Cloudforce Dinner n' Network
        </h2>
      ),
    },
    {
      title: "6:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Esports Presents: Smash Tourney
        </h2>
      ),
    },
    {
      title: "7:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Workshop Block
        </h2>
      ),
    },
    {
      title: "8:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          How to Run a Hackathon
        </h2>
      ),
    },
    {
      title: "9:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Late Night Activity
        </h2>
      ),
    },
    {
      title: "10:30 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Initial submission
        </h2>
      ),
    },
    {
      title: "12:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Late Night Activity
        </h2>
      ),
    },
  ];

  const sundayData = [
    {
      title: "4:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Swap volunteers (12-4 AM)
        </h2>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Breakfast
        </h2>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Swap volunteers (4-8 AM)
        </h2>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Breakfast
        </h2>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Project Submission Deadline (setup tables)
        </h2>
      ),
    },
    {
      title: "10:30 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Judges Arrive
        </h2>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Judging Starts
        </h2>
      ),
    },
    {
      title: "12:45 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Judges receive lunch first, then all non-participant guests
        </h2>
      ),
    },
    {
      title: "1:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Judging Ends, Lunch Starts
        </h2>
      ),
    },
    {
      title: "2:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Closing Ceremony Starts
        </h2>
      ),
    },
    {
      title: "3:00 PM - 5:00 PM",
      content: (
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200">
          Clean Up
        </h2>
      ),
    },
  ];


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

  return (
    <MaxWidthWrapper>
      <div className="py-8 sm:py-12 md:py-16 mx-auto text-center flex flex-col items-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
          Patriot Hacks 2024<br />Schedule
        </h1>
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
        <div className="w-full max-w-3xl mx-auto">
          <Timeline key={selectedDay} data={getSelectedData()} />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}