import {Header} from "../../components/header"
import {Link} from "react-router-dom" 
import {HeartPulse} from "lucide-react"

function Login() {
  return (
    <section>
    
        <Header nav={
            <>       
            <Link className="center shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm bg-[var(--snow-blue-a)] text-white py-1" to="/signup">
             <HeartPulse  className="stroke-white mr-4 "/>
            Become a Donator</Link>         
            <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm py-1" to="/">Home</Link>         
            </> 
        }/> 

        <p>
            LOGIN
        </p>

    </section>
  )
}

export default Login