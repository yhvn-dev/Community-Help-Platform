import React from 'react'
import { Darkmode } from "../features/darkmode"

export function Header({nav}) {
  return (
    <div className='center shadow-lg h-[4rem] w-full '>
        <div className='center-l w-1/3 h-full'>
          <Darkmode/>
        </div>
        <nav className='flex items-center justify-start flex-row-reverse w-full h-full'>{nav}</nav>
    </div>
  )
}

