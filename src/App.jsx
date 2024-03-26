import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Manager from './Components/Manager'
import Glass from './Components/Glass'

function App() {

  let ans = "http://localhost:5173"

  return (
    <>
      {/* <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ans + '/icons/wall3.jpg'})` }}>
      <Glass />
      </div> */}

      <NavBar />
      <Manager/> 
    </>
  )
}

export default App
