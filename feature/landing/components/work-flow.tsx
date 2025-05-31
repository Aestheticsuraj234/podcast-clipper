import React from 'react'

const WorkFlow = () => {
   const steps = [
    {
      number: "01",
      title: "Upload",
      description: "Upload podcast file or paste link",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "02", 
      title: "Transcribe",
      description: "AI transcription with speaker ID",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Summarize", 
      description: "Extract key moments & scripts",
      color: "from-green-500 to-teal-500"
    },
    {
      number: "04",
      title: "Generate",
      description: "Murf AI voice in multiple languages",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "05",
      title: "Export",
      description: "Download or share your clips",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Simple WorkFlow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Five steps to viral podcast clips
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-orange-500 to-indigo-500 opacity-30 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step circle */}
                <div className={`relative mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-glow`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )


}

export default WorkFlow