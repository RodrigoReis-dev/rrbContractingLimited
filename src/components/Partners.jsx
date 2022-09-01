import React from 'react'

export default function Partners() {
  return (
    <div className="w-full mx-auto bg-white pt-16 pb-16">
      <h2 className="max-w-screen-xl mx-auto text-orange-600 pl-8 text-3xl font-bold mb-10 tracking-wide">
        We proudly use…
      </h2>
      <div className="container mx-auto flex flex-row flex-wrap justify-around gap-5">
        <img
          src={require('../images/resene.png')}
          loading="lazy"
          alt="Exterior"
          className="w-46 h-20"
        />
        <img
          src={require('../images/dulux.png')}
          loading="lazy"
          alt="Exterior"
          className="w-46 h-20"
        />
        <img
          src={require('../images/Wattyl.png')}
          loading="lazy"
          alt="Exterior"
          className="w-44 h-12 mt-5"
        />
      </div>
    </div>
  )
}
