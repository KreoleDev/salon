import { AdminHeader } from "@/components/admin/admin-header"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { AppointmentsList } from "@/components/admin/appointments-list"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { ClientsOverview } from "@/components/admin/clients-overview"
import { QuickActions } from "@/components/admin/quick-actions"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-light mb-2">Welcome back, Sarah</h1>
            <p className="text-muted-foreground">Here's what's happening at Serenity Salon today</p>
          </div>

          {/* Stats Overview */}
          <DashboardStats />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Appointments */}
            <div className="lg:col-span-2 space-y-8">
              <AppointmentsList />
              <RevenueChart />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              <QuickActions />
              <ClientsOverview />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
