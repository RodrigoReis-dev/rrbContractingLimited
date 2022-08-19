/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Banner from './Banner'
import Galery from './Galery'
import Partners from './Partners'
import Caroussel from './Slider'
import Testimonial from './Testimonial'

export default function Home() {
  return (
    <main className="">
      <Caroussel />
      <Banner />
      <Partners />
      <Galery />
      <Testimonial />
    </main>
  )
}
