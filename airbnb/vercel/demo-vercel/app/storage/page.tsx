import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Luggage } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function StoragePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Luggage Storage</h1>
          <p className="text-muted-foreground max-w-2xl">Request luggage storage before check-in or after check-out</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Luggage Storage Request</CardTitle>
                <CardDescription>Fill out the form below to request luggage storage service</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Storage Type</h3>
                      <RadioGroup defaultValue="early" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <RadioGroupItem value="early" id="early" className="peer sr-only" />
                          <Label
                            htmlFor="early"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <Clock className="mb-3 h-6 w-6" />
                            Early Arrival Storage
                            <span className="text-xs text-muted-foreground mt-1">Before check-in time</span>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="late" id="late" className="peer sr-only" />
                          <Label
                            htmlFor="late"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <Clock className="mb-3 h-6 w-6" />
                            Late Departure Storage
                            <span className="text-xs text-muted-foreground mt-1">After check-out time</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="grid gap-4">
                      <h3 className="text-lg font-medium">Storage Details</h3>

                      <div className="grid gap-2">
                        <Label htmlFor="storage-date">Date Needed</Label>
                        <Input type="date" id="storage-date" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="dropoff-time">Dropoff Time</Label>
                          <Input type="time" id="dropoff-time" />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="pickup-time">Pickup Time</Label>
                          <Input type="time" id="pickup-time" />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="luggage-count">Number of Items</Label>
                        <Select>
                          <SelectTrigger id="luggage-count">
                            <SelectValue placeholder="Select number of items" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 item</SelectItem>
                            <SelectItem value="2">2 items</SelectItem>
                            <SelectItem value="3">3 items</SelectItem>
                            <SelectItem value="4">4 items</SelectItem>
                            <SelectItem value="5">5+ items</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="luggage-type">Luggage Type</Label>
                        <Select>
                          <SelectTrigger id="luggage-type">
                            <SelectValue placeholder="Select luggage type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="suitcase">Suitcases</SelectItem>
                            <SelectItem value="backpack">Backpacks</SelectItem>
                            <SelectItem value="mixed">Mixed items</SelectItem>
                            <SelectItem value="special">Special items (specify in notes)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="storage-notes">Special Requests or Notes</Label>
                        <Textarea id="storage-notes" placeholder="Any special requirements or additional information" />
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
                    Submit Storage Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Storage Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-md overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Luggage storage"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Complimentary Service</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer complimentary luggage storage for our guests before check-in or after check-out,
                        subject to availability.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-1">Storage Hours</h3>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday - Sunday:</span>
                          <span>9:00 AM - 7:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-1">Storage Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Your luggage will be stored in a secure, monitored location on the property.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>Please submit your request at least 24 hours in advance to ensure availability.</p>
                  <p>After submitting your request, you will receive a confirmation email with instructions.</p>
                  <p>
                    While we take all precautions to ensure the safety of your belongings, we recommend keeping
                    valuables, important documents, and fragile items with you.
                  </p>
                  <p>For last-minute requests, please contact us directly at (555) 123-4567.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Luggage className="h-5 w-5 text-emerald-500" />
                    Alternative Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="mb-4">If our storage service is unavailable, here are some nearby alternatives:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 mt-0.5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-medium">Seaside Storage</span>
                        <p>0.5 miles away - $5 per item per day</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 mt-0.5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-medium">Town Visitor Center</span>
                        <p>1.2 miles away - $3 per item per day</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
