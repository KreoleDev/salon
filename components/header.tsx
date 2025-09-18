"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone, User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Serenity Salon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </Button>
            <Link href="/book">
              <Button className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full flex items-center gap-2 bg-transparent">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </Button>
                <Link href="/book" className="block">
                  <Button className="w-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </Button>
                </Link>
                <Link href="/login" className="block">
                  <Button variant="ghost" size="sm" className="w-full flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
