import { AdminHeader } from "@/components/admin/admin-header"
import { ClientsTable } from "@/components/admin/clients-table"
import { ClientStats } from "@/components/admin/client-stats"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light mb-2">Client Management</h1>
              <p className="text-muted-foreground">Manage client profiles and appointment history</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Client
            </Button>
          </div>

          {/* Client Stats */}
          <ClientStats />

          {/* Clients Table */}
          <ClientsTable />
        </div>
      </main>
    </div>
  )
}
