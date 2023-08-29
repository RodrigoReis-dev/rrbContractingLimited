import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="w-full ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl md:px-6 p-16">
        <Link to="/" className="flex items-center pl-20">
        <div className=" flex items-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-20 h-20 text-lime-600 text-center shadow-lg shadow-black rounded-xl p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>

          <p className="flex flex-col font-bold text-5xl ml-2 text-gray-900">
            <strong className=''>SIGMA</strong>
            <span className="text-lime-700 text-xl font-bold">Surface Specialists</span>
          </p>
        </div>
          {/* <img
            className=" w-52"
            src={require('../images/rrb.png')}
            alt="Sigma Logo"
          /> */}
        </Link>
        <Link
              to="/contact"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold text-lg rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Get in touch <br />{' '}
          <span className="">(027) 391 - 4531   ↔️   (021)0839 - 5527</span>
            </Link>
       
      </div>
      <div className="">
        <Navbar />
      </div>
    </header>
  )
}
