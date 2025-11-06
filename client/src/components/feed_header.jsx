import React from 'react'
import { NavLink } from 'react-router-dom'

export function Feed_Header({left,right}) {
  return (
    <div className='shadow-lg col-start-1 col-span-full row-start-1 row-end-1 bg-amber-400'>
    
        <div>
            {left}
        </div>
        <div>
            {right}
        </div>

    </div>
  )
}

