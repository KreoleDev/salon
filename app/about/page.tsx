import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Est. 2015</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
                Your Beauty Journey Starts Here
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                For over 8 years, Luxe Beauty Salon has been transforming lives through exceptional beauty services. Our
                passion for excellence and commitment to personalized care has made us the premier destination for
                discerning clients who demand nothing but the best.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/elegant-salon-interior-with-modern-styling-chairs-.jpg"
                alt="Luxe Beauty Salon Interior"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-amber-500 fill-current" />
                  <span className="font-semibold text-stone-900">4.9/5</span>
                </div>
                <p className="text-sm text-stone-600">1,200+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-stone-900 mb-2">1,200+</div>
              <div className="text-stone-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-stone-900 mb-2">8+</div>
              <div className="text-stone-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-stone-900 mb-2">50+</div>
              <div className="text-stone-600">Services Offered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-stone-900 mb-2">24/7</div>
              <div className="text-stone-600">Online Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-stone-600">
            <p className="mb-6">
              Founded in 2015 by master stylist Elena Rodriguez, Luxe Beauty Salon began as a dream to create a
              sanctuary where beauty meets artistry. What started as a small boutique salon has grown into the city's
              most sought-after beauty destination.
            </p>
            <p className="mb-6">
              Our philosophy is simple: every client deserves to feel extraordinary. We combine cutting-edge techniques
              with timeless elegance, using only the finest products and tools to deliver results that exceed
              expectations.
            </p>
            <p>
              Today, our team of certified professionals continues to push the boundaries of beauty innovation while
              maintaining the personal touch that has made us a beloved part of the community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our talented professionals are passionate about helping you look and feel your absolute best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-100"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-stone-900 mb-1">Elena Rodriguez</h3>
                <p className="text-amber-600 mb-3">Founder & Master Stylist</p>
                <p className="text-sm text-stone-600">
                  15+ years of experience in luxury hair styling and color artistry.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-amber-100"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-stone-900 mb-1">Marcus Chen</h3>
                <p className="text-amber-600 mb-3">Senior Colorist</p>
                <p className="text-sm text-stone-600">Specialist in balayage and creative color transformations.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-100"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-stone-900 mb-1">Sophia Williams</h3>
                <p className="text-amber-600 mb-3">Spa & Wellness Director</p>
                <p className="text-sm text-stone-600">Expert in facial treatments and holistic wellness therapies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Our Values</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Luxe Beauty Salon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Excellence</h3>
              <p className="text-stone-600">
                We never compromise on quality, using only premium products and advanced techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Personalization</h3>
              <p className="text-stone-600">
                Every service is tailored to your unique style, preferences, and lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Innovation</h3>
              <p className="text-stone-600">
                We stay ahead of trends, continuously learning and adopting the latest beauty innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
