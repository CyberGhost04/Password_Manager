import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-around px-4 h-14 items-center'>
      <div className='font-bold text-4xl'>
        <span className='text-emerald-600'>&lt;</span>
        Pass
        <span className='text-emerald-600'>OP/&gt;</span>
        </div>
      <ul>
        <li className='flex gap-10 text-xl'>
          <a className='hover:font-bold' href="/">Home</a>
          <a className='hover:font-bold' href="/">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
