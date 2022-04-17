import { useState } from "react";
import { UseAuthContext } from "../context/auth";
import "../App.css"
import { Link } from "react-router-dom";
import { validation } from "./validation";
export const Signup = () =>{

    const [firstName, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {SignupHandler, setErrorDetails, errorDetails} = UseAuthContext();

    return (
    <>
              <div>
        <div className="container">
       <div className="container-light d-flex-column align-items-center  ">
            <div className="heading3 text-color-light-black text-primary font-weight-bolder heading">Create Account</div>
                <div className="d-flex-column w-75 ">
                    <div className="terms d-flex justify-content-center text-align-center align-items-center terms">Welcome to Instant-Notes!!!!
                    A mordern Notes taking app</div>
                    <div>

                   {errorDetails!=="noerror"?
                <div className="alert alert-solid-danger" id="alert-dismiss">
                <div className="">{errorDetails}</div></div>
                :<h2></h2>}
                   
                    </div>
                    <input type="text" id="firstname" className="input border-color-gray margin-none form-text" placeholder="First Name" 
                    onChange={(e)=>setFirstName(e.target.value)
                    }                         
                    onFocus={()=>setErrorDetails("noerror")}
                    required/> 

                    <input type="text" id="lastname" className="input border-color-gray margin-none form-text" placeholder="Last Name"
                     onChange={(e)=>setLastName(e.target.value)
                    }                         
                    onFocus={()=>setErrorDetails("noerror")}
                    required/> 
                    <input type="email" id="email" className="input border-color-gray margin-none form-text" placeholder="Email id"
                    onChange={(e)=>setEmail(e.target.value)
                    }                         
                    onFocus={()=>setErrorDetails("noerror")}
                    required/> 
                    <input type="password" id="password" className="input border-color-gray margin-none form-text" placeholder="Password" 
                    onChange={(e)=>setPassword(e.target.value)
                    }                         
                    onFocus={()=>setErrorDetails("noerror")}
                    required/> 
                    
                 <div className="d-flex-cols align-items-center terms justify-content-between">
                 <button className="btn btn-primary w-100 margin-none primary-color-bg border-radius-none"
                               onClick={(e)=>{
                                    e.preventDefault()
                                    validation(firstName, lastname, email, password, SignupHandler, setErrorDetails);
                            
                            }}
                 >Submit</button>
                </div>   
               
               
                <Link to={'/login'} className="justify-self-center align-self-center terms ">Already have account?</Link>

                
                </div>
             </div>
              </div>
            </div>
    </>
    
        )
}


