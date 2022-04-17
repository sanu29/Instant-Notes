import { NavLink } from "react-router-dom"
import { UseHeaderContext } from "../context/header-context";
import { UseNoteContext } from "../context/note-context";

export const Nav = () =>{
    const {navDisplay, setNavDisplay} = UseHeaderContext()
    const {newNoteForm , setnewNoteForm} = UseNoteContext()
      let activeStyle = {
   backgroundColor : 'rgb(237 222 222)',
  };
    return (
        <>
         <div className="menu d-flex-cols p-relative" id="navbar" style={{display:navDisplay}}>
            <div className="d-flex-cols justify-content-center align-items-center">
                
                <NavLink to={'/homepage'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="menuli padding-16">
                    <span className="material-icons">
                        home
                        </span>
                    Home
                </NavLink >
                <div className="menuli padding-16">
                    <span className="material-icons">label</span>
                    Label
                </div>
                <NavLink to={"/archive"} className="menuli padding-16"
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                ><span className="material-icons"
                
                >
                    bookmark
                    </span>Archive</NavLink>
                    <div className="menuli padding-16"><span className="material-icons">
                        logout
                        </span>Saniya Shaikh</div>

                <button className="btn btn-primary border-radius-none newnote "
                
                onClick={()=>
                    {
                       
                        setnewNoteForm("flex")}
                    }
                >Create New Note</button>

                                
                    
                    </div>

       

        </div>
        </>
    )
}