/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Banner from './Banner'
import Gallery from './Gallery'
import Partners from './Partners'
import Caroussel from './Carousel'
// import Testimonial from './Testimonial'

export default function Home() {
  return (
    <main className="">
      <Caroussel />
      <Banner />
      <Partners />
      <Gallery />
      {/* <Testimonial /> */}
    </main>
  )
}
