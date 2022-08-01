import React from 'react'
import Galery from './Galery'
import Caroussel from './Slider'



export default function Home() {
  return (
    <main className="w-full">
      {/* <div className='w-full  cover shadow-xl'>
        <img className='w-full' src={require('../images/home.jpeg')} alt='RRB'/>
        </div> */}
    <Caroussel />
    <Galery />
    </main>
  )}