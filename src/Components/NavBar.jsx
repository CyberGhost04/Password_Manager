import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-purple-400 flex justify-between px-4 h-14 items-center'>
      <div className='font-bold'>Logo</div>
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
