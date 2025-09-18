import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const topClients = [
  {
    name: "Emma Johnson",
    visits: 24,
    spent: 2840,
    lastVisit: "2 days ago",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Williams",
    visits: 18,
    spent: 2150,
    lastVisit: "1 week ago",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Lisa Garcia",
    visits: 15,
    spent: 1890,
    lastVisit: "3 days ago",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    visits: 12,
    spent: 980,
    lastVisit: "1 day ago",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function ClientsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topClients.map((client, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                  <AvatarFallback>
                    {client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{client.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {client.visits} visits • ${client.spent} spent
                  </div>
                  <div className="text-xs text-muted-foreground">Last visit: {client.lastVisit}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{client.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
