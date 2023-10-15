import React from 'react'

type Props = {}

const Recording = (props: Props) => {
  return (
    <div className='text-left flex'>
        <h2 className='mr-5 mt-2'>Press here to start recording</h2>
        <button className='hover:bg-purple-600 w-32 h-10 bg-slate-200 transition-colors'>Hi</button>
    </div>
  )
}

export default Recording