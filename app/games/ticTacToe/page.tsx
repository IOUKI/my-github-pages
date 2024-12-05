'use client'

import React, { useState, useEffect } from 'react'

// 判斷是否有三個相同的標記連成一條線
const checkWinner = (board: (string | null)[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 橫向
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 縱向
    [0, 4, 8], [2, 4, 6]              // 斜向
  ]

  for (const line of lines) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]  // 返回勝利者 'X' 或 'O'
    }
  }

  return null // 沒有勝利者
}

// 尋找最佳格子：阻擋玩家或選擇最有利的格子
const findBestMove = (board: (string | null)[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 橫向
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 縱向
    [0, 4, 8], [2, 4, 6]              // 斜向
  ]

  // 檢查是否有需要阻擋玩家的格子
  for (const line of lines) {
    const [a, b, c] = line
    const values = [board[a], board[b], board[c]]
    if (values.filter(v => v === 'X').length === 2 && values.includes(null)) {
      return line[values.indexOf(null)] // 返回玩家快贏時的空格以阻擋
    }
  }

  // 檢查是否有讓自己接近勝利的格子
  for (const line of lines) {
    const [a, b, c] = line
    const values = [board[a], board[b], board[c]]
    if (values.filter(v => v === 'O').length === 2 && values.includes(null)) {
      return line[values.indexOf(null)] // 返回讓自己接近勝利的空格
    }
  }

  // 隨機選擇剩下的空格
  const availableMoves = board.map((value, index) => value === null ? index : -1).filter(index => index !== -1)
  return availableMoves[Math.floor(Math.random() * availableMoves.length)]
}

// 使用這個 hook 來管理遊戲狀態
const useGameState = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null)) // 用 null 來表示每個格子都還沒選擇
  const [isPlayerTurn, setIsPlayerTurn] = useState(true) // 玩家先攻
  const [history, setHistory] = useState<{ X: number[], O: number[] }>({ X: [], O: [] }) // 儲存 X 和 O 的歷史格子

  // 判斷是否有勝利者
  const winner = checkWinner(board)

  // 更新格子
  const handleClick = (index: number) => {
    if (board[index] !== null || winner) return  // 如果該格已被標記或遊戲結束則不做處理

    const newBoard = [...board]
    const currentMark = isPlayerTurn ? 'X' : 'O' // 玩家先攻是 X，電腦後攻是 O
    const newHistory = { ...history }
    newBoard[index] = currentMark // 在相應格子上標記
    if (currentMark === 'X') {
      newHistory.X.push(index) // 玩家 X 放置標記
    } else {
      newHistory.O.push(index) // 電腦 O 放置標記
    }

    // 如果一方的標記數量達到 4，則移除最舊的標記
    if (newHistory.X.length > 3) {
      const oldestMoveX = newHistory.X.shift() // 移除最舊的 X
      newBoard[oldestMoveX!] = null // 把該位置重置為 null
    }

    if (newHistory.O.length > 3) {
      const oldestMoveO = newHistory.O.shift() // 移除最舊的 O
      newBoard[oldestMoveO!] = null // 把該位置重置為 null
    }

    setBoard(newBoard)
    setHistory(newHistory)
    setIsPlayerTurn(!isPlayerTurn) // 交換回合
  }

  // 電腦回合
  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const bestMove = findBestMove(board) // 尋找最佳格子
      handleClick(bestMove)
    }
  }, [board, isPlayerTurn, winner])

  // 找到即將消失的標記
  const getPendingRemovalIndex = (history: { X: number[], O: number[] }, currentMark: 'X' | 'O') => {
    if (currentMark === 'X' && history.X.length >= 3) {
      console.log("return last x index: ", history.X[0])
      return history.X[0] // 返回最舊的 X 標記索引
    } else if (currentMark === 'O' && history.O.length >= 3) {
      return history.O[0] // 返回最舊的 O 標記索引
    }
    return -1 // 沒有即將消失的標記
  }

  return { board, handleClick, winner, getPendingRemovalIndex, history }
}

const Page = () => {
  const { board, handleClick, winner, getPendingRemovalIndex, history } = useGameState()

  useEffect(() => {
    if (winner) {
      alert(`${winner === 'X' ? '玩家' : '電腦'} 勝利！`)
    }
  }, [winner])

  return (
    <div className="w-full flex justify-center">
      <div>
        <h1>圈圈叉叉遊戲</h1>
        <div className="grid grid-cols-3 gap-1 w-[500px] h-[500px] bg-slate-900 dark:bg-white">
          {board.map((value, index) => {
            const isPendingRemoval = getPendingRemovalIndex(history, value as 'X' | 'O') === index
            return (
              <div
                key={index}
                className={`flex items-center justify-center text-3xl font-black cursor-pointer ${isPendingRemoval ? 'text-red-500' : ''} bg-white dark:bg-slate-900`}
                onClick={() => handleClick(index)} // 點擊格子時更新狀態
              >
                &nbsp;{value}&nbsp;
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
