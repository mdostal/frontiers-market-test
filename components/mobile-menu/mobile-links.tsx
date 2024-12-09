import Link  from "next/link";


export function MobileLinks() {
    return (
    <div className="flex flex-col gap-4 p-3 border-b border-slate-300">
        <Link href="/" className="font-semibold text-sm sm:text-base w-full">
            Homepage
        </Link>
        <a href="https://frontiersmarket.com/browse" className="font-semibold text-sm sm:text-base w-full">
            Browse Livestock
        </a>
        <a href="https://frontiersmarket.com/dashboard/offer/add" className="font-semibold text-sm sm:text-base w-full">
            Add Listing
        </a>
    </div>
    )
}