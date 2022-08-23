import React from 'react'

export default function Testimonial() {
  return (
    <div className="max-w-6xl mx-auto text-center text-gray-900 mt-20 mb-60">
      <h2 className="text-3xl font-bold">
        View some of our customer testimonials
      </h2>
      <div className="max-w-6xl flex flex-col justify-around  mx-auto mt-8 mb-8  gap-7">
        <div className="max-w-5xl mx-auto p-4 bg-gray-100 rounded-lg shadow-xl">
          <div className="mb-2">
            <div className="h-3 text-9xl text-left text-secondary">“</div>
            <br />
            <p className="px-9 text-center text-sm text-gray-800">
              We completed our house in late 2021, We built a larger house / our
              family home. In which Rafael was the main painter who almost
              single handily painted full interior and partial exterior, as our
              main exterior was majority brick cladding . So linear and soffits.
              Rafael is apart from a working machine, honest, reliable, and very
              hard working, and Punctual. His skills and finishing work are
              excellent which is what you would hope for when building or
              renovating.
            </p>
            <p className="px-9 text-center text-sm text-gray-800">
              If we build or renovate again, Rafael will be our painter. Apart
              from his professionalism , Rafael was always a pleasure personally
              on site. It can be very tough at times though the building process
              , so choosing the right tradespeople are very important. We were
              very lucky to have Rafael on our family home.
            </p>
            <div className="h-3 text-9xl text-right text-secondary">”</div>
            <div className="text-center">
              <h5 className="font-extrabold text-3xl text-black">
                Mark & Tracy Hockenhull
              </h5>
              <p className="text-sm italic text-gray-500">
                Penbeagle estate , Te Kowhai 0272 529357
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-4 bg-gray-100 rounded-lg shadow-xl">
          <div className="mb-2">
            <div className="h-3 text-9xl text-left text-secondary">“</div>
            <br />
            <p className="px-9 text-center text-sm text-gray-800">
              Rafael's company and his team had great communication, were very prompt and completed tasks on time. They went above and beyond to deliver a quality job. I highly recommend Rafael's company. I have used his services three times and have been happy each time.
            </p>
            <div className="h-3 text-9xl text-right text-secondary">”</div>
            <div className="text-center">
              <h5 className="font-extrabold text-3xl text-black">Alec Grant</h5>
              <p className="text-sm italic text-gray-500">Hamilton, Waikato</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
