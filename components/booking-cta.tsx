import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function BookingCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-0 bg-primary text-primary-foreground">
          <CardContent className="p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-light leading-tight text-balance">
                  Ready to experience
                  <span className="block italic">luxury beauty care?</span>
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Book your appointment today and let our expert team create a personalized beauty experience that
                  leaves you feeling refreshed and radiant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book">
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Online Now
                    </Button>
                  </Link>
                  <Link href="tel:+15551234567">
                    <Button className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call (555) 123-4567
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/10">
                    <Clock className="h-5 w-5 opacity-80" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm opacity-80">Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/10">
                    <MapPin className="h-5 w-5 opacity-80" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm opacity-80">123 Beauty Lane, Wellness District</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
