import React from 'react'

import { Footer, Blog, Offers, Possibility, WhatGPT3, Header} from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App relative leading-[1.5] font-sans font-[400] overflow-x-hidden'>
      <Navbar />
      <Header />
      <Offers />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
