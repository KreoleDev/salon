"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    // In a real app, this would check for valid tokens, session, etc.
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isAuthenticated") === "true"
      setIsAuthenticated(isLoggedIn)

      if (!isLoggedIn) {
        router.push("/login")
      }
    }

    checkAuth()
  }, [router])

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, don't render children (redirect will happen)
  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
