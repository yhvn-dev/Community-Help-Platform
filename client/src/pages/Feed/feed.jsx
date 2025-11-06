import React from 'react'
import {Feed_Sidebar} from "../../components/feed_sidebar"
import {Feed_Header} from "../../components/feed_header"

function Feed() {
  return (
        <section className="h-screen w-full grid grid-cols-2 grid-rows-[3rem_3rem_2fr_8fr] gap-4">

        <Feed_Sidebar />

        <Feed_Header 
            left={<p>Left</p>} 
            right={<p>Header</p>} 
        />

        <div className="flex justify-center items-center gap-4 rounded-2xl w-full h-full col-start-1 col-span-full row-start-3 ">
            {/* <div className='h-full w-full shadow-lg rounded-2xl center '>a</div> */}
        </div>

        <div className="shadow-lg rounded-2xl w-full h-full col-start-1 col-span-full row-start-4">
            campaign
        </div>

        </section>
  )
}

export default Feed