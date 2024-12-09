import React from "react"
import Link from "next/link"
import PrelineScript from "@/components/PrelineScript"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col mx-auto size-full">
        <main className="min-h-[100vh]">
          <div className="fixed top-0 left-0 p-3">
            <Link href="/profile" className="text-xl">
              <i className="bi bi-person-circle"></i>&nbsp;
              <span>Profile</span>
            </Link>
          </div>
          <div className="fixed top-0 right-0 p-2">
            <ThemeSwitcher size={32} />
          </div>
          {children}
        </main>
      </div>
      <PrelineScript />
    </>
  )
}