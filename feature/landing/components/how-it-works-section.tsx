import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Scissors, Mic } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Podcast",
    description: "Simply drag and drop your podcast file or paste a URL. We support all major audio formats.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Scissors,
    title: "AI Creates Shorts",
    description:
      "Our AI analyzes your content and automatically generates engaging highlight clips with perfect timing.",
    color: "from-red-500 to-fuchsia-500",
  },
  {
    icon: Mic,
    title: "Murf API Voiceover",
    description: "Get studio-quality voiceovers in 50+ languages with natural-sounding AI voices.",
    color: "from-fuchsia-500 to-orange-500",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your long-form content into viral shorts in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:scale-105 transition-all duration-300 border-0 shadow-xl hover:shadow-2xl bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`size-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="size-full text-white" />
                </div>
                <div className="absolute -top-4 -left-4 size-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
