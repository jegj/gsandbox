import Image from "next/image"
import { Wifi, Utensils, Coffee, MapPin, Star, Users, Bed } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PropertyInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-rose-500" />
            <span className="text-muted-foreground">123 Coastal Drive, Seaside Town</span>
            <div className="flex items-center ml-auto">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="ml-1 text-sm font-medium">4.97</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">Seaside Haven</h2>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>4 guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-5 w-5 text-muted-foreground" />
              <span>2 bedrooms</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Welcome to Seaside Haven, your perfect coastal retreat! Our beautifully appointed apartment offers stunning
            ocean views, modern amenities, and a prime location just steps from the beach. Enjoy the sound of waves,
            breathtaking sunsets, and all the comforts of home during your stay.
          </p>

          <h3 className="text-xl font-semibold mb-4">Amenities</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-muted-foreground" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-muted-foreground" />
              <span>Coffee Maker</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-muted-foreground" />
              <span>Fully Equipped Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Smart TV</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>Free Parking</span>
            </div>
          </div>

          <Button className="w-full sm:w-auto">View Full Property Details</Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Living room" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Bedroom" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Kitchen" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=400" alt="Bathroom" fill className="object-cover" />
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Check-in/Check-out</h3>
            <p className="text-muted-foreground mb-1">Check-in: 3:00 PM - 8:00 PM</p>
            <p className="text-muted-foreground">Check-out: 11:00 AM</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">WiFi Information</h3>
            <p className="text-muted-foreground mb-1">Network: SeasideHaven_Guest</p>
            <p className="text-muted-foreground">Password: BeachLife2023</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">House Rules</h3>
            <p className="text-muted-foreground mb-1">No smoking</p>
            <p className="text-muted-foreground">No parties or events</p>
            <p className="text-muted-foreground">Pets allowed (with prior approval)</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
