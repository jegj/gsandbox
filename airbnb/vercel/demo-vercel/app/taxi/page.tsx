import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function TaxiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Schedule a Taxi</h1>
          <p className="text-muted-foreground max-w-2xl">Book transportation for your stay at Seaside Haven</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Transportation Request</CardTitle>
                <CardDescription>Fill out the form below to request a taxi or transportation service</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Service Type</h3>
                      <RadioGroup defaultValue="taxi" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <RadioGroupItem value="taxi" id="taxi" className="peer sr-only" />
                          <Label
                            htmlFor="taxi"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <svg
                              className="mb-3 h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M7 11a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4z" />
                              <path d="M17 13v-2a4 4 0 00-4-4h-2a4 4 0 00-4 4v2" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 17h14M5 19h14M17 9V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4m10 0H7"
                              />
                            </svg>
                            Taxi
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="airport" id="airport" className="peer sr-only" />
                          <Label
                            htmlFor="airport"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <svg
                              className="mb-3 h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                            Airport Transfer
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="tour" id="tour" className="peer sr-only" />
                          <Label
                            htmlFor="tour"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <svg
                              className="mb-3 h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Day Tour
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="grid gap-4">
                      <h3 className="text-lg font-medium">Trip Details</h3>

                      <div className="grid gap-2">
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <Input type="date" id="pickup-date" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="pickup-time">Pickup Time</Label>
                        <Input type="time" id="pickup-time" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Select>
                          <SelectTrigger id="passengers">
                            <SelectValue placeholder="Select number of passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 passenger</SelectItem>
                            <SelectItem value="2">2 passengers</SelectItem>
                            <SelectItem value="3">3 passengers</SelectItem>
                            <SelectItem value="4">4 passengers</SelectItem>
                            <SelectItem value="5">5+ passengers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="Seaside Haven (default)" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input id="destination" placeholder="Enter destination address" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="notes">Special Requests or Notes</Label>
                        <Textarea id="notes" placeholder="Any special requirements or additional information" />
                      </div>
                    </div>

                    <Separator />

                    <div className="grid gap-4">
                      <h3 className="text-lg font-medium">Contact Information</h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Transportation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Transportation Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-md overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Taxi service"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Local Taxi</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Standard taxi service for local trips around town. Available 24/7.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Typical wait time: 10-15 minutes</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-1">Airport Transfer</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comfortable transportation to and from the airport with luggage assistance.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>Airport distance: 45 minutes</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-1">Day Tour Service</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Explore the area with a private driver for half or full-day excursions.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>Available for groups up to 6 people</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>
                    Please submit your request at least 2 hours in advance for local taxis and 24 hours for airport
                    transfers or day tours.
                  </p>
                  <p>
                    After submitting your request, you will receive a confirmation email with estimated pricing and
                    additional details.
                  </p>
                  <p>
                    For immediate assistance or last-minute requests, please contact our recommended taxi service
                    directly at (555) 789-0123.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
