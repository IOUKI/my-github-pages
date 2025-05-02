import React, { useState, useEffect, useCallback } from 'react';
import Confetti from 'react-confetti-boom';

type Player = 'blue' | 'red'

const BlitzGameScreen = () => {
  const [gameStart, setGameStart] = useState<boolean>(false)
  const [blueSecond, setBlueSecond] = useState<number>(3)
  const [redSecond, setRedSecond] = useState<number>(3)
  const [player, setPlayer] = useState<Player | null>(null)
  const [winner, setWinner] = useState<Player | null>(null)

  // 玩家切換處理
  const handleChangePlayer = useCallback((changePlayer: Player) => {
    if (!player) {
      if (changePlayer === 'blue') setPlayer('red')
      else if (changePlayer === 'red') setPlayer('blue')
    } else if (player !== changePlayer) {
      setPlayer(changePlayer)
    }
  }, [setPlayer, player])

  const handleGameover = useCallback(() => {
    setGameStart(false)
    setBlueSecond(60)
    setRedSecond(60)
    setPlayer(null)
    setWinner(null)
  }, [setGameStart, setBlueSecond, setRedSecond, setPlayer, setWinner])

  // 倒數計時
  useEffect(() => {
    if (!player) return

    const reduceSecond = (second: number, setSecond: React.Dispatch<number>) => {
      if (second === 0) return
      setSecond(second - 1)
    }

    const interval = setInterval(() => {
      if (player === 'blue') reduceSecond(blueSecond, setBlueSecond)
      if (player === 'red') reduceSecond(redSecond, setRedSecond)
    }, 1000);

    return () => clearInterval(interval)
  }, [player, blueSecond, redSecond, setBlueSecond, setRedSecond])

  // 獲勝判斷
  useEffect(() => {
    if (blueSecond === 0) setWinner('red')
    if (redSecond === 0) setWinner('blue')
  }, [blueSecond, redSecond, setWinner])

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <button
        onClick={() => setGameStart(true)}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        遊戲開始
      </button>
      {gameStart && (
        <div className="fixed top-0 left-0 w-screen h-screen select-none">
          <div className="w-full h-full grid grid-cols-2">
            <div
              onClick={() => handleChangePlayer('red')}
              className={`${player === 'red' ? "bg-blue-800" : "bg-blue-500"} flex justify-center items-center`}
            >
              <div className="text-center">
                <p className="text-9xl">
                  {blueSecond}
                </p>
                {!player && (<p className="text-2xl">點擊後開始倒數</p>)}
              </div>
            </div>
            <div
              onClick={() => handleChangePlayer('blue')}
              className={`${player === 'blue' ? "bg-red-800" : "bg-red-500"} flex justify-center items-center`}
            >
              <div className="text-center">
                <p className="text-9xl">
                  {redSecond}
                </p>
                {!player && (<p className="text-2xl">點擊後開始倒數</p>)}
              </div>
            </div>
          </div>
        </div>
      )}
      {winner && (
        <div
          onClick={handleGameover}
          className={`${winner === 'red' ? 'bg-red-500' : 'bg-blue-500'} fixed top-0 left-0 w-screen h-screen select-none`}
        >
          <Confetti mode="boom" particleCount={200} colors={[winner === 'blue' ? '#ef4444' : '#3b82f6']} />
          <Confetti mode="fall" particleCount={100} colors={['#E0E0E0', '#FFAAD5', '#2894FF', '#ef4444', '#28FF28', '#FFFF37']} />
          <div className="w-full h-full flex justify-center items-center">
            <div className="grid grid-cols-1 gap-3 text-center">
              <span className="text-9xl">
                {winner === 'blue' ? '藍' : '紅'}方勝利
              </span>
              <span className="text-2xl">點擊繼續</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlitzGameScreen;