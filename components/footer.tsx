import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-semibold">Serenity Salon</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your premier destination for luxury beauty services and wellness treatments in a serene, professional
              environment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/hair"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Hair Services
              </Link>
              <Link
                href="/services/facial"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Facial Treatments
              </Link>
              <Link
                href="/services/nails"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Nail Services
              </Link>
              <Link
                href="/services/spa"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Spa Treatments
              </Link>
              <Link
                href="/services/massage"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Massage Therapy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Beauty Lane, Wellness District</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@serenitysalon.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive beauty tips, special offers, and appointment reminders.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Serenity Salon. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
