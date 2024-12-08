import Image from 'next/image'

export function MobileLinks() {
    return (
        
<button className="rounded-full bg-white p-2 flex items-center md:hidden">
    <div className="rounded-full bg-white h-8 w-8 flex items-center justify-center mr-2">
    <img src="/images/logo_small.svg" alt="Logo" className="h-6 w-6" />
</div>
<Image src="/images/hamburger.svg" alt="Hamburger" width={22} height={22} />
</button>
    )}