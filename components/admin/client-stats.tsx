import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserPlus, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    title: "Total Clients",
    value: "847",
    change: "+23 this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "New Clients",
    value: "23",
    change: "+15% from last month",
    icon: UserPlus,
    trend: "up",
  },
  {
    title: "Returning Clients",
    value: "89%",
    change: "Excellent retention",
    icon: TrendingUp,
    trend: "stable",
  },
  {
    title: "Avg. Visits/Month",
    value: "2.4",
    change: "+0.3 from last month",
    icon: Calendar,
    trend: "up",
  },
]

export function ClientStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
