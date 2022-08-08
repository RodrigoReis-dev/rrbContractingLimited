import React from 'react'
import Navbar from './Navbar'



export default function Header() {
  return (
    <header className="w-full flex justify-between mx-auto max-w-screen-xl md:px-6">
      <div className=" flex p-2 m-5 items-center justify-center bg-primary w-36 h-36 shadow-xl rounded-lg">
        <span className="text-6xl font-extrabold text-slate-50">
          RRB
        </span>
      </div>
      <div className=" ">
        <Navbar />
      </div>
    </header>
  )
}
