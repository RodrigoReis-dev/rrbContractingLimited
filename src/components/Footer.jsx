import React from 'react'
import NavbarDesk from './NavbarDesk'
export default function Footer() {
  return (
    <footer className="w-full mx-auto">
      <div className="p-1 bg-lime-600"></div>
      <div className="footer flex-row flex flex-wrap px-10 py-10 text-white bg-gray-800 ">
        <div className=" flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-20 text-lime-500 text-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>

          <p className="flex flex-col text-lG ml-2">
            <strong>SIGMA PAINTING CONTRACTORS LIMITED</strong>
            <span className="text-lime-200">We Proudly Provide the Best Services</span>
          </p>
        </div>
        <div className="mx-auto">
          <NavbarDesk />
        </div>
      </div>
      <p className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium px-5 py-2.5 text-center">
        © Copyright 2022. All Rights Reserved.
      </p>
    </footer>
  )
}
