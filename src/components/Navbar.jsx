/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between pb-1">
        <section className="flex sm:hidden">
          <div
            className="space-y-2 cursor-pointer bg-gray-700 p-3 ml-40 mb-5 rounded-lg shadow-xl"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            {/* // toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 p-4"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-orange-400 animate-pulse"
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
            <ul className="flex flex-col items-center justify-between min-h-[140px] text-white gap-8">
              <li className="">
                <Link
                  to="/"
                  className="items-center justify-center px-16 py-3 text-base font-medium text-center border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-orange-400 dark:text-white dark:border-gray-700 dark:hover:bg-secondary dark:focus:ring-orange-400 shadow-md shadow-orange-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="/about"
                  className="items-center justify-center px-16 py-3 text-base font-medium text-center border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-orange-400 dark:text-white dark:border-gray-700 dark:hover:bg-secondary dark:focus:ring-orange-400 shadow-md shadow-orange-900"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  to="/projects"
                  className="items-center justify-center px-14 py-3 text-base font-medium text-center border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-orange-400 dark:text-white dark:border-gray-700 dark:hover:bg-secondary dark:focus:ring-orange-400 shadow-md shadow-orange-900"
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li className="">
                <Link
                  to="/contact"
                  className="items-center px-14 py-3 text-base font-medium text-center border-2 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-orange-400 dark:text-white dark:border-gray-700 dark:hover:bg-secondary dark:focus:ring-orange-400 shadow-md shadow-orange-900"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="w-full mx-auto justify-center hidden sm:flex flex-row p-7 bg-gray-50 rounded-lg border border-gray-100  md:space-x-16 md:mt-0 md:text-base text-white md:font-semibold md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 tracking-wider">
          <li>
            <Link
              to="/"
              className="block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:dark:hover:text-secondary hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:dark:hover:text-secondary hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:dark:hover:text-secondary hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:dark:hover:text-secondary hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
