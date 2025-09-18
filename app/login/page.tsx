import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-2xl font-semibold">Serenity Salon</span>
          </Link>
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-light">Welcome back</CardTitle>
            <p className="text-muted-foreground">Sign in to access your admin dashboard</p>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
