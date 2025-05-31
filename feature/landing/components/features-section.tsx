import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "AI-Powered Transcription",
      description: "Advanced speech recognition with 99% accuracy and speaker identification",
      image: "🎙️"
    },
    {
      title: "Smart Content Analysis", 
      description: "Automatically identify viral moments and generate engaging clip scripts",
      image: "🤖"
    },
    {
      title: "Multilingual Support",
      description: "Support for 50+ languages with natural voice synthesis using Murf AI",
      image: "🌍"
    },
    {
      title: "Instant Sharing",
      description: "One-click sharing to social platforms or download in multiple formats",
      image: "📱"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to create viral podcast clips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.image}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}