import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Phone, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const appointments = [
  {
    id: 1,
    client: "Emma Johnson",
    service: "Hair Color & Cut",
    time: "9:00 AM",
    duration: "2h",
    price: 185,
    status: "confirmed",
    phone: "(555) 123-4567",
    email: "emma@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    client: "Michael Chen",
    service: "Men's Cut & Style",
    time: "10:30 AM",
    duration: "45m",
    price: 65,
    status: "in-progress",
    phone: "(555) 234-5678",
    email: "michael@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    client: "Sarah Williams",
    service: "Spa Pedicure",
    time: "11:15 AM",
    duration: "75m",
    price: 65,
    status: "confirmed",
    phone: "(555) 345-6789",
    email: "sarah@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    client: "David Brown",
    service: "Deep Tissue Massage",
    time: "1:00 PM",
    duration: "60m",
    price: 110,
    status: "pending",
    phone: "(555) 456-7890",
    email: "david@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    client: "Lisa Garcia",
    service: "Anti-Aging Facial",
    time: "2:30 PM",
    duration: "75m",
    price: 120,
    status: "confirmed",
    phone: "(555) 567-8901",
    email: "lisa@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800"
    case "in-progress":
      return "bg-blue-100 text-blue-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "completed":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function AppointmentsList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Today's Appointments</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.client} />
                  <AvatarFallback>
                    {appointment.client
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{appointment.client}</div>
                  <div className="text-sm text-muted-foreground">{appointment.service}</div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {appointment.time} ({appointment.duration})
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {appointment.phone}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="font-semibold">${appointment.price}</div>
                  <Badge className={getStatusColor(appointment.status)} variant="secondary">
                    {appointment.status}
                  </Badge>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                    <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
