import React from 'react'

type Props = {}

const People = (props: Props) => {
  return (
    <div className='w-full mt-10'>
          <h1 className='font-bold text-4xl border-b-2 border-purple-600 pb-4'>Our Team</h1>
          <div className='flex flex-row w-full place-content-center'>
            <div className='m-10 border-purple-600 border-b-2 w-52 pb-4'>
              <h2 className='text-2xl'>Wing Hong Hoe</h2>
              <p>Team Leader</p>
              <p className='text-sm'>Researched invidual problems and organised team</p>
            </div>
            <div className='m-10 border-purple-600 border-b-2 w-52'>
              <h2 className='text-2xl'>Gustas Vilimas</h2>
              <p>Web Developer</p>
              <p className='text-sm'>Created website in react with tailwind</p>
            </div>
            <div className='m-10 border-purple-600 border-b-2 w-52'>            
              <h2 className='text-2xl'>Martin Kyles</h2>
              <p>Software Engineer</p>
              <p className='text-sm'>Programmed the script to record audio and feed to ai</p>
            </div>
            <div className='m-10 border-purple-600 border-b-2 w-52'>            
              <h2 className='text-2xl'>Enya Celestial</h2>
              <p>UI Designer</p>
              <p className='text-sm'>Designed Website using Figma and researched solutions</p>
            </div>
          </div>
        </div>
  )
}

export default People