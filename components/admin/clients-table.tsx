import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Phone, Mail, Edit, Calendar, Star } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "Emma Johnson",
    email: "emma@email.com",
    phone: "(555) 123-4567",
    totalVisits: 24,
    totalSpent: 2840,
    lastVisit: "2024-01-10",
    nextAppointment: "2024-01-15",
    rating: 5,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Prefers morning appointments, allergic to ammonia",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@email.com",
    phone: "(555) 234-5678",
    totalVisits: 18,
    totalSpent: 1170,
    lastVisit: "2024-01-08",
    nextAppointment: "2024-01-15",
    rating: 5,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Regular monthly cuts, prefers short styles",
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah@email.com",
    phone: "(555) 345-6789",
    totalVisits: 15,
    totalSpent: 1890,
    lastVisit: "2024-01-05",
    nextAppointment: "2024-01-20",
    rating: 4,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Enjoys spa treatments, prefers lavender scents",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@email.com",
    phone: "(555) 456-7890",
    totalVisits: 12,
    totalSpent: 1320,
    lastVisit: "2023-12-20",
    nextAppointment: null,
    rating: 5,
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Focus on therapeutic massage, lower back issues",
  },
  {
    id: 5,
    name: "Lisa Garcia",
    email: "lisa@email.com",
    phone: "(555) 567-8901",
    totalVisits: 22,
    totalSpent: 2640,
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-16",
    rating: 5,
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    notes: "Sensitive skin, uses only organic products",
  },
]

export function ClientsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>All Clients</CardTitle>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search clients..." className="pl-10 w-64" />
          </div>
          <Button variant="outline" size="sm">
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                        <AvatarFallback>
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{client.name}</div>
                        {client.notes && (
                          <div className="text-xs text-muted-foreground truncate max-w-[200px]">{client.notes}</div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm">{client.email}</div>
                      <div className="text-sm text-muted-foreground">{client.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{client.totalVisits}</TableCell>
                  <TableCell className="font-medium">${client.totalSpent}</TableCell>
                  <TableCell>{client.lastVisit}</TableCell>
                  <TableCell>{client.nextAppointment || "None scheduled"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{client.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        client.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                      variant="secondary"
                    >
                      {client.status}
                    </Badge>
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
                          Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Appointment
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Client
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
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
