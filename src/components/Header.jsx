import React from 'react'
import Navbar from './Navbar'



export default function Header() {
  return (
    <header className="w-full flex justify-between mx-auto max-w-screen-2xl md:px-6">
      <div className=" flex p-2 m-5 items-center justify-center bg-secondary w-36 h-36 shadow-xl rounded-lg">
        <span className="text-6xl font-extrabold text-slate-50">
          RRB
        </span>
      </div>
      <div className="mt-10">
        <h3 className='float-right font-bold text-lg text-gray-900'>RRB Contracting Limited<br/><span className='float-right text-secondary'>09 625 5045</span></h3>
        <Navbar />
      </div>
    </header>
  )
}
