import { AdminHeader } from "@/components/admin/admin-header"
import { AppointmentCalendar } from "@/components/admin/appointment-calendar"
import { AppointmentFilters } from "@/components/admin/appointment-filters"
import { AppointmentTable } from "@/components/admin/appointment-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light mb-2">Appointment Management</h1>
              <p className="text-muted-foreground">Manage all salon appointments and schedules</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Appointment
            </Button>
          </div>

          {/* Filters */}
          <AppointmentFilters />

          {/* Calendar View */}
          <AppointmentCalendar />

          {/* Table View */}
          <AppointmentTable />
        </div>
      </main>
    </div>
  )
}
