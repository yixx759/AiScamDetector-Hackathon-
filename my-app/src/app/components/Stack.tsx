import React from 'react'

type Props = {}

function Stack({}: Props) {
  return (
        <div>
          <h1 className='font-bold text-4xl border-b-2 border-purple-600 pb-4 mt-12'>Tech Stack</h1>
          <div className='flex flex-row place-content-center text-center'>
            <div className = 'h-fit border-b-2 border-purple-600 m-10 pb-5'>
              <h2 className='text-xl'>Flask API</h2>
              <img src = {"flask.png"} className='h-32'></img>
            </div>
            {/* <div className = 'h-fit border-b-2 border-purple-600 m-10 pb-5'>
              <h2>Whisper API</h2>
              <img src='openai.png' className='h-32'></img>
            </div> */}
            <div className = 'h-fit border-b-2 border-purple-600 m-10 pb-5'>
              <h2>Next JS</h2>
              <img src='nextjs.png' className='h-32'></img>
            </div>
            <div className = 'h-fit border-b-2 border-purple-600 m-10 pb-5'>
              <h2>Tailwind</h2>
              <img src='tailwind.png' className='h-32'></img>
            </div>
            <div className = 'h-fit border-b-2 border-purple-600 m-10 pb-5'>
              <h2>Chat GPT</h2>
              <img src='chatgpt.png' className='h-32'></img>
            </div>
          </div>
        </div>  )
}

export default Stack