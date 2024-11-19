import React from "react"
import PrelineScript from "@/components/PrelineScript"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
          <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Brand">LanSan</a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center border border-white/10 font-medium text-sm text-gray-200 rounded-lg hover:bg-white/10 focus:outline-none focus:bg-white/10" id="hs-navbar-cover-page-collapse" aria-expanded="false" aria-controls="hs-navbar-cover-page" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-cover-page">
                  <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  <span className="sr-only">Toggle navigation</span>
                </button>
              </div>
            </div>
            <div id="hs-navbar-cover-page" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-cover-page-collapse">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a className="font-medium focus:outline-none hover:underline" href="#" aria-current="page">Landing</a>
                <a className="font-medium focus:outline-none hover:underline" href="#">Account</a>
                <a className="font-medium focus:outline-none hover:underline" href="#">Work</a>
                <a className="font-medium focus:outline-none hover:underline" href="#">Blog</a>
                <div><ThemeSwitcher /></div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-auto text-center py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-white/70">Cover template for <a className="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-white/70 focus:outline-none focus:text-gray-200 focus:decoration-white/70" href="../index.html">Preline</a></p>
          </div>
        </footer>
      </div>
      <PrelineScript />
    </>
  )
}