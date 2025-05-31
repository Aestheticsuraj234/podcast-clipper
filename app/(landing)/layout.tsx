import { Footer } from '@/feature/landing/components/footer'
import { Navigation } from '@/feature/landing/components/navigation'
import React from 'react'

const RootLayout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <>
    <Navigation/>
        {children}
        <Footer/>
    </>
  )
}

export default RootLayout