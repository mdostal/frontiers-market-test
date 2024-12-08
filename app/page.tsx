import { Hero } from '@/components/home/hero'
import { FeaturesTabs } from '@/components/home/features-tabs'
import { SearchSection } from '@/components/home/search-section'
import { InfoGrid } from '@/components/home/info-grid'
import { AboutSection } from '@/components/home/about-section'
import { AppPromo } from '@/components/home/app-promo'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesTabs />
      <SearchSection />
      <InfoGrid />
      <AboutSection />
      <div className='width-full items-center justify-center mx-auto'>
        <Image alt="Logo company" 
        loading="lazy" 
        width="104" 
        height="56" 
        decoding="async" data-nimg="1" className="self-center flex justify-center snap-center" 
        src="/images/logo.svg" 
        />
      </div>
      <AppPromo />
    </>
  )
}