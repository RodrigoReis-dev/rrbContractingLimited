/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarDesk from './NavbarDesk'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <div className="w-full items-center justify-between pb-1">
        {/* Mobile Navbar ---- some CSS is completed in index.css*/}
        <nav className="w-full item-center sm:hidden bg-gray-800">
          <div
            className="flex flex-col item-center pl-5 space-y-2 cursor-pointer py-8 mb-5 "
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-9 animate-pulse bg-lime-600"></span>
            <span className="block h-0.5 w-9 animate-pulse bg-lime-600"></span>
            <span className="block h-0.5 w-9 animate-pulse bg-lime-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            {/* // toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 p-10"
              onClick={() => setIsNavOpen(false)}
              // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-9 w-9 text-lime-400 animate-pulse cursor-pointer"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-white gap-16">
              <li className="">
                <Link
                  to="/"
                  onClick={() => setIsNavOpen(false)}
                  className="items-center justify-center px-20 py-4 text-base font-semibold text-center border-2 rounded-lg hover:bg-lime-500 focus:ring-4 focus:ring-lime-400 text-white border-gray-500 shadow-md shadow-lime-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="/about"
                  onClick={() => setIsNavOpen(false)}
                  className="items-center justify-center px-20 py-4 text-base font-semibold text-center border-2 rounded-lg hover:bg-lime-500 focus:ring-4 focus:ring-lime-400 text-white border-gray-500 shadow-md shadow-lime-900"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  to="/projects"
                  onClick={() => setIsNavOpen(false)}
                  className="items-center justify-center px-16 py-4 text-base font-semibold text-center border-2 rounded-lg hover:bg-lime-500 focus:ring-4 focus:ring-lime-400 text-white border-gray-500 shadow-md shadow-lime-900 tracking-wider"
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li className="">
                <Link
                  to="/contact"
                  onClick={() => setIsNavOpen(false)}
                  className="items-center justify-center px-16 py-4 text-base font-semibold text-center border-2 rounded-lg hover:bg-lime-500 focus:ring-4 focus:ring-lime-400 text-white border-gray-500 shadow-md shadow-lime-900 tracking-wider"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Desktop Navbar */}
        <NavbarDesk />
      </div>
    </>
  )
}
