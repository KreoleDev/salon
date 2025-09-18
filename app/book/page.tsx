import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingWidget } from "@/components/booking-widget"

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6 text-balance">Schedule Your Visit</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book your appointment online and experience our luxury beauty services. Our team will contact you to
              confirm all details.
            </p>
          </div>
        </div>
      </section>

      <BookingWidget />

      <Footer />
    </main>
  )
}
