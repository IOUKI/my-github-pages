'use client'

import React, { useState } from 'react'
import SinglePlayer from '@/components/ticTacToe/SinglePlayer'
import TwoPlayer from '@/components/ticTacToe/TwoPlayer'

const TicTacToePage = () => {
  const [currentModel, setCurrentModel] = useState<'SinglePlayer' | 'TwoPlayer'>('SinglePlayer')
  return (
    <>
      <div>
        <button onClick={() => setCurrentModel(currentModel === 'SinglePlayer' ? 'TwoPlayer' : 'SinglePlayer')}>
          {currentModel}
        </button>
        <div>
          {currentModel === 'SinglePlayer' ? <SinglePlayer /> : <TwoPlayer />}
        </div>
      </div>
    </>
  )
}

export default TicTacToePage