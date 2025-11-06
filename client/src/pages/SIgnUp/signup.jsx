import {useState,useEffect} from "react"
import {User,Mail,MapPinPlusInside,Lock} from "lucide-react"
import { Header } from "../../components/header"
import {Link, useNavigate} from "react-router-dom"


function SignUp(){
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {            
            navigate("/feed")
        } catch (error) {
            console.error("Error Sigining Up",error)
        }
    }

    
    return(
    
        <section className="h-screen w-screen flex items-center justify-start flex-col">

            <Header nav={
                <>
                <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm py-1" to="/login">Login</Link> 
                <Link className="shadow-lg border-1 rounded-lg mx-2 border-gray-400 px-4 text-sm py-1" to="/">Home</Link>                  
                </>
            }/> 

            <main className="sgn-main center bg-red-blue w-full h-full ">

                    <form action="" onSubmit={handleSubmit} className="lg:w-[40%] md:[50%] bg-white flex items-center justify-evenly flex-col h-[90%] w-[90%] rounded-2xl shadow-lg">
                        <div>
                            <label htmlFor="" className="sgn-text text-2xl text-[var(--metal-dark5)]">SignUp</label>
                        </div>

                        <div className="input-box center w-[70%]  relative">
                            <input  className="w-full px-4 py-1 border-2 rounded-xl border-[var(--metal-dark4)]"  type="text" placeholder="" />
                            <label className="bg-white px-4 absolute text-[0.8rem] pointer-events-none text-[var(--metal-dark4)] left-4 " htmlFor="">Fullname</label>
                            <User className="right-4 absolute stroke-[var(--metal-dark4)]" size={18}/>
                        </div>
                        <div className="input-box center w-[70%] relative">
                            <input  className="w-full px-4 py-1 border-2 rounded-xl border-[var(--metal-dark4)]"  type="text" placeholder="" />
                            <label className="bg-white px-4 absolute text-[0.8rem] pointer-events-none text-[var(--metal-dark4)] left-4 " htmlFor="">Email</label>
                            <Mail className="right-4 absolute stroke-[var(--metal-dark4)]" size={18}/>
                        </div>
                       
                        <div className="input-box center w-[70%] relative">
                            <input  className="w-full px-4 py-1 border-2 rounded-xl border-[var(--metal-dark4)]"  type="text" placeholder="" />
                            <label className="bg-white px-4 absolute text-[0.8rem] pointer-events-none text-[var(--metal-dark4)] left-4 " htmlFor="">Country</label>
                            <MapPinPlusInside className="right-4 absolute stroke-[var(--metal-dark4)]" size={18}/>
                        </div>
                        <div className="input-box center w-[70%] relative">
                            <input className="w-full px-4 py-1 border-2 rounded-xl border-[var(--metal-dark4)]"   type="text" placeholder="" />
                            <label className="bg-white px-4 absolute text-[0.8rem] pointer-events-none text-[var(--metal-dark4)] left-4 " htmlFor="">Password</label>
                            <Lock className="right-4 absolute stroke-[var(--metal-dark4)]" size={18}/>
                        </div>

                         <div className="column-t w-[70%] relative  border-b-1 border-[var(--metal-dark4)]">

                            <label htmlFor="" className="text-[var(--metal-dark4)]">Gender</label>
                            <div className="center">
                                <div>                            
                                    <input type="radio" name="gender"  value="Male"className="mx-4 my-4 border-2 rounded-xl border-[var(--metal-dark4)]"/>
                                    <label htmlFor="" className="text-[var(--metal-dark4)]">Male</label>                                     
                                </div>
                                <div>
                                    <input type="radio" name="gender"  value="female"className="mx-4 my-4 border-2 rounded-xl border-[var(--metal-dark4)]"/>
                                    <label htmlFor="" className="text-[var(--metal-dark4)]">Female</label>                                     </div>
                                  <div>
                                    <input type="radio" name="gender"  value="others" className="mx-4 my-4 border-2 rounded-xl border-[var(--metal-dark4)]"/>
                                    <label htmlFor="" className="text-[var(--metal-dark4)]">Other</label>                              
                                </div>
                                
                            </div>
                                             
                        </div>

                        
                         <div className="center-t w-[70%]">
                            <button   type="submit"   className="bg-[var(--snow-blue-b)] rounded-xl text-[var(--metal-dark1)] 
                             shadow-lg px-8 py-[5px] w-full cursor-pointer">Sign Up</button>
                        </div>

                    </form>
                
            </main>

        </section>
    )


}

export default SignUp