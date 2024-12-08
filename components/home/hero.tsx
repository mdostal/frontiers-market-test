"use client"

export function Hero() {
  return (
    <section className="container max-md:px-0">
      <div className="relative flex flex-col items-center justify-center py-10 md:pt-24 md:pb-40"
       style={{
        backgroundImage: `url('/images/banner.webp')`,
         backgroundSize: "cover",
         backgroundPosition: "center",
        }}>
        <span className="text-sm sm:text-base bg-white text-primary font-medium gap-2 py-1 px-4 rounded-3xl">
        Trusted by 10,000+ livestock owners 🐄
        </span>
        <h1 className="text-3xl md:text-[56px] md:leading-[4rem] text-primary text-center font-gilroy font-semibold p-5 pb-10">
          Search Livestock For Sale
        </h1>
        <a className="bg-secondary text-white text-base md:text-lg font-bold rounded-lg py-4 px-11" href="https://frontiersmarket.com/browse">
          Browse livestock
        </a>
      </div>
    </section>
  )
}