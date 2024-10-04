"use client"

import { useState } from "react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Timeline } from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/EventCard"
import MinFooter from "@/components/ui/Footer"

export default function Component() {
  const [selectedDay, setSelectedDay] = useState("Friday")

  function stripPastEvents(data: { title: string; content: JSX.Element }[]) {
    const currentTime = new Date();

    return data.filter((event) => {
      // Extract the time from the event title (e.g., "4:30 PM")
      const eventTimeString = event.title;
      const [time, modifier] = eventTimeString.split(" ");

      // Parse the event time (e.g., "4:30" => hours and minutes)
      let [hours, minutes] = time.split(":").map(Number);

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

  const fridayData = [
    {
      title: "4:30 PM",
      content: (
        <>
          <EventCard title="Student Check-in" roomNumber={"2nd Floor"} />
        </>
      ),
    },
    {
      title: "6:00 PM",
      content: (
        <>
          <EventCard title="Opening Ceremony" roomNumber={"Atrium"} />
        </>
      ),
    },
    {
      title: "7:00 PM",
      content: (
        <>
          <EventCard title="Dinner" roomNumber={"2nd Floor"} />
        </>
      ),
    },
    {
      title: "8:00 PM",
      content: (
        <>
          <EventCard title="Brainstorming Ideas/ Team Matchmaker" roomNumber={"Atrium"} />
        </>
      ),
    },
    {
      title: "8:30 PM",
      content: (
        <>
          <EventCard title="Peraton: Intro to React" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "9:00 PM",
      content: (
        <>
          <EventCard title="Intro to GitHub" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "9:30 PM",
      content: (
        <>
          <EventCard title="Cloudforce Workshop" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "10:00 PM",
      content: (
        <>
          <EventCard title="Initial submission" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "10:30 PM",
      content: (
        <>
          <EventCard title="Python Web Development: Django Quickstart" roomNumber={1008} />
        </>
      ),
    },
  ];


  const saturdayData = [
    {
      title: "4:00 AM",
      content: (
        <>
          <EventCard title="Swap volunteers (12-4 AM)" roomNumber={2017} />
          <EventCard title="The MIX Workshops" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <>
          <EventCard title="Breakfast" roomNumber={2017} />
          <EventCard title="Swap volunteers (4-8 AM)" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "9:00 AM",
      content: (
        <>
          <EventCard title="AWS: Intro to AWS" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <>
          <EventCard title="Yoga" roomNumber={1008} />
          <EventCard title="Meditation Club" roomNumber={2017} />
          <EventCard title="Resume Workshop (Amit from MyTurn)" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "10:30 AM",
      content: (
        <>
          <EventCard title="Snacks available" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <>
          <EventCard title="Salesforce Workshop: Tableau" roomNumber={1008} />
          <EventCard title="Metro Star" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "11:45 AM",
      content: (
        <>
          <EventCard title="Lunch served to non-participant guests" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "12:00 PM",
      content: (
        <>
          <EventCard title="Lunch" roomNumber={2017} />
          <EventCard title="Amazon x Codepath Lunch n' Learn Q&A" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "1:00 PM",
      content: (
        <>
          <EventCard title="Microsoft Workshop: GitHub CoPilot" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "2:00 PM",
      content: (
        <>
          <EventCard title="Arcfield: Technical Workshop" roomNumber={1008} />
          <EventCard title="Peraton: Recruitment" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "2:30 PM",
      content: (
        <>
          <EventCard title="Y-Tea handing out Boba" roomNumber={1008} />
          <EventCard title="Mason Illustrators" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "3:00 PM",
      content: (
        <>
          <EventCard title="AI Panel Speaker Event" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "5:00 PM",
      content: (
        <>
          <EventCard title="Fannie Mae Workshop" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "5:45 PM",
      content: (
        <>
          <EventCard title="Dinner served to non-participant guests" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "6:00 PM",
      content: (
        <>
          <EventCard title="Dinner with Microsoft x Cloudforce Networking Opportunity" roomNumber={2017} />
          <EventCard title="Microsoft x Cloudforce Dinner n' Network" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "6:30 PM",
      content: (
        <>
          <EventCard title="Esports Presents: Smash Tourney" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "7:00 PM",
      content: (
        <>
          <EventCard title="Workshop Block" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "8:00 PM",
      content: (
        <>
          <EventCard title="How to Run a Hackathon" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "9:00 PM",
      content: (
        <>
          <EventCard title="Late Night Activity" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "10:30 PM",
      content: (
        <>
          <EventCard title="Initial submission" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "12:00 AM",
      content: (
        <>
          <EventCard title="Late Night Activity" roomNumber={1008} />
        </>
      ),
    },
  ];


  const sundayData = [
    {
      title: "4:00 AM",
      content: (
        <>
          <EventCard title="Swap volunteers (12-4 AM)" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "8:00 AM",
      content: (
        <>
          <EventCard title="Breakfast" roomNumber={1008} />
          <EventCard title="Swap volunteers (4-8 AM)" roomNumber={2017} />
          <EventCard title="Breakfast" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "10:00 AM",
      content: (
        <>
          <EventCard title="Project Submission Deadline (setup tables)" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "10:30 AM",
      content: (
        <>
          <EventCard title="Judges Arrive" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "11:00 AM",
      content: (
        <>
          <EventCard title="Judging Starts" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "12:45 PM",
      content: (
        <>
          <EventCard title="Judges receive lunch first, then all non-participant guests" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "1:00 PM",
      content: (
        <>
          <EventCard title="Judging Ends, Lunch Starts" roomNumber={2017} />
        </>
      ),
    },
    {
      title: "2:00 PM",
      content: (
        <>
          <EventCard title="Closing Ceremony Starts" roomNumber={1008} />
        </>
      ),
    },
    {
      title: "3:00 PM - 5:00 PM",
      content: (
        <>
          <EventCard title="Clean Up" roomNumber={2017} />
        </>
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
      <div className="mb-30 py-8 sm:py-12 md:py-16 mx-auto text-center flex flex-col items-center max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
          Patriot Hacks 2024<br />Schedule
        </h1>
        {/* Buttons */}
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
          <Timeline key={selectedDay} data={stripPastEvents(getSelectedData())} />
        </div>
        {/* Footer */}
        <div className="pt-[10rem] md:pt-[16rem] w-full max-w-3xl mx-auto">
          <MinFooter />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}