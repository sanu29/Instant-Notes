import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AuthContext = createContext()
const UseAuthContext = ()=>useContext(AuthContext)

function AuthContextProvider({children})
{
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoding] = useState(false)
    const [userDetails, setUserDeatils] = useState('')
    const [errorDetails, setErrorDetails] = useState('noerror')
    const navigate = useNavigate()

    const SignupHandler =async (firstName, lastName, email, password) =>
    {
            const newUser = {firstName,lastName,email,password}

            try{
                const response =await  axios.post(`/api/auth/signup`,newUser)
               localStorage.setItem("token", response.data.encodedToken); 
                localStorage.setItem("user", JSON.stringify(response.data.createdUser));
                navigate("/login");
                <Navigate replace to="/login"/>     
               

            }
            catch(err)
            {   
                setErrorDetails(err.response.data.errors[0])
            }
    }

    const  LoginHandler = async (email,password) =>{


        const authUser = {email,password};          
            try{
                const response = await axios.post(`/api/auth/login`,authUser);
              
                if(response.status !== 201)
                {
           
                setIsLogin(true)
                localStorage.setItem("token", response.data.encodedToken); 
                localStorage.setItem("user", JSON.stringify(response.data.foundUser)); 
                localStorage.setItem("password",password); 
               
                     navigate("/homepage");

                     <Navigate replace to="/homepage"/>     
                console.log(response.data)
               
                }
                else{
                    setErrorDetails("password is Incorrect")
                  
                }}
        catch(err)
        {   
           
            setErrorDetails(err.response.data.errors[0])
        }
    }
    return (
        <AuthContext.Provider value={{SignupHandler, LoginHandler, errorDetails,setErrorDetails, isLoading, isLogin, userDetails}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,UseAuthContext,AuthContextProvider}