"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample events data
const events = [
  {
    id: 1,
    title: "Farmers Market",
    date: "May 25, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Town Square, 0.5 miles away",
    description: "Local produce, crafts, and food vendors gather for this weekly market.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Beach Concert Series",
    date: "May 26, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Beach, 0.3 miles away",
    description: "Live music on the beach featuring local bands and artists.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Art Gallery Opening",
    date: "May 27, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Coastal Arts Center, 0.8 miles away",
    description: "Opening reception for new coastal-themed exhibition with wine and appetizers.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function EventsNearby() {
  const [activeTab, setActiveTab] = useState("list")

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Events Nearby</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover exciting local events and attractions during your stay
            </p>
          </div>
          <Link href="/events">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Events
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="list" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0">
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
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <div className="bg-gray-200 rounded-lg overflow-hidden relative h-[500px] w-full">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    This would be an interactive map showing event locations relative to your Airbnb.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In a real implementation, this would use Google Maps, Mapbox, or another mapping service.
                  </p>

                  {/* Sample map markers */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {events.map((event) => (
                      <div key={event.id} className="bg-white p-3 rounded-md shadow-sm text-left">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-xs text-muted-foreground">{event.location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
