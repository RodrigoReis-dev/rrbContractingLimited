import React from 'react'
import Navbar from './Navbar'



export default function Header() {
  return (
    <header className="w-full flex mx-auto justify-around p-5">
      <div className=" flex p-2 items-center bg-primary w-28 h-28 shadow-lg rounded-xl">
        <h1 className=" text-5xl font-bold whitespace-nowrap text-slate-50">
          RRB
        </h1>
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  )
}
