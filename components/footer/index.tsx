import { SocialLinks } from './social-links'

export function Footer() {
  return (
    <footer className="container flex flex-col gap-10 pt-16 bottom-0 w-full pl-2">
      <section className="flex flex-col gap-8 md:flex-row w-full">
        <div className="flex flex-1 flex-col text-primary w-full">
            <p className="text-borderGreen font-semibold text-base leading-10 md:text-lg md:leading-10">Let's keep in touch!</p>
            <a className='font-archia font-semibold text-xl md:text-2xl leading-8 md:leading-9'
              href="mailto:info@frontiersmarket.com">
              info@frontiersmarket.com
            </a>
            <a className="font-archia font-semibold text-xl md:text-2xl leading-8 md:leading-9" 
              href="tel:+1 512-387-4314">
              +1 512-387-4314
            </a>
          </div>
          <SocialLinks />
      </section>
      <section className="pl-2 flex flex-col gap-4 font-medium text-beigeGrey border-t border-lightGrey py-8 md:flex-row md:justify-between">
        <div className="flex flex-row gap-4 text-sm">
          <a href="https://frontiersmarket.com/terms-of-service">Terms of Service</a>
          <a href="https://frontiersmarket.com/privacy-policy">Privacy Policy</a>
          </div>
          <p className="text-xs md:text-sm">
            Copyright © Frontiers Market 2024. All Rights Reserved.
          </p>
        </section>
    </footer>
  )
}