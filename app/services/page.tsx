import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { BookingWidget } from "@/components/booking-widget"
import { Scissors, Sparkles, Heart, Palette, Zap, Flower2 } from "lucide-react"

const serviceCategories = [
  {
    id: "hair",
    title: "Hair Services",
    icon: Scissors,
    description: "Professional cuts, styling, and color treatments",
    services: [
      {
        name: "Women's Cut & Style",
        duration: "60 min",
        price: 85,
        description: "Precision cut with professional styling",
      },
      { name: "Men's Cut & Style", duration: "45 min", price: 65, description: "Classic and modern cuts with styling" },
      { name: "Hair Color", duration: "120 min", price: 150, description: "Full color service with consultation" },
      { name: "Highlights", duration: "180 min", price: 200, description: "Professional highlighting techniques" },
      { name: "Balayage", duration: "180 min", price: 250, description: "Hand-painted natural-looking highlights" },
      { name: "Hair Treatment", duration: "45 min", price: 75, description: "Deep conditioning and repair treatment" },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatments",
    icon: Sparkles,
    description: "Rejuvenating skincare and anti-aging treatments",
    services: [
      { name: "Classic Facial", duration: "60 min", price: 85, description: "Deep cleansing and moisturizing facial" },
      { name: "Anti-Aging Facial", duration: "75 min", price: 120, description: "Advanced treatment for mature skin" },
      { name: "Acne Treatment", duration: "60 min", price: 95, description: "Specialized treatment for problem skin" },
      { name: "Hydrating Facial", duration: "60 min", price: 90, description: "Intensive moisture restoration" },
      { name: "Chemical Peel", duration: "45 min", price: 110, description: "Professional exfoliation treatment" },
      { name: "Microdermabrasion", duration: "60 min", price: 100, description: "Diamond-tip skin resurfacing" },
    ],
  },
  {
    id: "nails",
    title: "Nail Services",
    icon: Palette,
    description: "Manicures, pedicures, and nail art",
    services: [
      { name: "Classic Manicure", duration: "45 min", price: 35, description: "Traditional nail care and polish" },
      { name: "Gel Manicure", duration: "60 min", price: 50, description: "Long-lasting gel polish application" },
      { name: "Classic Pedicure", duration: "60 min", price: 45, description: "Complete foot care and polish" },
      { name: "Spa Pedicure", duration: "75 min", price: 65, description: "Luxurious foot treatment with massage" },
      { name: "Nail Art", duration: "30 min", price: 25, description: "Custom nail designs and decorations" },
      { name: "French Manicure", duration: "60 min", price: 45, description: "Classic French tip styling" },
    ],
  },
  {
    id: "spa",
    title: "Spa Treatments",
    icon: Heart,
    description: "Relaxing massage and body treatments",
    services: [
      { name: "Swedish Massage", duration: "60 min", price: 95, description: "Relaxing full-body massage" },
      { name: "Deep Tissue Massage", duration: "60 min", price: 110, description: "Therapeutic muscle tension relief" },
      { name: "Hot Stone Massage", duration: "75 min", price: 130, description: "Heated stone therapy massage" },
      {
        name: "Aromatherapy Massage",
        duration: "60 min",
        price: 105,
        description: "Essential oil therapeutic massage",
      },
      { name: "Body Wrap", duration: "90 min", price: 140, description: "Detoxifying and moisturizing body treatment" },
      { name: "Couples Massage", duration: "60 min", price: 190, description: "Side-by-side relaxation experience" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Services",
    icon: Zap,
    description: "Advanced beauty and wellness treatments",
    services: [
      { name: "Eyebrow Threading", duration: "30 min", price: 25, description: "Precise eyebrow shaping" },
      { name: "Eyelash Extensions", duration: "120 min", price: 150, description: "Individual lash application" },
      { name: "Makeup Application", duration: "45 min", price: 65, description: "Professional makeup for events" },
      { name: "Bridal Package", duration: "180 min", price: 300, description: "Complete bridal beauty preparation" },
      { name: "Waxing Services", duration: "30 min", price: 40, description: "Professional hair removal" },
      { name: "Teeth Whitening", duration: "60 min", price: 120, description: "Professional whitening treatment" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness Treatments",
    icon: Flower2,
    description: "Holistic health and relaxation services",
    services: [
      { name: "Reflexology", duration: "60 min", price: 85, description: "Therapeutic foot pressure point massage" },
      { name: "Reiki Session", duration: "60 min", price: 90, description: "Energy healing and relaxation" },
      { name: "Meditation Session", duration: "45 min", price: 60, description: "Guided mindfulness practice" },
      { name: "Yoga Class", duration: "60 min", price: 25, description: "Group or private yoga instruction" },
      { name: "Nutrition Consultation", duration: "60 min", price: 80, description: "Personalized wellness planning" },
      {
        name: "Wellness Package",
        duration: "180 min",
        price: 200,
        description: "Combined treatments for total wellness",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6 text-balance">Complete beauty & wellness services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our comprehensive range of professional services designed to enhance your natural beauty and
              promote overall wellness in our luxurious, serene environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <BookingWidget />

      <Footer />
    </main>
  )
}
