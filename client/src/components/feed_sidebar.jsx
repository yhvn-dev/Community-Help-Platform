import React from 'react'
import { NavLink } from 'react-router-dom'


export function Feed_Sidebar() {
  return (
    <div className='shadow-lg col-start-1 col-span-full row-start-2 row-end-2'>
        

        <div>logo</div>
        <div>
            <NavLink className={({isActive }) => {`${isActive ? "bg-red-400" : "bg-white"}`} }>Feed</NavLink>
        </div>

    </div>
  )
}

