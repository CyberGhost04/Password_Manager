import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-white flex justify-around px-4 h-14 items-center'>
      <div className='font-bold text-2xl'>
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
        </div>
      <ul>
        <li className='flex gap-3'>
          <a className='hover:font-bold' href="/">Home</a>
          <a className='hover:font-bold' href="/">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
