/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return ( 
      <nav className="container mb-2 -mt-14 ">     
            <ul className="flex flex-row flex-wrap float-right items-center space-x-10 text-lg font-normal">
              <li>
                <Link
                  to="/"
                  className="text-secondary-content font-bold px-1 py-1 hover:border-b-2 hover:border-secondary  hover:text-secondary tracking-wider"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-content font-bold px-1 py-1 hover:border-b-2 hover:border-secondary  hover:text-secondary tracking-wider"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-content font-bold px-1 py-1 hover:border-b-2 hover:border-secondary  hover:text-secondary tracking-wider"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-content font-bold px-1 py-1 hover:border-b-2 hover:border-secondary  hover:text-secondary tracking-wider"
                >
                  Contact Us
                </Link>
              </li>
            </ul> 
      </nav>  
  )
}
