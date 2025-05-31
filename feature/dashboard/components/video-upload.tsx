"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Link, Play } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VideoUploadSection() {
  const [videoUrl, setVideoUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = () => {
    if (!videoUrl.trim()) return
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="size-5" />
          Upload Content
        </CardTitle>
        <CardDescription>
          Upload your podcast or video content to get started with AI-powered short generation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="url">Paste URL</TabsTrigger>
            <TabsTrigger value="upload">Upload File</TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="video-url">Video/Podcast URL</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Link className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <Input
                    id="video-url"
                    placeholder="https://youtube.com/watch?v=... or podcast URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleSubmit} disabled={!videoUrl.trim() || isProcessing}>
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Processing
                    </div>
                  ) : (
                    <>
                      <Play className="size-4 mr-2" />
                      Process
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Add a description to help our AI understand your content better..."
                className="min-h-[80px]"
              />
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="size-12 mx-auto text-muted-foreground mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop your files here or click to browse</p>
                <p className="text-xs text-muted-foreground">
                  Supports MP4, MP3, WAV, and other audio/video formats (max 2GB)
                </p>
              </div>
              <Button variant="outline" className="mt-4">
                Choose Files
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
