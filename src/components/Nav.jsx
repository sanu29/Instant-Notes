import { NavLink } from "react-router-dom"

export const Nav = () =>{

      let activeStyle = {
   backgroundColor : 'rgb(237 222 222)',
  };
    return (
        <>
         <div class="menu d-flex-cols p-relative" id="navbar">
            <div class="d-flex-cols justify-content-center align-items-center">
                
                <NavLink to={'/homepage'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="menuli padding-16">
                    <span class="material-icons">
                        home
                        </span>
                    Home
                </NavLink >
                <div class="menuli padding-16">
                    <span class="material-icons">label</span>
                    Label
                </div>
                <div class="menuli padding-16"><span class="material-icons">
                    bookmark
                    </span>Archive</div>
                <div class="menuli padding-16"><span class="material-icons">
                    delete
                    </span>Trash</div> 
                    <div class="menuli padding-16"><span class="material-icons">
                        logout
                        </span>Saniya Shaikh</div>

                <button class="btn btn-primary border-radius-none newnote">Create New Note</button>
                    </div>

       

        </div>
        </>
    )
}