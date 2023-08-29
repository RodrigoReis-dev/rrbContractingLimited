/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarDesk() {
  
  return (
    <>
        <nav className="w-full">
          <ul className="w-full mx-auto justify-center hidden sm:flex flex-row p-7   md:space-x-20 md:mt-0 md:text-base text-white md:font-semibold bg-gray-800 tracking-wider uppercase">
            <li>
              <Link
                to="/"
                className="block py-2 px-10 rounded md:hover:bg-transparent md:border-0 hover:text-lime-400 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-10 rounded md:hover:bg-transparent md:border-0 hover:text-lime-400 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-10 rounded md:hover:bg-transparent md:border-0 hover:text-lime-400 md:p-0"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-10 rounded md:hover:bg-transparent md:border-0 hover:text-lime-400 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
    </>
  )
}