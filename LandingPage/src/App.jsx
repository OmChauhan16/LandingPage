// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {

  return (
    <>
     <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md-px-10 lg:px-16 lg:py-10 md-py-7 md:justify-between">
     <Header/>
     <Body/>
     <Footer/>
      </div>
    </>
  )
}

export default App
