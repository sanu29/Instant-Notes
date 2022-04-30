import "../stylesheets/auth.css"
import { useState } from "react"
import { UseAuthContext } from "../context/auth"
import { Link } from "react-router-dom"

export const Login = () =>{


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {LoginHandler, setErrorDetails, errorDetails} = UseAuthContext();
    return (
            <div>
        <div className="container">
       <div className="container-light d-flex-column align-items-center ">
            <div className="heading3 text-color-light-black text-primary font-weight-bolder heading">Hello Again!!!</div>
                <div className="d-flex-column w-75 ">
                    <div className="terms d-flex justify-content-center text-align-center align-items-center terms">Welcome Back ! You have been missed a lot.</div>
                    {errorDetails!=="noerror"?
                <div className="alert alert-solid-danger" id="alert-dismiss">
                <div className="">{errorDetails}</div></div>
                :<h2></h2>}
                   
                    <input type="email" id="username" className="input border-color-gray  form-text" placeholder="Enter Your Email Id"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    required/> 

                    <input type="password" id="username" className="input border-color-gray  form-text" placeholder="Enter Your Password"
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    required/>  
                    
                 <div className="d-flex-cols align-items-center terms justify-content-between">

                 <div className="justify-self-center align-self-center font-color-primary"
                 onClick={()=>{
                   setEmail('test@gmail.com')
                   setPassword('12345')  
                 }}

                 >Use Test Credentials</div>

                 <button className="btn btn-primary w-100  primary-color-bg border-radius-none margin-top"
                 onClick={(e)=>{
                    e.preventDefault();
                   if(email!=="" || password!=="")
                   {
                    LoginHandler(email,password)
                   }
                   else{
                       setErrorDetails("Fields Cannot be empty")
                   }
                }}
                 >Submit</button>
                </div>   
               
               
                <Link to={"/signup"} className="justify-self-center align-self-center terms margin-top">Create a New Account</Link>

                
                </div>
       </div>
    </div>
            </div>
        )
}