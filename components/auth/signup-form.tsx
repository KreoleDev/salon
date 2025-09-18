"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, Building } from "lucide-react"
import { useRouter } from "next/navigation"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    salonName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, redirect to login
      router.push("/login")
    }, 1500)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            First Name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      {/* Salon Name */}
      <div className="space-y-2">
        <Label htmlFor="salonName" className="flex items-center gap-2">
          <Building className="h-4 w-4" />
          Salon Name
        </Label>
        <Input
          id="salonName"
          value={formData.salonName}
          onChange={(e) => handleInputChange("salonName", e.target.value)}
          placeholder="Your Salon Name"
          required
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="john@yoursalon.com"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password" className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Create a strong password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            placeholder="Confirm your password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm leading-relaxed">
          I agree to the{" "}
          <Button variant="link" className="px-0 h-auto text-sm">
            Terms of Service
          </Button>{" "}
          and{" "}
          <Button variant="link" className="px-0 h-auto text-sm">
            Privacy Policy
          </Button>
        </Label>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  )
}
