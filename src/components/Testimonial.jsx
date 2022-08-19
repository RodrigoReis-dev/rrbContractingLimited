import React from 'react'

export default function Testimonial() {
  return (
    <div className='max-w-6xl mx-auto text-center text-gray-900 mt-20 mb-60'>
      <h2 className='text-3xl font-bold'>View our customer testimonials below</h2>
      <div className="max-w-6xl flex flex-row justify-around  mx-auto mt-8 mb-8  gap-5">
        <div className="max-w-xl p-4 bg-gray-100 rounded-lg shadow-xl">
          <div className="mb-2">
            <div className="h-3 text-9xl text-left text-secondary">“</div>
            <br />
            <p className="px-4 text-center text-gray-800">
              The Landscaping Professionals were quick, courteous and very
              helpful. They helped me restore my lawn and gardens completely after
              putting in my deck. I was worried it wouldn’t be done in time for my
              garden party, but they finished the job with time to spare!”
            </p>
            <div className="h-3 text-9xl text-right text-secondary">”</div>
            <div className="text-center">
              <h5 className="font-extrabold text-3xl text-black">John Doe</h5>
              <p className="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>
        <div className="max-w-xl p-4 text-gray-900 bg-gray-100 rounded-lg shadow-xl">
          <div className="mb-2">
            <div className="h-3 text-9xl text-left text-secondary">“</div>
            <br />
            <p className="px-4 text-center text-gray-800">
              The Landscaping Professionals were quick, courteous and very
              helpful. They helped me restore my lawn and gardens completely after
              putting in my deck. I was worried it wouldn’t be done in time for my
              garden party, but they finished the job with time to spare!”
            </p>
            <div className="h-3 text-9xl text-right text-secondary">”</div>
            <div className="text-center">
              <h5 className="font-extrabold text-3xl text-black">John Doe</h5>
              <p className="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
