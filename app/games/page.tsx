import React from 'react'
import Link from 'next/link'

const GameHomePage = () => {
  return (
    <div className="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        <Link href="/games/ticTacToe" className="group size-full bg-white shadow-lg rounded-lg p-5 hover:bg-neutral-100 dark:bg-neutral-900 hover:dark:bg-neutral-800 duration-150">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">新版 OOXX</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400 group-hover:dark:text-white duration-150">當玩家在場上放置 O 或 X 標記時，場上同時最多只會保留 3 個標記。一旦出現第 4 個標記，系統會自動移除存在時間最久的標記。被移除的標記在消失前會變成紅色，作為提示。</p>
        </Link>
        {/* <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              <svg className="shrink-0 size-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400">New design projects delivered to your inbox each morning.</p>
        </div>
        <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              <svg className="shrink-0 size-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400">Get your goods in front of millions of potential customers with ease.</p>
        </div>
        <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              <svg className="shrink-0 size-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" /><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" /><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" /><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" /></svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400">New design projects delivered to your inbox each morning.</p>
        </div>
        <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              <svg className="shrink-0 size-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" /><path d="m15.194 13.707 3.814 1.86-1.86 3.814" /><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" /></svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400">Get your goods in front of millions of potential customers with ease.</p>
        </div>
        <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
              <svg className="shrink-0 size-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" /><rect x="3" y="14" width="7" height="7" rx="1" /><circle cx="17.5" cy="17.5" r="3.5" /></svg>
            </div>
            <div className="shrink-0">
              <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Build your portfolio</h3>
            </div>
          </div>
          <p className="text-gray-600 dark:text-neutral-400">The simplest way to keep your portfolio always up-to-date.</p>
        </div> */}
      </div>
    </div>
  )
}

export default GameHomePage