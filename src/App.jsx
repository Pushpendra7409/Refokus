import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'


function App() {
  return (
    <div className=" w-full h-screen bg-zinc-900 text-3xl text-white font-satoshi">
    <Navbar />
    <Work />
    <Stripes />
    <Products />
    <Marquees />
  </div>
    
  )
}

export default App