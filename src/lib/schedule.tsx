import EventCard from "@/components/EventCard";
import { isEventActive } from "./utils";

export const SCHEDULE = {
    "fridayData": [
        {
            "title": "4:30 PM",
            "content": (
                <>
                    <EventCard title="Student Check-in" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-11 16:30")} />
                </>
            )
        },
        {
            "title": "6:00 PM",
            "content": (
                <>
                    <EventCard title="Opening Ceremony" roomNumber={"Atrium"} isActive={isEventActive("2024-10-11 18:00")} />
                </>
            )
        },
        {
            "title": "7:00 PM",
            "content": (
                <>
                    <EventCard title="Dinner" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-11 19:00")} />
                </>
            )
        },
        {
            "title": "8:00 PM",
            "content": (
                <>
                    <EventCard title="Brainstorming Ideas/ Team Matchmaker" roomNumber={"Outside Atrium"} isActive={isEventActive("2024-10-11 20:00")} />
                </>
            )
        },
        {
            "title": "8:30 PM",
            "content": (
                <>
                    <EventCard title="Peraton: Intro to React" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-11 20:30")} />
                </>
            )
        },
        {
            "title": "9:00 PM",
            "content": (
                <>
                    <EventCard title="Intro to GitHub" roomNumber={"Horizon 2009"} isActive={isEventActive("2024-10-11 21:00")} />
                </>
            )
        },
        {
            "title": "9:30 PM",
            "content": (
                <>
                    <EventCard title="Microsoft x Cloudforce: Track Learning Session" roomNumber={"Horizon 2008"} isActive={isEventActive("2024-10-11 21:30")} />
                </>
            )
        },
        {
            "title": "10:30 PM",
            "content": (
                <>
                    <EventCard title="Python Web Development: Django Quickstart" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-11 22:30")} />
                </>
            )
        }
    ],
    "saturdayData": [
        {
            "title": "8:00 AM",
            "content": (
                <>
                    <EventCard title="Breakfast" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-12 08:00")} />
                </>
            )
        },
        {
            "title": "9:00 AM",
            "content": (
                <>
                    <EventCard title="AWS: Intro to AWS" roomNumber={"Horizon 2016"} isActive={isEventActive("2024-10-12 09:00")} />
                </>
            )
        },
        {
            "title": "10:00 AM",
            "content": (
                <>
                    <EventCard title="Resume Workshop with CEO of MyTurn" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 10:00")} />
                    <EventCard title="Raja Yoga" roomNumber={"Horizon 1014"} isActive={isEventActive("2024-10-12 10:00")} />
                    <EventCard title="Sahaja Yoga Meditation" roomNumber={"Horizon 1012"} isActive={isEventActive("2024-10-12 10:00")} />
                </>
            )
        },
        {
            "title": "11:00 AM",
            "content": (
                <>
                    <EventCard title="Salesforce: Tableau Workshop" roomNumber={"Horizon 2016"} isActive={isEventActive("2024-10-12 11:00")} />
                    <EventCard title="MetroStar: Intro to Computer Vision Track" roomNumber={"Horizon 2008"} isActive={isEventActive("2024-10-12 11:00")} />
                </>
            )
        },
        {
            "title": "12:00 PM",
            "content": (
                <>
                    <EventCard title="Lunch" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 12:00")} />
                    <EventCard title="Amazon x Codepath: Lunch n' Learn Q&A" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-12 12:00")} />
                </>
            )
        },
        {
            "title": "1:00 PM",
            "content": (
                <>
                    <EventCard title="Microsoft: Coding with Github Copilot" roomNumber={"Horizon 2016"} isActive={isEventActive("2024-10-12 13:00")} />
                </>
            )
        },
        {
            "title": "2:00 PM",
            "content": (
                <>
                    <EventCard title="Arcfield: Technical Workshop" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 14:00")} />
                    <EventCard title="Peraton: Info Session" roomNumber={"Horizon 2008"} isActive={isEventActive("2024-10-12 14:00")} />
                </>
            )
        },
        {
            "title": "2:30 PM",
            "content": (
                <>
                    <EventCard title="Mason Illustrators: Animation and Drawing" roomNumber={"Horizon 2016"} isActive={isEventActive("2024-10-12 14:30")} />
                </>
            )
        },
        {
            "title": "3:00 PM",
            "content": (
                <>
                    <EventCard title="AI Panel Speaker Event" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-12 15:00")} />
                </>
            )
        },
        {
            "title": "3:30 PM",
            "content": (
                <>
                    <EventCard title="3D Printing" roomNumber={"The MIX"} isActive={isEventActive("2024-10-12 15:30")} />
                </>
            )
        },
        {
            "title": "4:30 PM",
            "content": (
                <>
                    <EventCard title="Arduino Workshop" roomNumber={"The MIX"} isActive={isEventActive("2024-10-12 16:30")} />
                </>
            )
        },
        {
            "title": "5:30 PM",
            "content": (
                <>
                    <EventCard title="Soldering Workshop" roomNumber={"The MIX"} isActive={isEventActive("2024-10-12 17:30")} />
                </>
            )
        },
        {
            "title": "6:00 PM",
            "content": (
                <>
                    <EventCard title="Dinner with Microsoft x Cloudforce Networking Opportunity" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-12 18:00")} />
                </>
            )
        },
        {
            "title": "6:30 PM",
            "content": (
                <>
                    <EventCard title="Esports Presents: Smash Tourney" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 18:30")} />
                </>
            )
        },
        {
            "title": "8:00 PM",
            "content": (
                <>
                    <EventCard title="How to Run a Hackathon" roomNumber={"Horizon 2008"} isActive={isEventActive("2024-10-12 20:00")} />
                </>
            )
        },
        {
            "title": "10:00 PM",
            "content": (
                <>
                    <EventCard title="Initial Devpost Submission Due" roomNumber={"Devpost"} isActive={isEventActive("2024-10-12 22:00")} />
                </>
            )
        }
    ],
    "sundayData": [
        {
            "title": "8:00 AM",
            "content": (
                <>
                    <EventCard title="Breakfast" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-13 08:00")} />
                </>
            )
        },
        {
            "title": "10:00 AM",
            "content": (
                <>
                    <EventCard title="Final Devpost Submission" roomNumber={"Devpost"} isActive={isEventActive("2024-10-13 10:00")} />
                </>
            )
        },
        {
            "title": "11:00 AM",
            "content": (
                <>
                    <EventCard title="Judging Starts" roomNumber={"Horizon 2009, 2014, 2016"} isActive={isEventActive("2024-10-13 11:00")} />
                </>
            )
        },
        {
            "title": "1:00 PM",
            "content": (
                <>
                    <EventCard title="Judging Ends, Lunch Starts" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-13 13:00")} />
                </>
            )
        },
        {
            "title": "2:00 PM",
            "content": (
                <>
                    <EventCard title="Closing Ceremony Starts" roomNumber={"Horizon Atrium"} isActive={isEventActive("2024-10-13 14:00")} />
                </>
            )
        },
    ],
}