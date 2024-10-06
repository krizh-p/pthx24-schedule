import { Card } from "@/components/ui/card"

interface EventCardProps {
    title: string;
    roomNumber: number | string;
}

const EventCard: React.FC<EventCardProps> = ({ title, roomNumber }) => {
    return (
        <Card className="w-full max-w-md p-8 border-l-primary bg-card text-card-foreground rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-neutral-200 pb-2">
                {title}
            </h2>
            <h5 className="text-xl md:text-xl lg:text-1xl text-muted-foreground">
                <span>
                    {roomNumber}
                </span>
            </h5>
        </Card>
    )
}

export default EventCard;