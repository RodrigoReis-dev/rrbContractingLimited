/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar'
export default function Footer() {
  return (
    <footer className="w-full mx-auto">
      <div className="p-1 bg-secondary"></div>
      <div className="footer flex-row flex flex-wrap px-10 py-10 text-white dark:bg-gray-900">
        <div className=" flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 text-secondary text-center"
          >
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>

          <p className="flex flex-col text-xl ml-2">
            <strong>RRB Contracting Limited</strong>
            We Proudly Provide the Best Services
            
          </p>
        </div>

        <div className="mx-auto">
          <Navbar />
        </div>
      </div>
      <p className="text-sm mx-auto font-semibold text-center text-orange-300 tracking-wider dark:bg-gray-900 pb-5">
              © Copyright 2022. All Rights Reserved.
      </p>
    </footer>
  )
}
