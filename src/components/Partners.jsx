import React from 'react'


export default function Partners() {
  return(
    <div className='max-w-screen-xl mx-auto mb-16'>
      <h2 className=' text-secondary pl-8 text-3xl font-bold mb-10 tracking-wide'>We proudly use…</h2>
     
    <div className='container mx-auto flex flex-row flex-wrap justify-around'>
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
                    src={require('../images/valspar.png')}
                    loading="lazy"
                    alt="Exterior"
                    className="w-46 h-16"
                  />
    </div>
    </div>
)}