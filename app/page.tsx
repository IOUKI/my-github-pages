import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="text-9xl text-gray-800">大家好！！！</div>
      <Image src="/test.jpg" alt="" width={200} height={200} />
    </>
  )
}

export default Home