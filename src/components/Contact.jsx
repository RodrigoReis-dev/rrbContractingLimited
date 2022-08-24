import React, { useRef } from 'react'
import { MailIcon } from '@heroicons/react/outline'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_gmail_contact',
        'template_gl07t22',
        form.current,
        'uVt7ns5vTAcGA_Zlu'
      )
      .then(
        (result) => {
          alert('Email sent successfully')
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
      e.target.reset()
  }

  return (
    <div className="w-full mx-auto dark:bg-gray-800 mb-24">
      <div className="container max-w-4xl mx-auto dark:bg-gray-900 tracking-wide shadow-2xl shadow-gray-700 mt-12 mb-12 border-2 border-black">
        <div className="grid grid-cols-2">
          {/* :MAP CONTAINER */}
          <div className="order-1 col-span-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405079.12089914543!2d174.82009616376033!3d-37.5154499431578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d39b8c63698f5%3A0x400ef6143a2adc0!2sWaikato%20District%2C%20Waikato!5e0!3m2!1sen!2snz!4v1660686147183!5m2!1sen!2snz"
              title="map"
              scrolling="no"
              frameBorder="0"
              width="100%"
              height="300px"
              className=""
              loading="lazy"
            />
          </div>
          {/* :CONTACT FORM CONTAINER */}
          <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-8 px-6 font-medium">
            <form
              className="mx-auto max-w-xl space-y-4"
              ref={form}
              onSubmit={handleSubmit}
            >
              {/* ::Name Input */}
              <div>
                {/* :::label */}
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                {/* :::input */}
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  className="form-input w-full block p-2 shadow-sm rounded bg-white text-base placeholder-gray-800 "
                />
              </div>
              {/* ::Email Input */}
              <div>
                {/* :::label */}
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                {/* :::input */}
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="form-input w-full block p-2 shadow-sm rounded bg-white text-base placeholder-gray-800 "
                />
              </div>
              {/* ::Message Input */}
              <div className="col-span-full">
                {/* :::label */}
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                {/* :::input */}
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="How can we help?"
                  className="form-textarea resize-none p-2 w-full shadow-sm rounded bg-white placeholder-gray-800 caret-orange-500"
                ></textarea>
              </div>
              {/* ::Submit Button */}
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="py-2 px-7 rounded border border-spacing-4 border-secondary text-base text-secondary font-semibold uppercase hover:bg-secondary hover:text-white tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* :CONTACT INFOS CONTAINER */}
          <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
            <div className="mx-auto max-w-xl flex flex-col space-y-5">
              {/* ::Title Contact Us */}
              <h2 className="text-4xl font-oswald uppercase text-white font-semibold">
                Contact us
              </h2>
              {/* ::Text */}
              <p className="text-base text-gray-100">
                Talk to us today about your next project! <br /> Get in touch!
              </p>
              {/* ::Email contact */}
              <a
                href="#mail"
                className="inline-flex items-center text-sm text-info font-semibold hover:text-blue-300"
              >
                <MailIcon className="mr-2 w-5 text-gray-100" />
                contact@rrb.nz
              </a>
              {/* ::Address */}
              <p className="text-sm text-gray-100 leading-6">
                37 Tennille st, Flagstaff <br /> 3210 Hamilton <br /> New
                Zealand
              </p>
              {/* ::Socials */}
              <div className="flex items-center">
                {/* :LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/rrb-contracting-limited-4b7628249/"
                  className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125"
                  style={{ backgroundColor: '#1DA1F2' }}
                >
                  {/* ::linkedin svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    {' '}
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
                  </svg>
                </a>
                {/* :FACEBOOK */}
                <a
                  href="#facebook"
                  className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                  style={{ backgroundColor: '#4267B2' }}
                >
                  {/* ::facebook svg */}
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                  </svg>
                </a>
                {/* :Instagram */}
                <a
                  href="https://www.instagram.com/rrbcontracting/"
                  className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                >
                  {/* ::instagram svg */}
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
