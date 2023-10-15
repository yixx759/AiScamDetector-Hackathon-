import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className="bg-[#b6fcdd] w-full h-auto text-black pt-20 pb-20 text-center">
        <div>
        <h1 className="text-4xl font-bold mb-4 text-black tracking-wider">Features</h1>
          <div className="w-[600px] mx-auto">
            <h2 className="text-xl border-b-2 border-black pb-4 mb-5">Check your calls in real time</h2>
            <p className="tracking-tight mt-4">A large majority of individuals are targetted by scam call centers so we decided enough is enough.
              We have created a tool that will listen to your calls and will let you know if you are being scammed. Just run the script during call
              and we will do the rest.
            </p>
          </div>
          <div className="flex flex-row max-w-8xl m-16">
              <div className="border-b-2 border-[#65db0a] max m-10 bg-[#88d6b4] bg-opacity-40 p-10 rounded-2xl">
                <h2 className="text-2xl mb-5">Listen in Real Time</h2>
                <p className="text-left">Our AI will listen to your call and give you information in real time about your call.
                  If it is a scam or if its legit, our AI will provide accurate results.
                </p>
              </div>
              <div className="border-b-2 border-[#65db0a] w-auto m-10 bg-[#88d6b4] bg-opacity-40 p-10 rounded-2xl">
                <h2 className="text-2xl mb-5">We'll let you know</h2>
                <p className="text-left">We will highlight keywords in red to make the stand out, scammers will use certain words which can make
                  identifying scam calls much easiser for you.
                </p>
              </div>
              <div className="border-b-2 border-[#65db0a] w-auto m-10 bg-[#88d6b4] bg-opacity-40 p-10 rounded-2xl">
                <h2 className="text-2xl mb-5">Provide some data</h2>
                <p className="text-left">We will give you some data on what you fell for, e.g. if a scammer attempted to 
                  emotionally or psychologically manipulate you into their trap.</p>
              </div>
              <div className="border-b-2 border-[#65db0a] w-auto m-10 pb-10 bg-[#88d6b4] bg-opacity-40 p-10 rounded-2xl">
                <h2 className="text-2xl mb-5">Training our AI</h2>
                <p className="text-left">We are constantly training our ai to keep up to date with new scammer methods or scripts.
                  We want to keep you safe from scammers so we are always on the look out.
                </p>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Features