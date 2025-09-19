import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Heart, Palette, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Hair Services",
    description: "Precision cuts, styling, and color treatments by master stylists",
    price: "From $65",
    duration: "60-120 min",
    image: "/professional-hair-styling-in-modern-salon.jpg",
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facials and advanced skincare treatments",
    price: "From $85",
    duration: "45-90 min",
    image: "/relaxing-facial-treatment-in-spa-setting.jpg",
  },
  {
    icon: Palette,
    title: "Nail Services",
    description: "Manicures, pedicures, and artistic nail designs",
    price: "From $35",
    duration: "30-60 min",
    image: "/elegant-nail-art-and-manicure-station.jpg",
  },
  {
    icon: Heart,
    title: "Spa Treatments",
    description: "Massage therapy and full-body wellness experiences",
    price: "From $95",
    duration: "60-120 min",
    image: "/serene-spa-massage-room-with-soft-lighting.jpg",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light mb-4 text-balance">Our signature services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty and wellness services, each designed to enhance your natural
            beauty and provide ultimate relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative rounded-t-lg overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="font-semibold text-primary">{service.price}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
