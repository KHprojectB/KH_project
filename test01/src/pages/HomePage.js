import React from 'react'

import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Contact from '../components/Contact'
import Service_test from '../components/Service/Service_test'

const HomePage = () => {
  return (
    <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Service_test></Service_test>
      <Contact></Contact>
    </main>
  )
}

export default HomePage
