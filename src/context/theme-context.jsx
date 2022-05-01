import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const useThemeContext = ()=> useContext(ThemeContext);

function ThemeContextProvider({children})
{

    const [theme,setTheme] = useState("light")
    useEffect(()=>{
        if(theme === 'dark')
        {
        document.body.classList.add('darkmode')
        }
        else{
        document.body.classList.remove('darkmode')

        }
    })
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider, useThemeContext}