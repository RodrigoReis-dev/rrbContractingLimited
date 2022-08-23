import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="container flex flex-wrap justify-between mx-auto">
      <div className='container flex flex-row justify-between'>
        <img
          className="w-80 -mt-10"
          src={require('../images/rrb.png')}
          alt="RRB"
        />
          <h3 className="flex flex-col float-right text-right mt-20 font-bold text-xl text-gray-900 ">
            RRB Contracting Limited
            <span className=" text-secondary">09 625 5045</span>
          </h3>
      </div>
      <Navbar />
    </header>
  )
}
