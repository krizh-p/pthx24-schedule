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
                    <EventCard title="Brainstorming Ideas / Team Matchmaking" roomNumber={"Outside Atrium"} isActive={isEventActive("2024-10-11 20:00")} />
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
                    <EventCard title="Intro to GitHub" roomNumber={"Horizon 1008"} isActive={isEventActive("2024-10-11 21:00")} />
                </>
            )
        },
        {
            "title": "9:30 PM",
            "content": (
                <>
                    <EventCard title="Microsoft x Cloudforce: Learning Session" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-11 21:30")} />
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
        // {
        //     "title": "4:00 AM",
        //     "content": (
        //         <>
        //             <EventCard title="Swap volunteers (12-4AM)" roomNumber={""} isActive={isEventActive("2024-10-12 04:00")} />
        //         </>
        //     )
        // },
        {
            "title": "8:00 AM",
            "content": (
                <>
                    <EventCard title="Breakfast" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 08:00")} />
                    {/* <EventCard title="Swap volunteers (4-8AM)" roomNumber={""} isActive={isEventActive("2024-10-12 08:00")} /> */}
                </>
            )
        },
        {
            "title": "9:00 AM",
            "content": (
                <>
                    <EventCard title="AWS: Intro to AWS" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 09:00")} />
                </>
            )
        },
        {
            "title": "10:00 AM",
            "content": (
                <>
                    <EventCard title="Yoga" roomNumber={"Outside Atrium"} isActive={isEventActive("2024-10-12 10:00")} />
                    <EventCard title="Meditation Club" roomNumber={"Outside Atrium"} isActive={isEventActive("2024-10-12 10:00")} />
                    <EventCard title="Resume Workshop with Founder & CEO of MyTurn" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 10:00")} />
                </>
            )
        },
        {
            "title": "10:30 AM",
            "content": (
                <>
                    <EventCard title="Snacks available" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 10:30")} />
                </>
            )
        },
        {
            "title": "11:00 AM",
            "content": (
                <>
                    <EventCard title="Salesforce Workshop: Tableau" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 11:00")} />
                    <EventCard title="MetroStar: Intro to Computer Vision" roomNumber={"Horizon 1008"} isActive={isEventActive("2024-10-12 11:00")} />
                </>
            )
        },
        {
            "title": "11:45 AM",
            "content": (
                <>
                    <EventCard title="Lunch served to non-participant guests" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 11:45")} />
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
                    <EventCard title="Microsoft: Coding with Github Copilot" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 13:00")} />
                </>
            )
        },
        {
            "title": "2:00 PM",
            "content": (
                <>
                    <EventCard title="Arcfield: Technical Workshop" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 14:00")} />
                    <EventCard title="Peraton: Info Session" roomNumber={"Horizon 1008"} isActive={isEventActive("2024-10-12 14:00")} />
                </>
            )
        },
        {
            "title": "2:30 PM",
            "content": (
                <>
                    <EventCard title="Free Boba! Y-Tea Boba Stall" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 14:30")} />
                    <EventCard title="Mason Illustrators" roomNumber={""} isActive={isEventActive("2024-10-12 14:30")} />
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
            "title": "5:45 PM",
            "content": (
                <>
                    <EventCard title="Dinner served to non-participant guests" roomNumber={"Horizon 2nd Floor"} isActive={isEventActive("2024-10-12 17:45")} />
                </>
            )
        },
        {
            "title": "6:00 PM",
            "content": (
                <>
                    <EventCard title="Dinner" roomNumber={"Horizon 2019"} isActive={isEventActive("2024-10-12 18:00")} />
                    <EventCard title="Microsoft x Cloudforce Networking Dinner" roomNumber={"Horizon 2019"} isActive={isEventActive("2024-10-12 18:00")} />
                </>
            )
        },
        {
            "title": "6:30 PM",
            "content": (
                <>
                    <EventCard title="Esports Presents: Smash Tourney" roomNumber={"Horizon 1008"} isActive={isEventActive("2024-10-12 18:30")} />
                </>
            )
        },
        {
            "title": "8:00 PM",
            "content": (
                <>
                    <EventCard title="How to Run a Hackathon" roomNumber={"Horizon 2017"} isActive={isEventActive("2024-10-12 20:00")} />
                </>
            )
        },
        {
            "title": "10:30 PM",
            "content": (
                <>
                    <EventCard title="Initial submission" roomNumber={"Devpost"} isActive={isEventActive("2024-10-12 22:30")} />
                </>
            )
        },
    ],
    "sundayData": [
        {
            "title": "8:00 AM",
            "content": (
                <>
                    <EventCard title="Breakfast" roomNumber={""} isActive={isEventActive("2024-10-13 08:00")} />
                </>
            )
        },
        {
            "title": "10:00 AM",
            "content": (
                <>
                    <EventCard title="Project Submission Deadline" roomNumber={""} isActive={isEventActive("2024-10-13 10:00")} />
                </>
            )
        },
        {
            "title": "10:30 AM",
            "content": (
                <>
                    <EventCard title="Judges Arrive" roomNumber={"Horizon 1008"} isActive={isEventActive("2024-10-13 10:30")} />
                </>
            )
        },
        {
            "title": "11:00 AM",
            "content": (
                <>
                    <EventCard title="Judging Starts" roomNumber={""} isActive={isEventActive("2024-10-13 11:00")} />
                </>
            )
        },
        {
            "title": "12:45 PM",
            "content": (
                <>
                    <EventCard title="Lunch: Judges first, then guests, then students" roomNumber={""} isActive={isEventActive("2024-10-13 12:45")} />
                </>
            )
        },
        {
            "title": "1:00 PM",
            "content": (
                <>
                    <EventCard title="Judging Ends, Lunch Starts" roomNumber={""} isActive={isEventActive("2024-10-13 13:00")} />
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
        {
            "title": "3:00 PM",
            "content": (
                <>
                    <EventCard title="Clean Up" roomNumber={""} isActive={isEventActive("2024-10-13 15:00")} />
                </>
            )
        }
    ],
}