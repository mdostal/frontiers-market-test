import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Image
 from 'next/image'
export function AppPromo() {
  return (
    <section className="container">
      <div className="z-1 relative bg-livestock-pocket grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 rounded-lg">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-between gap-1 md:pt-24 md:pl-8 lg:pb-9 lg:pl-12r">
          <div className="z-1 max-md:px-4 flex flex-col gap-2 text-primary">
            <p className="font-medium leading-6 text-base md:text-xl md:font-semibold md:leading-8">Livestock in your pocket</p>
            <h2 className="font-archia font-semibold text-2xl leading-9 lg:text-[40px] lg:leading-10 overflow-visible md:whitespace-nowrap">
              Get the Frontiers Market <br/> companion app
            </h2>
            <a href="https://apps.apple.com/us/app/livestock-in-your-pocket/id1603067687" 
            className="flex items-center justify-center gap-2 mt-5 md:self-start font-bold text-base md:text-lg leading-7 bg-primary text-white rounded-lg px-4 py-3 md:px-9 md:py-4">
              Download App
              <Image className='text-white'
                src="/images/download.svg"
                alt="Dowload Logo"
                width={20}
                height={20}
                />
            </a>
          </div>
          <div className="rounded-b-lg flex items-center justify-center md:justify-start flex-row gap-2 bg-tertiary md:bg-transparent">
              <Image src={"/images/ranchers.webp"}
                alt="Ranchers"
                width={85}
                height={40}
                className="hidden lg:block"
              />
              <p className="flex items-center gap-1 text-grey text-base xlg:text-[20px] leading-8 font-semibold py-3"> 
                Trusted by the biggest U.S. ranchers
                <Image src={"/images/flag.webp"}
                  height={24}
                  width={24}
                  alt="Flag"
                  className="hidden md:block"
                />
              </p>
          </div>
        </div>
        <Image
          src="/images/pocket_desktop.webp"
          alt="Available on App Store"
          width={522}
          height={470}
          className="row-start-1 flex justify-center md:justify-end"
        />
        <Image
          src="/images/map.webp"
          width={1120}
          height={470}
          alt="Map Background"
          className="absolute max-md:hidden object-fill object-top"
        />
      </div>
    </section>
  )
}