

export function SideMenu() {
  return (
    <div className="fixed overflow-hidden z-30 bg-transparent bg-opacity-25 inset-0 transform ease-in-out transition-all delay-200 duration-300 opacity-0 -translate-x-full">
        <section className="w-2/3 left-0 absolute bg-white h-full shadow-xl delay-100 duration-300 ease-in-out transition-all transform z-20 -translate-x-full">
            <aside className="relative w-full pb-10 flex flex-col space-y-1 overflow-y-scroll h-full">
                <header className="p-4 text-lg border-b border-slate-200">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-row items-center gap-2 justify-between">
                                <img src="/images/logo_small.svg" alt="Logo" className="h-8 w-8" />
                                <div className="flex flex-col">
                                    <a className="font-semibold text-sm sm:text-base rounded-md py-2 px-3 text-primary border border-lightGrey" href="/login">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <div className="flex flex-col gap-4 p-3 border-b border-slate-300">
                        <div>
                            <a className="font-semibold text-sm sm:text-base w-full" href="/">
                                Homepage
                            </a>
                        </div>
                        <div>
                            <a className="font-semibold text-sm sm:text-base w-full" href="/browse">
                                Browse Livestock
                            </a>
                        </div>
                        <div>
                            <a className="font-semibold text-sm sm:text-base w-full" href="/dashboard/offer/add">
                                Add Listing
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
        <section className="w-screen h-full cursor-pointer bg-black opacity-20 absolute top-0 left-0 hidden">
        </section>
    </div>
  )
}
