"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { buyerFeatures, sellerFeatures } from '@/data/features-tabs'


export function FeaturesTabs() {
  return (
    <section className="container pt-6">
      <p className="text-center text-base text-secondary">
        Trusted livestock marketplace
      </p>
      <h2 className="text-center text-2xl leading-9 md:text-[36px] md:leading-12 text-primary font-archia font-semibold">
        Why buy &amp; sell on Frontiers Market?
      </h2>

      <div className="container">
        <Tabs defaultValue="selling" className="font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl text-grey">
          <section className="flex flex-col items-center py-6 md:py-8">
            <TabsList className="flex gap-2 border border-slate-300 rounded-3xl p-1">
              <TabsTrigger className='font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl 
                data-[state=active]:text-white data-[state=active]:bg-secondary
                data-[state=inactive]:text-grey data-[state=inactive]:bg-transparent'
              value="selling">
                I'm here for selling
              </TabsTrigger>
              <TabsTrigger className='font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl 
                data-[state=active]:text-white data-[state=active]:bg-secondary
                data-[state=inactive]:text-grey data-[state=inactive]:bg-transparent'
                value="buying">
                I'm here for buying
              </TabsTrigger>
            </TabsList>
          </section>        
          <TabsContent value="selling" className="">
          {sellerFeatures.map((feature, index) => (
                <article key={index} className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
                  <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
                    <p className="font-semibold text-sm text-secondary leading-5 uppercase">
                      {feature.title}
                    </p>
                    <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
                      {feature.header}
                    </p>
                    <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center md:justify-end">
                    <picture>
                      <source srcSet={feature.image} type="image/webp" />
                      <img alt="Large selection" src={feature.image} width="360px" decoding="async" loading="lazy" />
                    </picture>
                  </div>
                </article>
              ))}
          </TabsContent>
          <TabsContent value="buying" className="">
              {buyerFeatures.map((feature, index) => (
                <article key={index} className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
                  <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
                    <p className="font-semibold text-sm text-secondary leading-5 uppercase">
                      {feature.title}
                    </p>
                    <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
                      {feature.header}
                    </p>
                    <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center md:justify-end">
                    <picture>
                      <source srcSet={feature.image} type="image/webp" />
                      <img alt="Large selection" src={feature.image} width="360px" decoding="async" loading="lazy" />
                    </picture>
                  </div>
                </article>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}