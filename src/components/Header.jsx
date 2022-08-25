import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="w-full flex-wrap mx-auto -mb-5">
      <div className="container mx-auto -mt-4 flex flex-row flex-wrap justify-between item-center">
        <img className=" w-52 mb-6" src={require('../images/rrb.png')} alt="RRB" />
        <h3 className="flex flex-col text-right font-bold text-xl text-gray-900 mt-14">
          RRB Contracting Limited
          <span className=" text-secondary">021 028 19698</span>
        </h3>
        <Navbar />
      </div>
    </header>
  )
}
