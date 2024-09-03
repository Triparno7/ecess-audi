import React from 'react'

const Events = () => {
  return (
    <>
    <div className="bg-white h-1 opacity-10 min-w-fit">
      
    </div>
    <div className='text-center text-4xl font-bold text-orange-400 p-1'>
        <h1>FEATURED EVENTS </h1>
    </div>
    <div className="text-white">
      {/* <div className="flex gap-12 justify-center items-center my-4 text-center flex-wrap animate-loop-scroll"> */}
      {/* <div className="flex gap-12 animate-loop-scroll"> */}
      <div className="flex gap-12 justify-center items-center my-4 text-center flex-wrap">
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/Exordium.jpg"  width={200} height={200} alt="error" />
          <p className="font-bold">Exordium</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/VLSI.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">VLSI Workshop</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/tech.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">Tech Talk</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/Alumni.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">Alumni talkshow</p>
        </div>
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/Invited.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">Invited talk</p>
        </div>
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/PCB.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">PCB Design workshop</p>
        </div>
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/signals.png"  width={200} height={200} alt="" />
          <p className="font-bold">Signals decoded</p>
        </div>
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center sticky top-[100px] md:static max-w-none">
          <img className="" src="/placement.jpg"  width={200} height={200} alt="" />
          <p className="font-bold">Placement Talks</p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Events