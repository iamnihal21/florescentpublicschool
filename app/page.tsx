import { Header } from "@/app/components/header"
import { HeroSlider } from "@/app/components/hero-slider"
import { ContentSection } from "@/app/components/content-section"
import { TestimonialsSlider } from "@/app/components/testimonials-slider"
import { MapsSection } from "@/app/components/maps-section"
import { Footer } from "@/app/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />

      <ContentSection
        title="Excellence in Education"
        description="Our innovative curriculum combines rigorous academics with hands-on learning experiences. We prepare students for success in an ever-changing world through personalized instruction, cutting-edge technology, and a commitment to developing critical thinking skills."
        buttonText="Learn More"
        imageUrl="/UI/image.png"
        imageAlt="Students engaged in classroom learning"
      />

      <ContentSection
        title="Empowering Future Leaders"
        description="Beyond academics, we foster leadership, creativity, and community engagement. Our students participate in diverse extracurricular activities, service projects, and collaborative programs that build confidence and prepare them to make meaningful contributions to society."
        buttonText="Explore Programs"
        imageUrl="/UI/book.png"
        imageAlt="Students performing on stage"
        reverse
      />
      
      <TestimonialsSlider />
      <MapsSection />
      <Footer />
    </main>
  )
}