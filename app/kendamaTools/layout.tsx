import React from "react"
import Link from "next/link"
import PrelineScript from "@/components/PrelineScript"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col mx-auto size-full">
        <main className="min-h-[100vh]">
          <div className="w-full flex justify-between">
            <div className="p-3">
              <Link href="/profile" className="text-xl">
                <i className="bi bi-person-circle"></i>&nbsp;
                <span>Profile</span>
              </Link>
            </div>
            <div className="p-3">
              <ThemeSwitcher size={32} />
            </div>
          </div>
          {children}
        </main>
      </div>
      <PrelineScript />
    </>
  )
}