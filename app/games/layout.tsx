import React from "react"
import PrelineScript from "@/components/PrelineScript"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col mx-auto size-full">
        <main className="min-h-[100vh]">
          <div className="fixed top-0 right-0">
            <ThemeSwitcher />
          </div>
          {children}
        </main>
      </div>
      <PrelineScript />
    </>
  )
}