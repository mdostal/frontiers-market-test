import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-start gap-[64px]">
      <div className="max-lg:self-center flex-shrink-0">
        <Image
          src="/images/tfmf.webp"
          width={528}
          height={648}
          alt="Rancher with cattle"
          className="rounded-lg shadow-lg"
        />
        <p className="text-center md:text-lg font-bold leading-[30px] max-md:pt-2">
          Joe Draper, happy Frontiers Market rancher
        </p>
      </div>
      <article className="flex flex-col gap-8 max-lg:items-center text-center md:text-left">
        <div>
          <p className="hidden md:block text-base text-secondary font-semibold uppercase">
            Who We Are
          </p>
          <p className="md:hidden text-base text-secondary font-semibold uppercase">Letter From The Founders</p>
          <h2 className="text-2xl leading-9 md:text-[36px] md:leading-12 text-primary font-archia font-semibold">
            The Frontiers Market Family
          </h2>
        </div>
      <div className="flex flex-col gap-10">
        <p className="text-grey text-base md:text-lg md:leading-7">
          Frontiers Market got its start in Texas with one goal: provide farmers and ranchers with digital solutions to help them become more efficient, profitable, and competitive in national markets.
          </p>
          <p className="text-grey text-base md:text-lg md:leading-7">
            Our team of ranchers and tech innovators is helping build a stronger future for agriculture, as a trusted partner of operations across the country.
          </p>
          <p className="text-grey text-base md:text-lg md:leading-7">
            We are driven by the belief that agriculture is the backbone of this country and without farmers and ranchers creating a secure and independent food supply, there is no United States.
          </p>
      </div>
      <Image alt="signature" loading="lazy" width="322" height="64" decoding="async" data-nimg="1" className="max-md:w-[230px] pt-2" src="/images/signature.svg" />
      </article>
    </section>
  )
}