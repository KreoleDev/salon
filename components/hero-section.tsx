import { Button } from "@/components/ui/button"
import { Calendar, Star, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-balance">
                Transform your beauty
                <span className="block font-normal italic">meets exquisite care</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Experience luxury beauty services in our serene sanctuary. From precision cuts to rejuvenating
                treatments, we craft personalized experiences that enhance your natural radiance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="flex items-center gap-2 text-base px-8 py-6">
                  <Calendar className="h-5 w-5" />
                  Book Your Experience
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-base px-8 py-6 bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-semibold">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-semibold">2K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-semibold">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/elegant-salon-interior-with-modern-styling-chairs-.jpg"
                alt="Elegant salon interior"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Next Available</div>
                  <div className="text-sm text-muted-foreground">Today at 2:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
