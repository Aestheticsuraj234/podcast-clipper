import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-red-600 via-fuchsia-600 to-orange-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-medium mb-8">
            <Sparkles className="size-5" />
            Limited Time: 50% Off First Month
          </div>

          <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Turn Your Podcast into <span className="text-yellow-300">10x More Content</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Stop leaving money on the table. Transform your long-form content into viral shorts that reach global
            audiences in their native languages.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-yellow-300 hover:text-red-700 font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-110 group"
            >
              Generate My Shorts
              <ArrowRight className="size-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <div className="text-white/80 text-sm">
              ✓ No credit card required
              <br />✓ 3 free shorts included
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">2M+</div>
              <div className="text-white/80 text-sm">Shorts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">50+</div>
              <div className="text-white/80 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">10k+</div>
              <div className="text-white/80 text-sm">Happy Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">99%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
