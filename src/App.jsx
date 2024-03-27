import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Manager from './Components/Manager'
import Glass from './Components/Glass'

function App() {
  const [val, setval] = useState(6)
  let wallpaper = `/icons/wall${val}.jpg`

  return (
    <>
      <div className="md:min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper})` }}>
        <NavBar />
        <Glass />
      </div>
    </>
  )
}

export default App
