import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { DiscoverSection } from "@/components/discover-section"
import { VideoSection } from "@/components/video-section"
import { MissionSection } from "@/components/mission-section"
import { ParallaxImagePanels } from "@/components/parallax-image-panels"
import { CommunitySection } from "@/components/community-section"
import { StorySlider } from "@/components/story-slider"
import { CTAPanel } from "@/components/cta-panel"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <DiscoverSection />
      <VideoSection />
      <MissionSection />
      <ParallaxImagePanels />
      <CommunitySection />
      <StorySlider />
      <CTAPanel />
      <Footer />
    </main>
  )
}
