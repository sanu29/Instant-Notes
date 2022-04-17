import { createContext, useContext, useState } from "react";

const HeaderContext = createContext()
const UseHeaderContext = ()=>useContext(HeaderContext)

function HeaderContextProvider({children})
    {
        const [navDisplay , setNavDisplay] = useState("flex")


        return(
            <HeaderContext.Provider  value={{navDisplay, setNavDisplay}}>
                {children}
            </HeaderContext.Provider>
        )
    }

    export {HeaderContext, UseHeaderContext, HeaderContextProvider}