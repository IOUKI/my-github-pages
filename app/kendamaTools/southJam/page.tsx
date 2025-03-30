'use client'

import React, { useMemo, useState, useEffect } from 'react'

const SouthJam = () => {
  const [alreadyDownList, setAlreadyDownList] = useState<number[]>([])
  const [currentTrick, setCurrentTrick] = useState<number | null>(null)
  const trickList = useMemo(() => [
    { no: 1, content: "直拉拋一迴旋燈台 insta 拋 1.5 飛行機" },
    { no: 2, content: "離轉 - 離轉 - 拋一迴旋燈台 - 二迴旋抓劍收" },
    { no: 3, content: "逆月 - 拋一迴旋燈台 insta 逆一迴旋逆月 - 收劍" },
    { no: 4, content: "裏鶯 - 離心力戰斧 - 收劍" },
    { no: 5, content: "大皿 - 大鶯 - 小皿 - 小鶯 - 中皿 - 中皿極意 - 天中殺收" },
    { no: 6, content: "轉劍世界一周" },
    { no: 7, content: "Sweets special 企鵝收" },
    { no: 8, content: "飛行機 - 1.5 逆拋飛行機" },
    { no: 9, content: "重力機 - 正一迴旋重力機 - 逆一迴旋重力機" },
    { no: 10, content: "一迴旋竹馬 - 馬上馬 - 抓劍收" },
    { no: 11, content: "快圓月拋一迴旋燈 - 一迴旋抓劍收" },
    { no: 12, content: "正月 - 逆月 - 一迴旋正月 - 一迴旋逆月 - 收劍" },
    { no: 13, content: "落雷一迴旋飛行機" },
    { no: 14, content: "2 Tap 拋兩迴旋拋接止劍" },
    { no: 15, content: "嬉皮敲一迴旋飛行機" },
  ], [])

  const handleLottery = () => {
    const availableTricks = trickList.filter(trick => !alreadyDownList.includes(trick.no))
    if (availableTricks.length === 0) {
      alert("所有招式已經抽完了！")
      return
    }
    const randomIndex = Math.floor(Math.random() * availableTricks.length)
    const selectedTrick = availableTricks[randomIndex]
    setAlreadyDownList([...alreadyDownList, selectedTrick.no])
    setCurrentTrick(selectedTrick.no)
  }

  const handleReset = () => {
    setAlreadyDownList([])
    setCurrentTrick(null)
  }

  return (
    <>
      <div className="w-full px-3 grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleLottery}
          className="py-3 px-4 inline-flex items-center justify-center gap-x-2 text-3xl font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          抽招
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="py-3 px-4 inline-flex items-center justify-center gap-x-2 text-3xl font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          重置
        </button>
      </div>
      <div className="mt-4">
        {currentTrick !== null ? (
          <p className="text-2xl font-semibold text-center">
            {trickList.find(trick => trick.no === currentTrick)?.content}
          </p>
        ) : (
          null
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">已經抽過的招式：</h2>
        <ul className="list-disc pl-5">
          {alreadyDownList.map((trickNo) => (
            <li key={trickNo} className="">{trickList.find(trick => trick.no === trickNo)?.content}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SouthJam