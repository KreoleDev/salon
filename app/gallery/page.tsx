import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Share2 } from "lucide-react"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      image: "/gallery-hair-transformation-blonde-balayage.jpg",
      category: "Hair Styling",
      title: "Blonde Balayage Transformation",
      description: "Stunning blonde balayage with face-framing highlights",
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      image: "/gallery-nail-art-french-manicure.jpg",
      category: "Nail Art",
      title: "Classic French Manicure",
      description: "Timeless elegance with modern twist",
      likes: 89,
      comments: 12,
    },
    {
      id: 3,
      image: "/gallery-facial-glow-treatment.jpg",
      category: "Facial Treatment",
      title: "Hydrating Glow Facial",
      description: "Radiant skin after our signature facial treatment",
      likes: 156,
      comments: 23,
    },
    {
      id: 4,
      image: "/gallery-hair-color-brunette.jpg",
      category: "Hair Color",
      title: "Rich Brunette Color",
      description: "Deep chocolate brown with subtle highlights",
      likes: 98,
      comments: 15,
    },
    {
      id: 5,
      image: "/gallery-eyebrow-shaping.jpg",
      category: "Eyebrow Styling",
      title: "Perfect Brow Shaping",
      description: "Expertly shaped and tinted eyebrows",
      likes: 67,
      comments: 8,
    },
    {
      id: 6,
      image: "/gallery-spa-massage-relaxation.jpg",
      category: "Spa Treatment",
      title: "Relaxing Spa Experience",
      description: "Ultimate relaxation with our signature massage",
      likes: 143,
      comments: 19,
    },
    {
      id: 7,
      image: "/gallery-hair-updo-wedding.jpg",
      category: "Special Occasion",
      title: "Elegant Wedding Updo",
      description: "Romantic bridal hairstyle for the perfect day",
      likes: 201,
      comments: 34,
    },
    {
      id: 8,
      image: "/gallery-makeup-natural-glow.jpg",
      category: "Makeup",
      title: "Natural Glam Look",
      description: "Flawless makeup for everyday elegance",
      likes: 112,
      comments: 16,
    },
    {
      id: 9,
      image: "/gallery-hair-cut-modern-bob.jpg",
      category: "Hair Cut",
      title: "Modern Bob Cut",
      description: "Chic and sophisticated bob with layers",
      likes: 87,
      comments: 11,
    },
  ]

  const categories = [
    "All",
    "Hair Styling",
    "Hair Color",
    "Hair Cut",
    "Nail Art",
    "Facial Treatment",
    "Makeup",
    "Spa Treatment",
    "Special Occasion",
    "Eyebrow Styling",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">Our Work</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
            Beauty Transformations Gallery
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the artistry and expertise of our talented team through these stunning transformations. Each image
            tells a story of confidence, beauty, and exceptional craftsmanship.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Book Your Transformation
          </Button>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-amber-600 hover:bg-amber-700" : "hover:bg-amber-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-stone-800 hover:bg-white">{item.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-stone-500">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Before & After Transformations</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              See the incredible transformations our expert team has achieved for our valued clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/gallery-before-after-hair-color.jpg"
                  alt="Hair Color Transformation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Hair Color Transformation
                </div>
              </div>
              <div className="relative">
                <img
                  src="/gallery-before-after-facial.jpg"
                  alt="Facial Treatment Results"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Facial Treatment Results
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/gallery-before-after-haircut.jpg"
                  alt="Haircut Transformation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Haircut Transformation
                </div>
              </div>
              <div className="relative">
                <img
                  src="/gallery-before-after-makeup.jpg"
                  alt="Makeup Transformation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  Makeup Transformation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have discovered their best look at Luxe Beauty Salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-stone-50">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
