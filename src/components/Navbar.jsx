/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <div className=" ">
      {/* <div className=' w-36'>
        <img src={require('../images/logo-rrb.png')} alt='RRB'/>
        </div>
    */}
     

      <nav className="pt-14">
        <div className="mx-auto max-w-screen-xl md:px-6 float-right">
          <div className="flex items-center ">
            <ul className="flex flex-row space-x-9 text-base font-normal">
              <li>
                <Link
                  to="/"
                  className="text-primary-content font-bold px-1 py-2 hover:border-b-2 hover:border-primary  hover:text-primary tracking-wide"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-content font-bold px-1 py-1 hover:border-b-2 hover:border-primary  hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-primary-content font-bold px-1 py-1 hover:border-b-2 hover:border-primary  hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-content font-bold px-1 py-1 hover:border-b-2 hover:border-primary  hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
