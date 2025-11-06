import { Header } from "../../components/header"
import {Link} from "react-router-dom"

function Home() {
  return (
    <section className="h-screen w-screen column-t">

        <Header nav={
            <>
            <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm bg-[var(--snow-blue-a)] py-1 text-white" to="/signup">Become a Donator</Link>           
            <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm py-1" to="/login">Login</Link> 
            <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm py-1" to="/">Home</Link> 
            </>
        }/> 
    
        <main className="h-full w-full ">

            <p>Hero</p>
            
        </main>

            
    </section>


  )
}

export default Home