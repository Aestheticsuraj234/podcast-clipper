import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Podcast Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "This tool completely transformed my content strategy. I went from 1 long podcast per week to 10+ viral shorts across multiple languages. My audience grew 500% in just 2 months!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Marketing Manager",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The voice cloning feature is incredible. Our Spanish and French audiences can now enjoy our content in their native languages with the same host voice. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Digital Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "I was skeptical about AI-generated content, but the quality is outstanding. The clips it creates are exactly what I would have chosen manually, but in a fraction of the time.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            What Creators{" "}
            <span className="bg-gradient-to-r from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of creators who've transformed their content strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
