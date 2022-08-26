import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl md:px-6">
        <Link to="/" className="flex items-center pl-20">
          <img className=" w-52" src={require('../images/rrb.png')} alt="RRB" />
        </Link>
        <div className="pl-20 pr-2 mb-2 text-lg font-bold text-right text-gray-900 marker:hover:underline">
          RRB Contracting Limited <br />{' '}
          <span className="text-secondary">(021) 028 - 19698</span>
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </header>
  )
}
