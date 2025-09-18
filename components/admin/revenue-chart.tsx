"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", revenue: 1200, appointments: 8 },
  { name: "Tue", revenue: 1800, appointments: 12 },
  { name: "Wed", revenue: 1500, appointments: 10 },
  { name: "Thu", revenue: 2200, appointments: 15 },
  { name: "Fri", revenue: 2800, appointments: 18 },
  { name: "Sat", revenue: 3200, appointments: 22 },
  { name: "Sun", revenue: 1600, appointments: 11 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [
                name === "revenue" ? `$${value}` : value,
                name === "revenue" ? "Revenue" : "Appointments",
              ]}
            />
            <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
