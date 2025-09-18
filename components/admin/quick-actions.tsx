import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, UserPlus, MessageSquare, Settings, BarChart3, Clock } from "lucide-react"

const actions = [
  {
    title: "New Appointment",
    description: "Schedule a new client appointment",
    icon: Calendar,
    color: "bg-blue-500",
  },
  {
    title: "Add Client",
    description: "Register a new client profile",
    icon: UserPlus,
    color: "bg-green-500",
  },
  {
    title: "Send Reminders",
    description: "Send appointment reminders",
    icon: MessageSquare,
    color: "bg-purple-500",
  },
  {
    title: "View Reports",
    description: "Access business analytics",
    icon: BarChart3,
    color: "bg-orange-500",
  },
  {
    title: "Manage Schedule",
    description: "Update availability and hours",
    icon: Clock,
    color: "bg-teal-500",
  },
  {
    title: "Settings",
    description: "Configure salon preferences",
    icon: Settings,
    color: "bg-gray-500",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-muted/50 bg-transparent"
            >
              <div className={`p-2 rounded-lg ${action.color} text-white`}>
                <action.icon className="h-4 w-4" />
              </div>
              <div className="text-center">
                <div className="font-medium text-xs">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
