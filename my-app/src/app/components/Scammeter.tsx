import React from 'react'

type Props = {}

const Scammeter = (props: Props) => {
  return (
    <div className='w-[95vw] text-left'>
        <meter className='h-20 w-[70vw] text-purple-600' value="0.5"></meter>
    </div>
  )
}

export default Scammeter