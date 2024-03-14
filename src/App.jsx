import React from 'react'
import Home from './Components/Home'
import Sections from './Components/Sections'
import Contribution from './Components/Contribution'
import Last from './Components/Last'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'


function App() {


  return (
    <>
      <div>
       <Navbar/>
      <Home/>
      <Sections/>
      <Contribution/>
      <Last/>
      <Footer/>
      </div>
    </>
  )
}

export default App
