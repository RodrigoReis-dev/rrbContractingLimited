/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Galery() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <h2 className="text-gray-900  text-3xl font-bold mb-4">
              Painting Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8">
            {/* <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/interior.jpeg')}
                  loading="lazy"
                  alt="Interior"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Interior Painting
                </a>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/exterior.jpeg')}
                  loading="lazy"
                  alt="Exterior"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Exterior Painting
                </a>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/roof.jpeg')}
                  loading="lazy"
                  alt="Roof"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Roof Painting
                </a>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/fence.jpeg')}
                  loading="lazy"
                  alt="Fence"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Fence Painting
                </a>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/commercial.jpeg')}
                  loading="lazy"
                  alt="Commercial"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Commercial Painting
                </a>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div>
              <a
                href="#"
                className="group h-64 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
              >
                <img
                  src={require('../images/wash.jpeg')}
                  loading="lazy"
                  alt="Washing"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="text-gray-700 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                >
                  Exterior Washing
                </a>
              </div>
            </div>
            {/* /* <!-- product - end --> */}
          </div>
        </div>
      </div>
    </>
  )
}
