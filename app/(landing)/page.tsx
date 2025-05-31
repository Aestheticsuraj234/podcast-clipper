import { BentoGrid } from "@/feature/landing/components/bento-grid";
import CTASection from "@/feature/landing/components/cta-section";
import { Features } from "@/feature/landing/components/features-section";
import { Hero } from "@/feature/landing/components/hero-section";

import HowItWorksSection from "@/feature/landing/components/how-it-works-section";
import TestimonialsSection from "@/feature/landing/components/testimonials-section";
import WorkFlow from "@/feature/landing/components/work-flow";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
   
      <Features />
      <BentoGrid/>
      <WorkFlow/>
    
      <CTASection />
    </main>
  )
}
