import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Wifi, Tv, Thermometer, Utensils, ShowerHead, Key } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ManualPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Airbnb Manual</h1>
          <p className="text-muted-foreground max-w-2xl">
            Everything you need to know about your stay at Seaside Haven
          </p>
        </div>

        <Tabs defaultValue="essentials" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="essentials">Essentials</TabsTrigger>
            <TabsTrigger value="appliances">Appliances</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="rules">House Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="essentials" className="mt-0">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-blue-500" />
                    WiFi Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-1">Main Network</h3>
                      <p className="text-muted-foreground mb-1">Network: SeasideHaven_Guest</p>
                      <p className="text-muted-foreground">Password: BeachLife2023</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Backup Network</h3>
                      <p className="text-muted-foreground mb-1">Network: SeasideHaven_Backup</p>
                      <p className="text-muted-foreground">Password: Backup2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-amber-500" />
                    Check-in/Check-out
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-1">Check-in</h3>
                      <p className="text-muted-foreground mb-1">Time: 3:00 PM - 8:00 PM</p>
                      <p className="text-muted-foreground">
                        The lockbox code is 4578. The lockbox is located to the right of the front door.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Check-out</h3>
                      <p className="text-muted-foreground mb-1">Time: 11:00 AM</p>
                      <p className="text-muted-foreground">
                        Please leave the keys on the kitchen counter and lock the door behind you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-rose-500" />
                    Climate Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-1">Thermostat</h3>
                      <p className="text-muted-foreground">
                        The thermostat is located in the hallway. Please keep temperature between 68-78°F.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Additional Heating/Cooling</h3>
                      <p className="text-muted-foreground">
                        Ceiling fans in each room. Extra blankets in the bedroom closet.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-emerald-500"
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
                    Emergency Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-1">Emergency Contacts</h3>
                      <p className="text-muted-foreground mb-1">Emergency Services: 911</p>
                      <p className="text-muted-foreground mb-1">Host Emergency Line: (555) 123-4567</p>
                      <p className="text-muted-foreground">Property Manager: (555) 987-6543</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Safety Equipment</h3>
                      <p className="text-muted-foreground mb-1">Fire Extinguisher: Under kitchen sink</p>
                      <p className="text-muted-foreground mb-1">First Aid Kit: Bathroom cabinet</p>
                      <p className="text-muted-foreground">Emergency Exit: Main door and sliding door to patio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appliances" className="mt-0">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-rose-500" />
                    Kitchen Appliances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Refrigerator</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              The refrigerator has an ice maker and filtered water dispenser on the door. Please make
                              sure the door is fully closed after use.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Refrigerator"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Stove and Oven</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              The stove is electric with a glass cooktop. Please use appropriate cookware and clean
                              after use. The oven has conventional and convection settings.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Stove and Oven"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Dishwasher</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              Dishwasher detergent pods are under the sink. Please run the dishwasher before check-out.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Dishwasher"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Microwave</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              The microwave is located above the stove. Please use microwave-safe containers only.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Microwave"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>Coffee Maker</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              We provide a drip coffee maker and a French press. Coffee, filters, and sugar are in the
                              cabinet above.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Coffee Maker"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tv className="h-5 w-5 text-blue-500" />
                    Entertainment Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Smart TV</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              The living room has a 55" Smart TV with Netflix, Hulu, and Amazon Prime. Use the black
                              remote for power and volume, and the silver remote for streaming services.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Smart TV"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Bluetooth Speaker</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              A portable Bluetooth speaker is available on the bookshelf. To connect, turn on the
                              speaker and select "BeachSpeaker" from your device's Bluetooth settings.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Bluetooth Speaker"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShowerHead className="h-5 w-5 text-emerald-500" />
                    Bathroom Fixtures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Shower</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-muted-foreground mb-4">
                              The shower has a rainfall showerhead and handheld option. Pull the diverter knob to switch
                              between them. Turn the handle left for hot water.
                            </p>
                          </div>
                          <div className="relative h-40 rounded-md overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt="Shower"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="mt-0">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Beach Equipment</CardTitle>
                  <CardDescription>
                    The following beach items are available for your use in the storage closet on the patio:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Beach chairs (4)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Beach umbrella
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cooler
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Beach towels (6)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sand toys
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Boogie boards (2)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Space</CardTitle>
                  <CardDescription>Enjoy our private patio area with the following amenities:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Outdoor dining table with 4 chairs
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Gas grill (propane provided)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lounge chairs (2)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Outdoor shower
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Amenities</CardTitle>
                  <CardDescription>Other amenities available for your comfort:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Washer and dryer (laundry detergent provided)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Iron and ironing board
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hair dryer
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Extra blankets and pillows
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Board games and playing cards
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Local guidebooks and maps
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rules" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>House Rules</CardTitle>
                <CardDescription>Please observe the following rules during your stay:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">General Rules</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-rose-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>No smoking anywhere on the property</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-rose-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>No parties or events without prior approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-amber-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <span>Pets allowed with prior approval and pet fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-amber-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <span>Quiet hours from 10:00 PM to 8:00 AM</span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Check-out Procedures</h3>
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
                        <span>Strip beds and place used linens in the laundry basket</span>
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
                        <span>Load and start dishwasher with any used dishes</span>
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
                        <span>Take out trash and recycling to bins outside</span>
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
                        <span>Turn off all lights and appliances</span>
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
                        <span>Lock all doors and windows</span>
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
                        <span>Leave keys on the kitchen counter</span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Additional Guidelines</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Please conserve water and energy when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Respect our neighbors and keep noise levels reasonable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Report any damages or issues promptly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 mt-0.5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Follow beach and local regulations when off property</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
