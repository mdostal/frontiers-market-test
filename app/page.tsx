import { Hero } from '@/components/home/hero'
import { FeaturesTabs } from '@/components/home/features-tabs'
import { SearchSection } from '@/components/home/search-section'
import { InfoGrid } from '@/components/home/info-grid'
import { AboutSection } from '@/components/home/about-section'
import { AppPromo } from '@/components/home/app-promo'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesTabs />
      <SearchSection />
      <InfoGrid />
      <AboutSection />
      <AppPromo />
    </>
  )
}