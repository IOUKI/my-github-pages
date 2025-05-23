'use client'

import React, { useState, useEffect, useCallback } from 'react'

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

// 尋找最佳格子：優先選擇勝利位置，然後是阻擋玩家，最後隨機選擇
const findBestMove = (board: (string | null)[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 橫向
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 縱向
    [0, 4, 8], [2, 4, 6]              // 斜向
  ]

  // 1. 檢查是否可以讓自己勝利
  for (const line of lines) {
    const [a, b, c] = line
    const values = [board[a], board[b], board[c]]
    if (values.filter(v => v === 'O').length === 2 && values.includes(null)) {
      return line[values.indexOf(null)] // 返回讓自己勝利的空格
    }
  }

  // 2. 檢查是否需要阻擋玩家的勝利
  for (const line of lines) {
    const [a, b, c] = line
    const values = [board[a], board[b], board[c]]
    if (values.filter(v => v === 'X').length === 2 && values.includes(null)) {
      return line[values.indexOf(null)] // 返回阻擋玩家的空格
    }
  }

  // 3. 隨機選擇剩下的空格
  const availableMoves = board.map((value, index) => value === null ? index : -1).filter(index => index !== -1)
  return availableMoves[Math.floor(Math.random() * availableMoves.length)] // 隨機選擇
}

// 使用這個 hook 來管理遊戲狀態
const useGameState = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null)) // 用 null 來表示每個格子都還沒選擇
  const [isPlayerTurn, setIsPlayerTurn] = useState(true) // 玩家先攻
  const [history, setHistory] = useState<{ X: number[], O: number[] }>({ X: [], O: [] }) // 儲存 X 和 O 的歷史格子

  // 判斷是否有勝利者
  const winner = checkWinner(board)

  // 更新格子
  const handleClick = useCallback((index: number) => {
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
  }, [board, isPlayerTurn, history, winner])

  // 電腦回合
  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const bestMove = findBestMove(board) // 尋找最佳格子
      handleClick(bestMove)
    }
  }, [board, isPlayerTurn, winner, handleClick])

  // 重設遊戲
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setHistory({ X: [], O: [] })
    setIsPlayerTurn(true)
  }

  // 找到即將消失的標記
  const getPendingRemovalIndex = (history: { X: number[], O: number[] }, currentMark: 'X' | 'O') => {
    if (currentMark === 'X' && history.X.length >= 3) {
      return history.X[0] // 返回最舊的 X 標記索引
    } else if (currentMark === 'O' && history.O.length >= 3) {
      return history.O[0] // 返回最舊的 O 標記索引
    }
    return -1 // 沒有即將消失的標記
  }

  return { board, handleClick, winner, getPendingRemovalIndex, history, resetGame }
}

const SinglePlayer = () => {
  const { board, handleClick, winner, getPendingRemovalIndex, history, resetGame } = useGameState()

  // 找到即將消失的標記索引
  const pendingRemovalIndexX = getPendingRemovalIndex(history, 'X')
  const pendingRemovalIndexO = getPendingRemovalIndex(history, 'O')

  return (
    <div className="w-full flex justify-center">
      <div>
        <div className="flex justify-between">
          {winner === 'X' && (
            <h1 className="text-yellow-400 text-5xl">玩家勝利！</h1>
          )}
          {winner === 'O' && (
            <h1 className="text-yellow-400 text-5xl">電腦勝利！</h1>
          )}
          {winner && (
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={resetGame}
            >
              重新開始遊戲
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 lg:gap-1 w-64 h-64 lg:w-[500px] lg:h-[500px] bg-slate-900 dark:bg-white">
          {board.map((value, index) => {
            // 判斷該格是否是即將消失的標記
            let isPendingRemoval = false
            if (value === 'X' && index === pendingRemovalIndexX) {
              isPendingRemoval = true
            } else if (value === 'O' && index === pendingRemovalIndexO) {
              isPendingRemoval = true
            }
            return (
              <div
                key={index}
                className={`flex items-center justify-center text-3xl font-black bg-white dark:bg-slate-900 cursor-pointer ${isPendingRemoval ? 'text-red-500' : ''
                  }`} // 根據是否即將消失來改變顏色
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

export default SinglePlayer
