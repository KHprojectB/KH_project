import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
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
