"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Clock, AlertCircle, Zap, Scissors, Mic, Download } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  icon: React.ElementType
  status: "pending" | "processing" | "completed" | "error"
  progress?: number
  duration?: string
}

export default function ProcessingStepper() {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: "analysis",
      title: "Content Analysis",
      description: "AI is analyzing your content for key moments and topics",
      icon: Zap,
      status: "pending",
      progress: 0,
    },
    {
      id: "extraction",
      title: "Highlight Extraction",
      description: "Identifying the most engaging segments for short-form content",
      icon: Scissors,
      status: "pending",
      progress: 0,
    },
    {
      id: "generation",
      title: "Short Generation",
      description: "Creating optimized short clips with perfect timing",
      icon: Circle,
      status: "pending",
      progress: 0,
    },
    {
      id: "voiceover",
      title: "Voiceover Generation",
      description: "Adding AI-powered voiceovers in selected languages",
      icon: Mic,
      status: "pending",
      progress: 0,
    },
    {
      id: "finalization",
      title: "Finalization",
      description: "Preparing your shorts for download and sharing",
      icon: Download,
      status: "pending",
      progress: 0,
    },
  ])

  const [currentStepIndex, setCurrentStepIndex] = useState(-1)

  useEffect(() => {
    // Simulate processing steps
    const processSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStepIndex(i)

        // Update step to processing
        setSteps((prev) => prev.map((step, index) => (index === i ? { ...step, status: "processing" as const } : step)))

        // Simulate progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise((resolve) => setTimeout(resolve, 200))
          setSteps((prev) => prev.map((step, index) => (index === i ? { ...step, progress } : step)))
        }

        // Mark as completed
        setSteps((prev) =>
          prev.map((step, index) => (index === i ? { ...step, status: "completed" as const, progress: 100 } : step)),
        )

        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }

    // Start processing after a delay (simulating user action)
    const timer = setTimeout(() => {
      processSteps()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const getStepIcon = (step: Step, index: number) => {
    const IconComponent = step.icon

    if (step.status === "completed") {
      return <CheckCircle className="size-5 text-green-600" />
    }

    if (step.status === "processing") {
      return <div className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    }

    if (step.status === "error") {
      return <AlertCircle className="size-5 text-red-600" />
    }

    return <IconComponent className="size-5 text-muted-foreground" />
  }

  const getStatusBadge = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
            Completed
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="default" className="bg-blue-100 text-blue-800 border-blue-200">
            Processing
          </Badge>
        )
      case "error":
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="size-5" />
          Processing Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                {getStepIcon(step, index)}
                {index < steps.length - 1 && (
                  <div className={`w-px h-12 mt-2 ${step.status === "completed" ? "bg-green-200" : "bg-muted"}`} />
                )}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {getStatusBadge(step.status)}
                </div>

                {step.status === "processing" && (
                  <div className="space-y-2">
                    <Progress value={step.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{step.progress}% complete</p>
                  </div>
                )}

                {step.status === "completed" && step.duration && (
                  <p className="text-xs text-green-600">Completed in {step.duration}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
