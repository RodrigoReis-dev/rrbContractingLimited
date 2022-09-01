import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-100">
              First Choice for Painting Contractors
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              With over 10 years experience, talk to the professionals with the
              proven track record as the finest surface specialists!
            </p>
            <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 animate-pulse">
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-center text-white border border-gray-500 rounded-lg hover:bg-orange-500 hover:text-gray-900 focus:ring-4 focus:ring-gray-100 tracking-wide"
            >
              Speak to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
