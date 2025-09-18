"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Phone, Mail, Edit, Trash2, CheckCircle, XCircle } from "lucide-react"

const appointments = [
  {
    id: 1,
    client: "Emma Johnson",
    email: "emma@email.com",
    phone: "(555) 123-4567",
    service: "Hair Color & Cut",
    date: "2024-01-15",
    time: "9:00 AM",
    duration: "2h",
    price: 185,
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "First time client, allergic to ammonia",
  },
  {
    id: 2,
    client: "Michael Chen",
    email: "michael@email.com",
    phone: "(555) 234-5678",
    service: "Men's Cut & Style",
    date: "2024-01-15",
    time: "10:30 AM",
    duration: "45m",
    price: 65,
    status: "in-progress",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Regular client, prefers short sides",
  },
  {
    id: 3,
    client: "Sarah Williams",
    email: "sarah@email.com",
    phone: "(555) 345-6789",
    service: "Spa Pedicure",
    date: "2024-01-15",
    time: "11:15 AM",
    duration: "75m",
    price: 65,
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Prefers lavender scent",
  },
  {
    id: 4,
    client: "David Brown",
    email: "david@email.com",
    phone: "(555) 456-7890",
    service: "Deep Tissue Massage",
    date: "2024-01-16",
    time: "1:00 PM",
    duration: "60m",
    price: 110,
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Focus on lower back tension",
  },
  {
    id: 5,
    client: "Lisa Garcia",
    email: "lisa@email.com",
    phone: "(555) 567-8901",
    service: "Anti-Aging Facial",
    date: "2024-01-16",
    time: "2:30 PM",
    duration: "75m",
    price: 120,
    status: "confirmed",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Sensitive skin, use gentle products",
  },
  {
    id: 6,
    client: "Robert Wilson",
    email: "robert@email.com",
    phone: "(555) 678-9012",
    service: "Swedish Massage",
    date: "2024-01-17",
    time: "3:00 PM",
    duration: "60m",
    price: 95,
    status: "completed",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Regular weekly appointment",
  },
  {
    id: 7,
    client: "Jennifer Lee",
    email: "jennifer@email.com",
    phone: "(555) 789-0123",
    service: "Gel Manicure",
    date: "2024-01-17",
    time: "4:00 PM",
    duration: "60m",
    price: 50,
    status: "cancelled",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Cancelled due to illness",
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
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function AppointmentTable() {
  const [selectedAppointments, setSelectedAppointments] = useState<number[]>([])

  const handleStatusChange = (appointmentId: number, newStatus: string) => {
    console.log(`Changing appointment ${appointmentId} status to ${newStatus}`)
    // Here you would update the appointment status
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>All Appointments</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button variant="outline" size="sm">
            Print
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="w-[50px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
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
                        {appointment.notes && (
                          <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {appointment.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{appointment.service}</div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{appointment.date}</div>
                      <div className="text-sm text-muted-foreground">{appointment.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.duration}</TableCell>
                  <TableCell className="font-medium">${appointment.price}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(appointment.status)} variant="secondary">
                      {appointment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, "confirmed")}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Confirm
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, "completed")}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, "cancelled")}>
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancel
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
