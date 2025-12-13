import { HeroSlider } from "@/app/components/home/hero-slider"
import { ContentSection } from "@/app/components/home/content-section"
import { TestimonialsSlider } from "@/app/components/home/testimonials-slider"
import { MapsSection } from "@/app/components/home/maps-section"
import { ResultsSection } from "@/app/components/home/result-secion"
import { DiscoverSection } from "@/app/components/home/textDiscoverSection"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      {/* <DiscoverSection /> */}
      <ContentSection />
      <ResultsSection />
      <TestimonialsSlider />
      <MapsSection />
    </main>
  )
}
