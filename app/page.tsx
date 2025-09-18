import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { BookingCTA } from "@/components/booking-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesPreview />
      <BookingCTA />
      <Footer />
    </main>
  )
}
