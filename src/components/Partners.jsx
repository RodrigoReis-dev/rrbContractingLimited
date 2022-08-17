import React from 'react'


export default function Partners() {
  return(
    <div className='max-w-6xl mx-auto mb-16'>
      <h2 className=' ml-20 text-secondary text-2xl font-bold mb-10 tracking-wide'>We proudly use…</h2>
     
    <div className='container mx-auto flex flex-row flex-wrap justify-around'>
    <img
                    src={require('../images/resene.png')}
                    loading="lazy"
                    alt="Exterior"
                    className="w-44 h-20"
                  />
      <img
                    src={require('../images/dulux.png')}
                    loading="lazy"
                    alt="Exterior"
                    className="w-44 h-20"
                  />
       <img
                    src={require('../images/valspar.png')}
                    loading="lazy"
                    alt="Exterior"
                    className="w-44 h-20"
                  />
    </div>
    </div>
)}