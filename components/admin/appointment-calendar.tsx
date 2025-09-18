"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

const appointments = [
  {
    id: 1,
    client: "Emma Johnson",
    service: "Hair Color & Cut",
    time: "9:00 AM",
    duration: 120,
    status: "confirmed",
    date: "2024-01-15",
  },
  {
    id: 2,
    client: "Michael Chen",
    service: "Men's Cut",
    time: "10:30 AM",
    duration: 45,
    status: "in-progress",
    date: "2024-01-15",
  },
  {
    id: 3,
    client: "Sarah Williams",
    service: "Spa Pedicure",
    time: "11:15 AM",
    duration: 75,
    status: "confirmed",
    date: "2024-01-15",
  },
  {
    id: 4,
    client: "David Brown",
    service: "Deep Tissue Massage",
    time: "1:00 PM",
    duration: 60,
    status: "pending",
    date: "2024-01-16",
  },
  {
    id: 5,
    client: "Lisa Garcia",
    service: "Anti-Aging Facial",
    time: "2:30 PM",
    duration: 75,
    status: "confirmed",
    date: "2024-01-16",
  },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
]

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const currentWeek = ["15", "16", "17", "18", "19", "20", "21"]

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800 border-green-200"
    case "in-progress":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "completed":
      return "bg-gray-100 text-gray-800 border-gray-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getAppointmentsForDay = (day: string) => {
    return appointments.filter((apt) => apt.date.endsWith(day))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Weekly Calendar View</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium px-4">January 15-21, 2024</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-8 gap-2">
          {/* Time Column */}
          <div className="space-y-2">
            <div className="h-12 flex items-center justify-center text-sm font-medium">Time</div>
            {timeSlots.map((time, index) => (
              <div key={index} className="h-16 flex items-center justify-center text-xs text-muted-foreground border-r">
                {time}
              </div>
            ))}
          </div>

          {/* Day Columns */}
          {weekDays.map((day, dayIndex) => (
            <div key={day} className="space-y-2">
              <div className="h-12 flex flex-col items-center justify-center border-b">
                <div className="text-sm font-medium">{day}</div>
                <div className="text-lg font-semibold">{currentWeek[dayIndex]}</div>
              </div>

              {timeSlots.map((time, timeIndex) => {
                const dayAppointments = getAppointmentsForDay(currentWeek[dayIndex])
                const appointment = dayAppointments.find((apt) => apt.time === time)

                return (
                  <div key={timeIndex} className="h-16 border border-border/50 rounded relative">
                    {appointment && (
                      <div
                        className={`absolute inset-1 rounded p-2 text-xs ${getStatusColor(appointment.status)} cursor-pointer hover:shadow-sm transition-shadow`}
                      >
                        <div className="font-medium truncate">{appointment.client}</div>
                        <div className="truncate">{appointment.service}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{appointment.duration}m</span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
