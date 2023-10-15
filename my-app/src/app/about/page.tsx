import React from 'react'
import Navbar from '../components/Navbar'
import People from '../components/People'
import Stack from '../components/Stack'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="antialiased bg-[#f6ecfe] relative">
      <header className = "container h-screen">
        <Navbar />
        <People />
        <Stack />
      </header>  
    </main>  
    )
}

export default page