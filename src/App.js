import React from 'react'

import { Footer, FAQ, Offers, Why, Services, Testimonials, Header, CTA } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='App relative leading-[1.5] font-sans font-[400] overflow-x-hidden'>
      <Navbar />
      <Header />
      <Offers />
      <Services />
      <Why />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
