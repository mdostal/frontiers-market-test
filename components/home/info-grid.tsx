import { steps } from '@/data/info-grid'

export function InfoGrid() {

  return (
    <section className="bg-how-to-start py-14 md:py-24">
      <div className="relative container flex flex-col items-center justify-center py-4">
        <p className="z-50 text-center text-base text-secondary font-semibold uppercase">
          How to start
        </p>
        <h2 className="z-50 text-center text-2xl leading-9 md:text-3xl md:leading-12 text-primary font-archia font-semibold">
          Start selling around the country
        </h2>
        <div className="z-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 md:py-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
              <div className="flex items-center flex-row md:flex-col gap-2">
                <span className="text-secondary text-lg md:text-4xl font-bold">
                  {step.number}
                </span>
                <span className="text-primary text-base md:text-lg font-semibold">
                  {step.title}
                </span>
                <p className="text-sm md:text-base md:text-center text-grey">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a className="z-50 text-white text-base text-center md:text-lg font-bold rounded-lg py-3 px-4 max-sm:w-full md:px-18 bg-secondary" 
          href="https://frontiersmarket.com/register">
          Create Account
        </a>
        <picture className="z-0 absolute">
          <source srcSet="/images/us_country.webp" type="image/webp" />
          <img
            src="/images/us_country.webp"
            width={"90%"}
            // height={648}
            alt="map"
            className="object-contain sm:object-cover max-md:object-bottom object-top max-md:translate-y-9 md:scale-x-110 z-0"
          />
        </picture>
      </div>
    </section>
  )
}