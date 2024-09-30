import React from 'react'
import Image from 'next/image'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Home = () => {
  return (
    <>
      <ThemeSwitcher />
      <div className="text-9xl">大家好！！！</div>
      <Image src="./test.jpg" alt="" width={200} height={200} />
    </>
  )
}

export default Home