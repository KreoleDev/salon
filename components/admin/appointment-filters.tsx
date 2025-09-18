"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Calendar, Download } from "lucide-react"

export function AppointmentFilters() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search clients, services..." className="pl-10" />
          </div>

          {/* Date Range */}
          <div className="flex gap-2">
            <Input type="date" className="w-40" />
            <span className="flex items-center text-muted-foreground">to</span>
            <Input type="date" className="w-40" />
          </div>

          {/* Status Filter */}
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          {/* Service Filter */}
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="hair">Hair Services</SelectItem>
              <SelectItem value="facial">Facial Treatments</SelectItem>
              <SelectItem value="nails">Nail Services</SelectItem>
              <SelectItem value="spa">Spa Treatments</SelectItem>
              <SelectItem value="specialty">Specialty Services</SelectItem>
            </SelectContent>
          </Select>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
