import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample events data (expanded from the preview)
const events = [
  {
    id: 1,
    title: "Farmers Market",
    date: "May 25, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Town Square, 0.5 miles away",
    description:
      "Local produce, crafts, and food vendors gather for this weekly market. Find fresh fruits, vegetables, artisanal breads, and handmade crafts from local artisans.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Beach Concert Series",
    date: "May 26, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Beach, 0.3 miles away",
    description:
      "Live music on the beach featuring local bands and artists. Bring a blanket or beach chair and enjoy music with the sound of waves in the background.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Art Gallery Opening",
    date: "May 27, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Coastal Arts Center, 0.8 miles away",
    description:
      "Opening reception for new coastal-themed exhibition with wine and appetizers. Meet the artists and enjoy an evening of culture and conversation.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Coastal Food Festival",
    date: "May 28, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "Harbor Park, 1.2 miles away",
    description:
      "Annual food festival featuring local restaurants and seafood specialties. Sample dishes from the area's best chefs and enjoy live cooking demonstrations.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Sunset Yoga on the Beach",
    date: "May 29, 2025",
    time: "7:00 PM - 8:00 PM",
    location: "North Beach, 0.4 miles away",
    description:
      "Relaxing yoga session as the sun sets over the ocean. All skill levels welcome. Bring your own mat or rent one on-site.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Historic Walking Tour",
    date: "May 30, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Visitor Center, 0.7 miles away",
    description:
      "Guided tour of the town's historic district with stories about local landmarks and architecture. Learn about the area's rich maritime history.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Events Nearby</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover exciting local events and attractions during your stay at Seaside Haven
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Button variant="outline">View Map</Button>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  {event.date} • {event.time}
                </div>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-start gap-1">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Get Directions</Button>
                <Button>More Info</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
