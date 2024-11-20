'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  useEffect(() => setIsClient(true), [])
  useEffect(() => {
    if (isClient) router.push('/profile')
  }, [isClient])
  return null
}

export default Home