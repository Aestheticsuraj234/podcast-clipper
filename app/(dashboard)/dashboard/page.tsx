import DashboardHeader from "@/feature/dashboard/components/dashboard-header";
import ProcessingStepper from "@/feature/dashboard/components/processing-stepper";
import ResultsSection from "@/feature/dashboard/components/result-section";
import VideoUploadSection from "@/feature/dashboard/components/video-upload";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <VideoUploadSection />
          <ProcessingStepper />
          <ResultsSection />
        </div>
      </main>
    </div>
  )
}
