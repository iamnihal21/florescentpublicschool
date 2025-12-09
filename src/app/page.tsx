import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ParallaxTextBlock } from "@/components/parallax-text"
import { VideoSection } from "@/components/video-section"
import { MissionSection } from "@/components/mission-section"
import { ParallaxImagePanels } from "@/components/parallax-image-panels"
import { StorySlider } from "@/components/story-slider"
import { CTAPanel } from "@/components/cta-panel"
import { Footer } from "@/components/footer"
import { missionText, parallaxTexts } from "@/data/index"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ParallaxTextBlock {...parallaxTexts.discover} />
      <VideoSection />
      <MissionSection text={ missionText } />
      <ParallaxImagePanels />
      <ParallaxTextBlock {...parallaxTexts.community} />
      <StorySlider />
      <CTAPanel />
      <Footer />
    </main>
  )
}
