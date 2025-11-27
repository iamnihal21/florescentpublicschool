import { Header } from "@/app/components/header"
import { HeroSlider } from "@/app/components/hero-slider"
import { ContentSection } from "@/app/components/content-section"
import { TestimonialsSlider } from "@/app/components/testimonials-slider"
import { MapsSection } from "@/app/components/maps-section"
import { Footer } from "@/app/components/footer"
import { ResultsSection } from "@/app/components/result-secion"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ContentSection />
      <ResultsSection />
      <TestimonialsSlider />
      <MapsSection />
      <Footer />
    </main>
  )
}