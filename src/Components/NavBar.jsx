import React from 'react'
import { memo } from 'react'

const NavBar = (props) => {

  // const changephoto = ()=>{
  //   props.setv(props.v++)   
  // }

  return (
    <nav className='flex justify-between px-4 h-14 items-center py-10'>
      <div className='font-bold text-5xl'>
        <span className='text-emerald-600'>&lt;</span>
        Pass
        <span className='text-emerald-600'>OP/&gt;</span>
      </div>
      <ul className=''>
        <li className='flex gap-5 text-xl'>
          <a className='rounded-full border bg-white px-4 py-3' href="/"><lord-icon
            src="https://cdn.lordicon.com/laqlvddb.json"
            trigger="morph"
            stroke="bold"
            state="morph-neighbourhood">
          </lord-icon></a>
          {/* <a onClick={changephoto} className='rounded-full border bg-white px-4 py-3' href="/"><lord-icon
            src="https://cdn.lordicon.com/rehjpyyh.json"
            trigger="morph"
            stroke="bold">
          </lord-icon></a> */}
          <a className='rounded-full border bg-white px-4 py-3' href="/"><lord-icon
            src="https://cdn.lordicon.com/wzrwaorf.json"
            trigger="hover"
            stroke="bold"
            state="hover-conversation-alt">
          </lord-icon></a>
        </li>
      </ul>
    </nav>
  )
}

export default memo(NavBar)
