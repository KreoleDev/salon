import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign, Users, TrendingUp, Clock, Star } from "lucide-react"

const stats = [
  {
    title: "Today's Appointments",
    value: "12",
    change: "+2 from yesterday",
    icon: Calendar,
    trend: "up",
  },
  {
    title: "Daily Revenue",
    value: "$1,240",
    change: "+15% from yesterday",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Active Clients",
    value: "847",
    change: "+23 this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Average Rating",
    value: "4.9",
    change: "Excellent service",
    icon: Star,
    trend: "stable",
  },
  {
    title: "Utilization Rate",
    value: "87%",
    change: "+5% this week",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Avg. Service Time",
    value: "68 min",
    change: "Within target",
    icon: Clock,
    trend: "stable",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.trend === "up"
                  ? "text-green-600"
                  : stat.trend === "down"
                    ? "text-red-600"
                    : "text-muted-foreground"
              }`}
            >
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
