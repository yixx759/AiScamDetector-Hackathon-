import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className = "flex justify-between sticky top-0 w-full bg-[#f6ecfe] pt-10">
        <h1 className = 'border-b-2 border-transparent hover:border-purple-600'><Link href = "/">Scam Detect</Link></h1>
        <nav>
            <ul className = "flex gap-x-6">
                <li className = 'border-b-2 border-transparent hover:border-purple-600 '><Link href = "/mic">Demo</Link></li>
                <li className = 'hover:border-b-2 border-purple-600'><Link href = "/edcuation">Education</Link></li>
                <li className = 'hover:border-b-2 border-purple-600'><Link href = "/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar