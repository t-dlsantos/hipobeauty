import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import AboutUs from './components/AboutUS'

export default function App() {

  return (
    <div id='inicio' className="bg-gradient-to-b from-[#03849A] to-[#7FD7E5] h-[689px]">
      <div className="relative max-w-7xl h-full mx-auto">
        {/* Background image container */}
        <div
          className="absolute inset-0 right-0 bg-[url('/skin-care.png')] bg-right bg-no-repeat"
          style={{ zIndex: 0, pointerEvents: 'none' }}
        />
        
        {/* Header and Hero */}
        <Header className="relative z-10" />
        <Hero className="relative z-10" />
      </div>
  
      {/* Products Section */}
      <section id="produtos" className="relative z-10">
        <Products />
      </section>
  
     <section id="sobre" className="relative z-10">
      <AboutUs />
     </section>
      
    </div>
  );
  
}