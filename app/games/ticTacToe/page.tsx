'use client'

import React, { useState } from 'react'
import SinglePlayer from '@/components/ticTacToe/SinglePlayer'
import TwoPlayer from '@/components/ticTacToe/TwoPlayer'

const TicTacToePage = () => {
  const [currentModel, setCurrentModel] = useState<'SinglePlayer' | 'TwoPlayer'>('SinglePlayer')
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="py-3">
          <div className="flex items-center">
            <label htmlFor="game-model-with-description" className="text-sm text-gray-500 me-3 dark:text-neutral-400">單人模式</label>
            <input 
              type="checkbox" 
              checked={currentModel !== 'SinglePlayer'}
              onChange={() => setCurrentModel(currentModel === 'SinglePlayer' ? 'TwoPlayer' : 'SinglePlayer')}
              id="game-model-with-description" className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600  before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200" />
            <label htmlFor="game-model-with-description" className="text-sm text-gray-500 ms-3 dark:text-neutral-400">雙人模式</label>
          </div>
        </div>
      </div>
      <div>
        {currentModel === 'SinglePlayer' ? <SinglePlayer /> : <TwoPlayer />}
      </div>
    </>
  )
}

export default TicTacToePage