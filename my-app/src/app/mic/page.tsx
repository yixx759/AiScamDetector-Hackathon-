import React from 'react'
import Navbar from '../components/Navbar'
import Recording from '../components/Recording'
import Scammeter from '../components/Scammeter'
import Dialogue from '../components/Dialogue'
import HPhrases from '../components/HPhrases'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="antialiased bg-[#f6ecfe] relative">
      <header className = "container">
        <Navbar />
        
      </header>
    </main>
  )
}

export default page