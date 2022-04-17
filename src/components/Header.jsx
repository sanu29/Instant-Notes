import { UseHeaderContext } from "../context/header-context"

export const Header = () =>{
    const {navDisplay, setNavDisplay} = UseHeaderContext()
    return (

        <>
          
        <div className="header border-radius-none d-flex justify-content-between align-items-center">
            <div>
            <div className="logo-header font-color-primary align-self-center">
                <span className="material-icons menu-ham" id="menu"
                onClick={()=>{
                            if(navDisplay == "flex" || window.innerWidth<'640px')
                            {
                                setNavDisplay("none")

                            }
                            else{
                                setNavDisplay("flex")

                            }

                }}
                
                >menu</span>
                Instant Notes
            </div></div>
            <span className="material-icons font-color-primary">
                dark_mode
                </span>
                
        </div>
       
        </>

    )
}