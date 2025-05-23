import Image from "next/image"
import Link from "next/link"
import { Calendar, Info, Luggage, CarTaxiFrontIcon as Taxi, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PropertyInfo from "@/components/property-info"
import EventsNearby from "@/components/events-nearby"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Beautiful Airbnb property"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Seaside Haven</h1>
          <p className="text-xl md:text-2xl max-w-2xl">Your perfect getaway in the heart of the coast</p>
        </div>
      </section>

      {/* Property Info Section */}
      <PropertyInfo />

      {/* Main Options */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Events Nearby */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="bg-rose-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-rose-500" />
                Events Nearby
              </CardTitle>
              <CardDescription>Discover local attractions and events</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-40 relative rounded-md overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=600" alt="Local events" fill className="object-cover" />
              </div>
              <p className="text-muted-foreground">
                Explore concerts, festivals, markets, and other exciting events happening near your stay.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/events" className="w-full">
                <Button className="w-full group-hover:bg-rose-600">
                  View Events
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Airbnb Manual */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                Airbnb Manual
              </CardTitle>
              <CardDescription>Everything you need to know about your stay</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-40 relative rounded-md overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=600" alt="Airbnb manual" fill className="object-cover" />
              </div>
              <p className="text-muted-foreground">
                Access WiFi passwords, appliance instructions, house rules, and other helpful information.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/manual" className="w-full">
                <Button variant="outline" className="w-full group-hover:bg-blue-50">
                  View Manual
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Schedule a Taxi */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="bg-amber-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Taxi className="h-5 w-5 text-amber-500" />
                Schedule a Taxi
              </CardTitle>
              <CardDescription>Book transportation for your adventures</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-40 relative rounded-md overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=300&width=600" alt="Taxi service" fill className="object-cover" />
              </div>
              <p className="text-muted-foreground">
                Request a taxi service for airport transfers, day trips, or getting around town.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/taxi" className="w-full">
                <Button variant="outline" className="w-full group-hover:bg-amber-50">
                  Book Transportation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Luggage Storage */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="bg-emerald-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Luggage className="h-5 w-5 text-emerald-500" />
                Luggage Storage
              </CardTitle>
              <CardDescription>Convenient storage solutions for early arrivals or late departures</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-40 relative rounded-md overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Luggage storage"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-muted-foreground">
                Request luggage storage before check-in or after check-out to make the most of your time.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/storage" className="w-full">
                <Button variant="outline" className="w-full group-hover:bg-emerald-50">
                  Request Storage
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Events Preview */}
      <EventsNearby />

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-4">Seaside Haven</h3>
            <p className="text-muted-foreground">Your perfect coastal getaway with all the comforts of home.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-gray-900">
                  Events Nearby
                </Link>
              </li>
              <li>
                <Link href="/manual" className="text-muted-foreground hover:text-gray-900">
                  Airbnb Manual
                </Link>
              </li>
              <li>
                <Link href="/taxi" className="text-muted-foreground hover:text-gray-900">
                  Schedule a Taxi
                </Link>
              </li>
              <li>
                <Link href="/storage" className="text-muted-foreground hover:text-gray-900">
                  Luggage Storage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Host</h3>
            <p className="text-muted-foreground">Need assistance? Contact your host directly.</p>
            <Button variant="outline" className="mt-2">
              Message Host
            </Button>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Emergency</h3>
            <p className="text-muted-foreground">Emergency services: 911</p>
            <p className="text-muted-foreground">Host emergency line: (555) 123-4567</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Seaside Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
