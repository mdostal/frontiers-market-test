import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Image from 'next/image'
import { MobileLinks } from "./mobile-links"
import { MobileHeader } from "./mobile-header"


export function MobileMenu() {
  return (

<Sheet>
  <SheetTrigger>
    <div className='className="rounded-full bg-white p-2 flex items-center md:hidden'>
      <div className="rounded-full bg-white h-8 w-8 flex items-center justify-center mr-2">
        <img src="/images/logo_small.svg" alt="Logo" className="h-6 w-6" />
      </div>
        <Image src="/images/hamburger.svg" alt="Hamburger" width={22} height={22} />
    </div>
  </SheetTrigger>

  <SheetContent side={"left"}>
    <SheetHeader className="p-4 text-lg border-b border-slate-200">
      <SheetTitle>
        <MobileHeader/>
     </SheetTitle>
    <SheetDescription>
      </SheetDescription>
    </SheetHeader>
        <MobileLinks/>
    </SheetContent>
</Sheet>
    
  )
}