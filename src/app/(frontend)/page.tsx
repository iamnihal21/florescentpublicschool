import { getPayloadClient } from '@/app/(frontend)/lib/payload-clinet'
import { HeroSlider } from '@/app/(frontend)/components/home/hero-slider'
import { ContentSectionClient } from '@/app/(frontend)/components/home/content-section-client'
import { TestimonialsSlider } from '@/app/(frontend)/components/home/testimonials-slider'
import { MapsSection } from '@/app/(frontend)/components/home/maps-section'
import { ResultsSection } from '@/app/(frontend)/components/home/result-section'

export default async function Page() {
  const payload = await getPayloadClient()

  // This fetches everything in the 'Home' global,
  // including 'heroSlides', 'scrollCards', and 'resultsHighlight'
  const homeData = await payload.findGlobal({
    slug: 'home-page',
    depth: 2 // Required to populate the images inside the resultsHighlight array
  })

  const contactData = await payload.findGlobal({ slug: 'contact-page' })
  const testimonials = await payload.find({ collection: 'testimonials', limit: 10 })

  // Extract the specific field that maps to your DB table 'home_page_results_highlight'
  const resultsData = homeData.resultsHighlight || []

  return (
    <main className="min-h-screen">
      <HeroSlider slides={homeData.heroSlides || []} />

      <ContentSectionClient cards={homeData.scrollCards || []} />

      {/* Target the data from the Home Global resultsHighlight field */}
      <ResultsSection results={resultsData} />

      {/* <TestimonialsSlider testimonials={testimonials.docs || []} /> */}
      <TestimonialsSlider testimonials={testimonials.docs || []} />

      <MapsSection contactInfo={contactData} />
    </main>
  )
}

