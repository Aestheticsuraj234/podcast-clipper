"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Play, Share2, Eye, Clock, Languages } from "lucide-react"
import Image from "next/image"

interface GeneratedShort {
  id: string
  title: string
  duration: string
  language: string
  thumbnail: string
  views?: number
  status: "ready" | "processing" | "failed"
}

export default function ResultsSection() {
  const [generatedShorts] = useState<GeneratedShort[]>([
    {
      id: "1",
      title: "Key Insight: The Future of AI",
      duration: "0:45",
      language: "English",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: 1250,
      status: "ready",
    },
    {
      id: "2",
      title: "Breakthrough Moment Discussion",
      duration: "0:38",
      language: "Spanish",
      thumbnail: "/placeholder.svg?height=120&width=200",
      views: 890,
      status: "ready",
    },
    {
      id: "3",
      title: "Expert Opinion on Innovation",
      duration: "0:52",
      language: "French",
      thumbnail: "/placeholder.svg?height=120&width=200",
      status: "processing",
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="size-5" />
          Generated Shorts
        </CardTitle>
        <CardDescription>Your AI-generated short clips are ready for download and sharing</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Shorts (3)</TabsTrigger>
            <TabsTrigger value="ready">Ready (2)</TabsTrigger>
            <TabsTrigger value="processing">Processing (1)</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4">
              {generatedShorts.map((short) => (
                <Card key={short.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={short.thumbnail || "/placeholder.svg"}
                          alt={short.title}
                          width={200}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button size="icon" variant="secondary" className="size-12 rounded-full">
                            <Play className="size-6" />
                          </Button>
                        </div>
                        <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">{short.duration}</Badge>
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{short.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <Languages className="size-4" />
                                {short.language}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="size-4" />
                                {short.duration}
                              </div>
                              {short.views && (
                                <div className="flex items-center gap-1">
                                  <Eye className="size-4" />
                                  {short.views.toLocaleString()} views
                                </div>
                              )}
                            </div>
                          </div>
                          <Badge variant={short.status === "ready" ? "default" : "secondary"}>
                            {short.status === "ready" ? "Ready" : "Processing"}
                          </Badge>
                        </div>

                        {short.status === "ready" && (
                          <div className="flex gap-2">
                            <Button size="sm">
                              <Download className="size-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="size-4 mr-2" />
                              Share
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="size-4 mr-2" />
                              Preview
                            </Button>
                          </div>
                        )}

                        {short.status === "processing" && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Generating voiceover...
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ready">
            <div className="text-center py-8 text-muted-foreground">
              <p>Showing only ready shorts...</p>
            </div>
          </TabsContent>

          <TabsContent value="processing">
            <div className="text-center py-8 text-muted-foreground">
              <p>Showing only processing shorts...</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
