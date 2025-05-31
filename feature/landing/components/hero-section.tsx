import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 animate-gradient-x" />
      
      {/* Glassy overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 dark:bg-black/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-70 animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
            Podcast Clipper AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your podcasts into viral clips with AI-powered transcription, summarization, and multilingual voice synthesis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href={"/dashboard"} className="cursor-pointer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Creating Clips
            </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 px-8 py-3 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-black/50 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={24} />
        </div>
      </div>
    </section>
  )
}
