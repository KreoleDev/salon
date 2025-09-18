import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Calendar } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  name: string
  duration: string
  price: number
  description: string
}

interface ServiceCategory {
  id: string
  title: string
  icon: LucideIcon
  description: string
  services: Service[]
}

interface ServiceCardProps {
  category: ServiceCategory
}

export function ServiceCard({ category }: ServiceCardProps) {
  const IconComponent = category.icon

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center gap-4 pb-4 border-b">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
                <Badge variant="secondary" className="ml-2 font-semibold">
                  ${service.price}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {service.price}
                </div>
              </div>

              <Button className="w-full flex items-center gap-2 group-hover:bg-primary/90 transition-colors">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
