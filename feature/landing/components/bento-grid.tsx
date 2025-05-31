
import { Card } from "@/components/ui/card"
import { Upload, FileText, Share, Download } from "lucide-react"

const features = [
  {
    title: "Upload & Process",
    description: "Upload your podcast or paste a link. Our AI handles the rest.",
    icon: Upload,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Transcription",
    description: "Advanced speech-to-text with speaker identification and timestamps.",
    icon: FileText,
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Smart Summarization",
    description: "Extract key moments and generate engaging clip scripts automatically.",
    icon: FileText,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Multilingual Voice",
    description: "Murf AI streaming for natural voice synthesis in multiple languages.",
    icon: Share,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Export & Share",
    description: "Download clips or share directly to social platforms.",
    icon: Download,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-indigo-500 to-purple-500"
  }
]

export function BentoGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From podcast to viral clips in minutes with our AI-powered workflow
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[200px]">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card 
              key={index}
              className={`${feature.className} relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-xl`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}