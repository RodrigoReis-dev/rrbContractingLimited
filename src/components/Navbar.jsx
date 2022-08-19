/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <div className="w-full mx-auto max-w-screen-xl md:px-6 float-right items-centre h-36">
      <nav className="pt-14">
        <div className="mx-auto  float-right ">
          <div className="flex items-center">
            <ul className="flex flex-row flex-wrap space-x-9 text-lg font-normal">
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
                  Painting Services
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
          </div>
        </div>
      </nav>
    </div>
  )
}
