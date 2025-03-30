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
      </div>
    </div>
  )
}

export default GameHomePage