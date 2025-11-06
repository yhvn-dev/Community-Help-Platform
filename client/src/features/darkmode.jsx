import {useState,useEffect} from 'react'

export function Darkmode() {
    const [dark,setDark] = useState(() =>{
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme === "dark" : false
    })

    useEffect(() =>{
        if(dark){
            localStorage.setItem("theme","dark")
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }else{
            localStorage.setItem("theme","light")
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
    },[dark])

  return (
    <div className='center'>
        <button onClick={() => setDark(!dark)} className='w-5 h-5 rounded-full bg-[var(--metal-dark4)]'>
        </button>
    </div>
  )
}

