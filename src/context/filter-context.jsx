import { createContext, useContext, useReducer } from "react";
import { FilterFunction } from "../components/filterFunction";

const FilterContext =  createContext()

const UseFilterContext = ()=>useContext(FilterContext)

function FilterContextProvider({children})
{   
    const [state, dispatch] = useReducer(FilterFunction, {
        work:true,
        home:true,
        school:true,
        excercise : true,
        high:true,
        medium:true,
        low:true,
        search:""
    })


    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterContext, UseFilterContext, FilterContextProvider}